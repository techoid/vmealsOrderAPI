const  mongoose = require ('mongoose');


const contactUsSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    inquiryType:{
        type:String,
        required:true
    },
    wayToContact:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const ContactUs = mongoose.model('ContactUs' , contactUsSchema);
module.exports = ContactUs