const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes");

require("dotenv").config();
const app = express();
app.use(express.json());

mongoose.connect(String(process.env.DB), {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
