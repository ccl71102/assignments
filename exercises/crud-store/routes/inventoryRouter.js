const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find( (err, inventory) => {
        if(err) {
            res.status(500);
            next(err);
        } else
            res.status(200).send(inventory);
    });
});

inventoryRouter.get("/:_id", (req, res, next) => {
    Inventory.findOne( {_id: req.params._id}, (err, foundItem) => {
        if(err) {
            res.status(500);
            next(err);
        }
            res.status(200).send(foundItem);
    });
});

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body);
    newItem.save( (err, savedItem) => {
        if(err) {
            res.status(500);
            next(err);
        }
            res.status(201).send(savedItem);
    });
});

inventoryRouter.put("/:_id", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {
            _id: req.params._id
        },
        req.body,
        {
            new: true
        },
        (err, updatedItem) => {
            if(err) {
                res.status(500);
                next(err);
            }
                res.status(201).send(updatedItem);
        });
});

inventoryRouter.delete("/:_id", (req, res, next) => {
    Inventory.findOneAndRemove({_id: req.params._id}, (err, deletedItem) => {
        if(err){
            res.send(500);
            next(err);
        } else
            res.status(202).send({
                message: "Item has been deleted",
                _id: deletedItem._id
            })
    });
});


module.exports = inventoryRouter;