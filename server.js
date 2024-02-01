const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000

const app = express();

app.use(cors())

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vivekthakur6259:vivek123456@netflix.vk0lp2y.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes); 

app.get("/",(req, res) => {
  res.send("Hello! API ");
});

app.listen(PORT, () => {
  console.log("server started at 5000");
});
