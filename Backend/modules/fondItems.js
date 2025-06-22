import mongoose from "mongoose";

const foundSchema = new mongoose.Schema ({
    name:{
        type: String,
        required:true,
    },
    description:{
        type :String,
        required: true,
    },
    location: {
        lat:{
            type: Number,
            required: true
        },
        lng:{
            type: Number,
            required: true
        }
    },
    image:
    [
        {type:String}
    ],
    phoneNumber:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const FoundItems = mongoose.model("found-items", foundSchema) 
export default FoundItems;