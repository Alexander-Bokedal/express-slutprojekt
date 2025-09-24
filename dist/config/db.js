import mongoose from "mongoose";
import { config } from "./environment";
export default function connectDB() {
    try {
        mongoose.connect(config.mongoUrl);
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
