const express = require("express");

const dotenv = require("dotenv").config({ path: "./config/config.env" });
const { connectToDatabase } = require("./config/connectToDatabase");
const userRouter = require("./routes/authRoute");
const cors = require("cors");
const app = new express();

const PORT = process.env.PORT || 8000;

//Connecting DB
connectToDatabase();

//Middlewares
app.use(express.json());

app.use(cors());
// Router Mounting
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started Listening at ${PORT}`);
});
