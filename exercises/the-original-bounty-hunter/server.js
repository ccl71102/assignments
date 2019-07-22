const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 7600;

//middleware
app.use(express.json());
app.use(morgan("dev"));

//connection to mongoDB database

mongoose.connect("mongodb://localhost:27017/bountydb", 
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then( () => console.log("Accessing bounties"))
.catch( err =>console.error(err));

//routes
app.use("/bounty", require("./routes/bountyRouter.js"));

//global error handler (needs all 4 parameters)
app.use((err, req, res, next) => {
    console.error(err);
    return res.send({errorMessage: err.message});
});

app.listen(PORT, () => {
    console.log("Be reborn in port " + PORT);
});