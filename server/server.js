require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user.routes");
const { connectToMongoDB } = require("./connectionDB");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// Middleware for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// Database Connection

connectToMongoDB(process.env.URL_DB);

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
