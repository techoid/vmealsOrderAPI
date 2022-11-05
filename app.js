const express = require('express');
const mongoose = require('mongoose')
const nodemailer = require ('nodemailer')
const ContactUs = require('./models/contactUs')
const registerCompany = require('./models/registerCompany')
const { sendEmail } = require("./email");

const Order = require('./models/orderschema')

const app = express();


app.use(express.json())
const dbName = "vmealsOrder"
mongoose.connect(`mongodb://localhost:27017/${dbName}`,{useNewUrlParser:true})
.then(()=>{
    console.log("Successfuly connected to database: "+dbName);
}).catch((e)=>{
    console.log("no connection ");
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anas.raheem2003@gmail.com',
      pass: 'fqegszdodvczkuyt'
    }
  });

app.post('/order', (req,res)=>{
    const{plan,personalInfo,deliveryDetails}=req.body;
    const newOrder = new Order({
        plan,
        personalInfo,
        deliveryDetails
    })
    newOrder.save()
    .then(order=>{
        sendEmail(
            "techoid.dev@gmail.com",
            "Welcome message"
          );
        res.status(200).json(order)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

app.post('/contact',(req,res)=>{
    const {firstName,lastName,email,mobileNumber,inquiryType,wayToContact,message} = req.body;
    const newContact = new ContactUs({
      firstName,
      lastName,  
      email,
      mobileNumber,
      inquiryType,
      wayToContact,
      message
    })
  
    newContact.save().then((user)=>{
      const msg = `Name:${firstName} ${lastName}\nEmail:${email}\nNumber:${mobileNumber}\nMessage:${message}`
      
      const mailOptions = {
        from: 'anas.raheem2003@gmail.com',
        to: "techoid.dev@gmail.com",
        subject: inquiryType,
        text: msg
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).send(error)
        } else {
          console.log('Email sent: ' + info.response);
          // do something useful
          res.status(200).send(user)
        }
      });
    }).catch((err)=>{
      res.status(500).send(err)
    });
    
  })
  app.post('/registerCompany',(req,res)=>{
    const {firstName,lastName,email,mobileNumber,comapnyName,designation,message} = req.body;
    const newregisterCompany = new registerCompany({
      firstName,
      lastName,  
      email,
      mobileNumber,
      comapnyName,
      designation,
      message
    })
  
    newregisterCompany.save()
    .then((user)=>{
      const msg = `Name:${firstName} ${lastName}\nEmail:${email}\nCompany:${comapnyName}\nDesignation:${designation}\nmessage:${message}`
  
  
      const mailOptions = {
        from: 'anas.raheem2003@gmail.com',
        to: "techoid.dev@gmail.com",
        subject: "Corporate Partnership",
        text: msg
      };
  
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          // do something useful
          res.status(200).send(user)
        }
      });
    }).catch((err)=>{
      res.status(500).send(err)
    })
    
  })

  app.get("/send-email", (req, res) => {
    sendEmail(
      "techoid.dev@gmail.com",
      "Welcome message",
      "Welcome message content"
    );
    res.send("send email success");
  });
  




app.listen(3000,()=>{console.log("listening on 3000");})