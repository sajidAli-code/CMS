import { NextFunction, Response } from "express";
import mongoose from "mongoose";

const connectDB = (uri: string) => {
    return async function (res: Response, next: NextFunction) {
        try {
            if (mongoose.connection.readyState === 1) {
                await mongoose.connect(uri);
                console.log("Connected to database!")
            }
            next()
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            res.status(500).json({ message: 'Database connection failed' });
        }
    }
}

export default connectDB;