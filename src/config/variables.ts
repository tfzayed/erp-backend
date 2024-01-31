import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  database_uri: process.env.MONGO_URI,
  port: process.env.PORT,
  token: process.env.TOKEN,
  salt: Number(process.env.SALT),
  secret: process.env.SECRET,
  jwt_secret: process.env.JWT_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_expire: process.env.JWT_TOKEN_EXPIRE,
  jwt_refresh_expire: process.env.JWT_REFRESH_TOKEN_EXPIRE,
};
