const mongoose  = require("mongoose");

const adminSchema = mongoose.Schema({
    fullName:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    password:{
        type: String
    },
    avatar:{
        type: String
    }
})
module.exports = {Admin: mongoose.model('admin', adminSchema)}

