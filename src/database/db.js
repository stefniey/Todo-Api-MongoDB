import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.URI;

const connection = async () => {
	try {
		await mongoose.connect(uri);

		console.log("Connected to MongoDB");
	} catch (err) {
		console.log(err);
	}
};

export default connection;
