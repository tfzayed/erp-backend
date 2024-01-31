// import functions
import config from "@/config/variables";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import { dbConnect } from "./dbConnect";
import { globalErrorhandler } from "./middlewares/globalErrorHandler";
import router from "./routes/routes";

dotenv.config();

// main code
const app: Application = express();
const port: number | string = config.port || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("App running");
});

app.use("/api/v1", router);

// database connection
dbConnect();

// error handler
app.use(globalErrorhandler);

// local server port
app.listen(port, () => {
  console.log(
    `\x1b[33m  Server is running on port http://localhost:${port}  \x1b[0m`
  );
});
