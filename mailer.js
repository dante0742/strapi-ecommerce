const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

const sendMail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: '"Teramatt Support" <support@teramatt.com>',
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
