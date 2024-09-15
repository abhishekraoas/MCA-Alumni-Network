const express = require("express");
const userRoute = require("./routes/user.routes");
const { connectToMongoDB } = require("./connectionDB");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
connectToMongoDB("mongodb://localhost:27017/mca-alumni");

app.use("/", userRoute);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});