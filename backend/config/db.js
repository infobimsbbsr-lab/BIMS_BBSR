import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Ensure MONGO_URI is provided
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the .env file. Please add your MongoDB Atlas connection string.');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;