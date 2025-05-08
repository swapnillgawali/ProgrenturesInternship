import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import courseRoute from './route/courses.route.js';
import studentUserRoute from './route/studentUserRoute.js';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4002;
const mongodb = process.env.MongoDB;

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected Successfully...");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

app.use("/course", courseRoute);
app.use('/studentUser', studentUserRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
