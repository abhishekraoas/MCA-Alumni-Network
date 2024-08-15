const express = require("express");
const userRoute = require("./routes/user.routes");
const {connectToMongoDB} = require("./connectionDB");
const app = express();

const PORT = 3000;

//Database Connection
connectToMongoDB("mongodb://localhost:27017/mca-alumni");

app.use("/", userRoute);


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
