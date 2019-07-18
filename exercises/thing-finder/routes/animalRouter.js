const express = require("express");
const animalRouter = express.Router();
const uuid = require("uuid");

let animals = [
    {
        type: "squirrel",
        _id: "1"
    },
    {
        type: "beaver",
        _id: "2"
    },    
    {
        type: "capybara",
        _id: "3"
    },    
    {
        type: "cow",
        _id: "4"
    },    
    {
        type: "elephant",
        _id: "5"
    }
]

animalRouter.route("/")
.get( (req, res) => {
    console.log(req.query);
    if(animals.find(animal => animal.type === req.query.type)) 
        res.send(animals.filter(animal => animal.type === req.query.type));
    else
        res.send(animals);
})
.post( (req, res) => {
    req.body._id = uuid();
    animals.push(req.body);
    res.send(req.body);
});

animalRouter.route("/:_id")
.get((req, res) => {
    res.send(animals.find(animal => animal._id === req.params._id));
})
.delete( (req, res) => {
    animals = animals.filter(animal => animal._id !== req.params._id);
    res.send("Successfully deleted record");
})
.put( (req, res) => {
    req.body = Object.assign(animals.find(animal => animal._id === req.params._id), req.body);
    animals = animals.map(animal => animal._id === req.params._id ? req.body : animal);
    res.send(req.body);
})

module.exports = animalRouter;