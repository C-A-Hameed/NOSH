import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FARAZ:9022750521@cluster0.872e3.mongodb.net/nosh').then(()=>console.log('DB Connected'));
}