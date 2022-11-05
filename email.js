const nodemailer = require('nodemailer');
const ejs = require('ejs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anas.raheem2003@gmail.com',
      pass: 'fqegszdodvczkuyt'
    }
  });
// const EmailTemplate = require('email-templates').EmailTemplate;
// const Promise = require('bluebird');
// function sendEmail(obj) {
//     return transporter.sendMail(obj);
// }

const sendEmail = (receiver, subject) => {
  ejs.renderFile(__dirname + '/templates/invoice.ejs', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var mailOptions = {
        from: 'anas.raheem2003@gmail.com',
        to: receiver,
        subject: subject,
        html: data
      };
      

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        
      });
    }
  });
};

module.exports = {
  sendEmail
};