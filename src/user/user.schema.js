import  Mongoose  from "mongoose";

// userModel.js

// const { Schema, model } = Mongoose;


const userSchema = new Mongoose.Schema({
    // user_id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_image: {
        type: String  // Assuming a URL to the user's image
    },
    total_orders: {
        type: Number,
        default: 0
    },
   
    last_logged_in: {
        type: Date,
        default: null
    }
},
{
    timestamps:true
}

);

const User = Mongoose.model('User', userSchema);

export default User;
