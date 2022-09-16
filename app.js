import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb://localhost:27017/BlogApp")
  .then(() => app.listen(5000))
  .then(() =>console.log("Connected TO Database and Listening TO Localhost 5000")
  ).catch((err) => console.log(err));

  //mongodb://localhost:27017/BlogApp
  //mongodb+srv://Harsh:harsh@cluster0.cptwhqk.mongodb.net/Blog?retryWrites=true&w=majority