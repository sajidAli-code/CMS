import express, { urlencoded, Application } from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import ErrorHandler from "./middlewares/errorHandler.js";
import connectDB from "./utils/connectDB.js";

const port = process.env.PORT || 3000;
const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

//custom middlewares
app.use(ErrorHandler)

console.log("Hi from server very aggressivly!")

const dbConnectionString: string = process.env.MONGO_URI_STRING || "mongodb://localhost:27017/CMS";

connectDB(dbConnectionString);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});