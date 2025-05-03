import express from "express";
import { DB } from "./connection.js";
import { router } from "./controller.js";
import cors from "cors";



const app = express();
app.use(cors());
// Middleware to parse JSON body
app.use(express.json());

// Connect to DB
DB();

// Use router
app.use("/", router);

app.listen(8000, () => console.log("Server running on port 8000"));
