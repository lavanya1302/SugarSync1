import mongoose from "mongoose";

const mongoDB_url = process.env.MONGODB_URL as string;
const db_name = process.env.DB_NAME as string;

let cachedDatabase: mongoose.Connection | null = null;

export default async function ConnectToDB() {
  try {
    if (!mongoDB_url || !db_name) {
      console.error(
        "Please define MONGODB_URL and DB_NAME environment variable inside .env.local"
      );
      process.exit(1);
    }
    if (cachedDatabase) {
      console.warn("--> using cached database instance");
      return cachedDatabase;
    }
    const instance = await mongoose.connect(mongoDB_url, { dbName: db_name });
    cachedDatabase = instance.connection;
    console.warn(
      "--> new database instance created and cached ",
      instance.connection.name
    );
    return cachedDatabase;
  } catch (error: any) {
    console.log(error.message);
  }
}
