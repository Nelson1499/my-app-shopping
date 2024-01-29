import express from "express";
import cors from "cors";
import routerPayments from "./routes/payments.routes.js";
import bodyParser from "body-parser";
import { PORT } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routerPayments);

app.listen(PORT||8000);
console.log("server on port", PORT || 8000);
