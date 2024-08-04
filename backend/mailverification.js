const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'matrixeventtesting@gmail.com',
    pass: 'lnrl mugc tlgy elqa',
  },
});

// Email sending function
const mailsender = (mail, otp) => {
  let mailOptions = {
    from: 'matrixeventtesting@gmail.com',
    to: mail,
    subject: 'Otp for Matrix',
    text: `Your otp is ${otp}`,
  };

  // Return a promise from the sendMail call
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve(info);
      }
    });
  });
};

module.exports = mailsender;
