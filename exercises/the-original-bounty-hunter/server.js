const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 7600;

app.use(express.json());
app.use(morgan("dev"));

//connection to mongoDB database

mongoose.connect("mongodb://localhost:27017/bountydb", 
{
    useNewUrlParser: true
}).then( () => console.log("Connected to bountydb"))
.catch( err =>console.error(err));

app.use("/bounty", require("./routes/bountyRouter.js"));

app.listen(PORT, () => {
    console.log("Be reborn in port " + PORT);
})