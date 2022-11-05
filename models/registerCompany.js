const  mongoose = require ('mongoose');


const registerCompanySchema = mongoose.Schema({
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
    comapnyName:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const registerCompany = mongoose.model('registerCompany' , registerCompanySchema);
module.exports = registerCompany;