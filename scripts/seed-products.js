'use strict';

const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

// Helper to upload one image
async function uploadImage(imagePath) {
  const file = fs.createReadStream(path.join(__dirname, imagePath));
  const uploaded = await strapi.plugins['upload'].services.upload.upload({
    files: file,
  });
  return uploaded[0].id;
}

// Create one product
async function createProduct(imageId) {
  const name = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  const price = parseFloat(faker.commerce.price(5, 500));

  const product = await strapi.entityService.create('api::product.product', {
    data: {
      name,
      description,
      price,
      image: imageId,
    },
  });

  console.log(`✅ Product: ${name}`);
}

module.exports = async () => {
  console.log('🌱 Seeding Faker Products...');

  const imageId = await uploadImage('./sample-images/default.jpg');

  // Generate 10 dummy products
  for (let i = 0; i < 10; i++) {
    await createProduct(imageId);
  }

  console.log('🌱 Done seeding products!');
};
