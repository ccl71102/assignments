const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounty.js");

bountyRouter.get("/", (req, res, next) => {
    Bounty.find( (err, bounties) => {
        if(err) {
            res.status(500);
            res.send(err);
        } else
            res.status(200).send(bounties);
    });
})

// bountyRouter.route("/")
//     .get( (req, res) => {
//         res.send(bounties);
//     })
//     .post((req, res) => {
//         req.body._id = uuid();
//         bounties.push(req.body);
//         res.send(req.body);
//     })

// bountyRouter.route("/:_id")
//     .get( (req, res) => {
//         console.log(bounties.find( bounty => bounty._id === req.params._id));
//         res.send(bounties.find( bounty => bounty._id === req.params._id));
//     })
//     .delete((req, res) => {
//         bounties = bounties.filter( bounty => bounty._id.toString() !== req.params._id);
//         res.send("Successfully deleted record");
//     })
//     .put((req, res) => {
//         req.body = Object.assign(bounties.find( bounty => bounty._id === req.params._id), req.body)
//         bounties = bounties.map(bounty => bounty._id === req.params._id ? req.body : bounty);
//         res.send(req.body);
//     })


module.exports = bountyRouter;