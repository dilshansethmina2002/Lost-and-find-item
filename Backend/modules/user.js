import mongoose from "mongoose";

// Define the schema for the user
const userSchema = new mongoose.Schema ({
    email : {
        type: String,
        required: true,
    },
    phoneNumber : {
        type: String,
        required: true,
        unique: true    
    },
    password : {
        type: String,
        required: true
    },
    
    isDisable : {
        type: Boolean,
        default: false
    },
    isEmailVerified : {
        type: Boolean,
        default: false
    }
}) 

// Create a model from the schema
const User = mongoose.model("user", userSchema) 
export default User;