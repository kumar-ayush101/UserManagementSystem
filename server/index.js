import express from "express";
import cors from "cors";
import connectingToMongo from './config/database.js';
import ayush from "./routes/user.js";

const app = express();

const PORT = process.env.PORT || 8000;

connectingToMongo();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());


// Routes

app.use("/api/v1", ayush);


app.listen(PORT, () => {
  console.log(`Api is running on http://localhost:${PORT}`);
});