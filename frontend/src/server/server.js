import express from "express";
import mongoose from "mongoose";

//Expres config
const app = express();
app.use(cors());

//Mongo db connect
mongoose
  .connect(import.meta.env.VITE_MONGO_URL)
  .then(() => {
    app.listen(import.meta.env.VITE_PORT, () => {
      console.log("Server started!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Routes
app.use();
