var nodemailer = require('nodemailer');
var express = require('express');
var app = express();


app.get('/:email', function(req, res ) {
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ENTER YOUR EMAIL HERE',
          pass: 'ENTER YOUR PASSWORD HERE '
        }
      });
      


    var mailOptions = {
        from: 'ENTER EMAIL',
        to: req.params.email,
        subject: 'Sending Email using Node.js - Nodemailer',
        text: 'This email has been sent using nodemailer. This is so cool!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      


});
app.listen(5000);
console.log('Server running at port 5000 ');


