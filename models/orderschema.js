const mongoose  = require('mongoose');

const orderSchema = new mongoose.Schema({
    plan :{
        planName:{
            type:String,
            required:true
        },
        typeOfDiet:String,
        portionSize:{
            type:String,
            required:true
        },
        deliveriesPerWeek:{
            type:String,
            required:true
        },
        offDays:String,
        planDuration:{
            type:String,
            required:true
        },
        mealType:{
            type: [String],
            required:true
        },
        allergies: [String],
        addOns: [String],
        couponCode:{
            code:{
                type:String,
                
            },
            percentageOff:{
                type:String,
                
            }
        }

    },
    personalInfo:{
        firstName:{
            type:String,
            reruired:true
        },
        lastName:{
            type:String,
            reruired:true
        },
        email:{
            type:String,
            reruired:true
        },
        mobileNumber:{
            type:String,
            reruired:true
        },
        nationality:{
            type:String,
            reruired:true
        },
        dateOfBirth:{
            type:String,
            reruired:true
        }
        
    },
    deliveryDetails:{
       startingDate:{
        type:String,
        required:true
       },
       city:{
        type:String,
        required:true
       },
       address:{
        type:String,
        required:true
       },
       apartmentNumber:{
        type:String,
        required:true
       },
       accessCode:String,
       googleMapsLink:{
        type:String,
        required:true
       },
       deliveryInstructions:String,
       deliverySlot:{
        type:String,
        required:true
       },
       totalPrice:{
        type:String,
        required:true
       }
    }
})

module.exports = mongoose.model("Order", orderSchema)