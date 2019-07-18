const express = require("express");
const app = express();
const PORT = 7600;

app.use(express.json());

app.use("/bounty", require("./routes/bountyRouter.js"));

app.listen(PORT, () => {
    console.log("Be reborn in port " + PORT);
})