const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection to DB successful.."))
  .catch((err) => {
    console.log(err);
  });

app.get("/hi", (req, res) => {
  res.status(200).json("Hello");
});

//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.listen(8800, () => {
  console.log("Backend server is running..");
});
