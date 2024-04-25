import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const db = process.env.MONGODB_URI;

        const { connection } = await mongoose.connect(db);

        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}
