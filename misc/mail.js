const nodemailer = require('nodemailer');
const { mailgun_username, mailgun_password } = require('../config/mailer');

let transporter = nodemailer.createTransport({
    service: "gmail", // true for 465, false for other ports
    auth: {
      user: mailgun_username, // generated ethereal user
      pass: mailgun_password, // generated ethereal password
    },
});

let info = (to, subject, html, name, path) => { 
    transporter.sendMail({
    from: '"User Verification \u2705" <ivorycloud022@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    attachments: [
        {filename: name, path: path}
    ],
    html: html // html body
}, (err, response)=>{
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
});
}

module.exports = info;