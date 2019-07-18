const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid/v4");

let bounties = [
    {   
        firstName: "Carth",
        lastName: "Onasi",
        living: true,
        bounty: 10,
        type: "jedi",
        _id: "1"
    },
    {   
        firstName: "Darth",
        lastName: "Revan",
        living: true,
        bounty: 20000,
        type: "sith",
        _id: "2"
    },
    {   
        firstName: "Darth",
        lastName: "Malak",
        living: false,
        bounty: 10000,
        type: "sith",
        _id: "3"
    },
    {   
        firstName: "Darth",
        lastName: "Stroyer",
        living: true,
        bounty: 500,
        type: "sith",
        _id: "4"
    },
    {   
        firstName: "Mission",
        lastName: "Vao",
        living: true,
        bounty: 1000,
        type: "jedi",
        _id: "5"
    },

];

bountyRouter.route("/")
    .get( (req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        req.body._id = uuid();
        bounties.push(req.body);
        res.send(req.body);
    })

bountyRouter.route("/:_id")
    .get( (req, res) => {
        console.log(bounties.find( bounty => bounty._id === req.params._id));
        res.send(bounties.find( bounty => bounty._id === req.params._id));
    })
    .delete((req, res) => {
        bounties = bounties.filter( bounty => bounty._id.toString() !== req.params._id);
        res.send("Successfully deleted record");
    })
    .put((req, res) => {
        req.body = Object.assign(bounties.find( bounty => bounty._id === req.params._id), req.body)
        bounties = bounties.map(bounty => bounty._id === req.params._id ? req.body : bounty);
        res.send(req.body);
    })


module.exports = bountyRouter;