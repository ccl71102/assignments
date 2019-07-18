const express = require("express");
const app = express();

app.use("/animals", express.json());

app.use("/animals", require("./routes/animalRouter.js"));

app.listen(7600, () => {
    console.log("Server, start your engine (port 7600)");
})