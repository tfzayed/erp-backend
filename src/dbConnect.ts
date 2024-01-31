import config from "@/config/variables";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI: string | undefined = config.database_uri;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env"
  );
}

mongoose.set("strictQuery", false);

export const dbConnect = (): void => {
  mongoose
    .connect(config.database_uri as string)
    .then(() => console.log("\x1b[32m  Connection successful \x1b[0m"))
    .catch((err) => console.error(err));
};
