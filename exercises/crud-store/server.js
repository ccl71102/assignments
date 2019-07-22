const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 7500;

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/cruddb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then( () => console.log("fetching crud"))
.catch(err => console.log(err));

app.use("/inventory", require("./routes/inventoryRouter.js"));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errorMessage: err.message});
})

app.listen(PORT, () => {
    console.log("Get your crud at port " + PORT);
})
