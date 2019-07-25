const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounty.js");

bountyRouter.get("/", (req, res, next) => {

    if(req.query.lastName && req.query.bounty){
        Bounty.find( {lastName: req.query.lastName, bounty: req.query.bounty},(err, bounties) => {
            if(err) {
                res.status(500);
                next(err);
            } else
                res.status(200).send(bounties);
        }).sort({bounty: 1});
    } else if(req.query.lastName) {
            Bounty.find( {lastName: req.query.lastName},(err, bounties) => {
                if(err) {
                    res.status(500);
                    next(err);
                } else
                    res.status(200).send(bounties);
            }).sort({lastName: 1});
    } else if (req.query.bounty) {
        Bounty.find( {bounty: req.query.bounty},(err, bounties) => {
            if(err) {
                res.status(500);
                next(err);
            } else
                res.status(200).send(bounties);
        }).sort({bounty: 1});
    } else {
        Bounty.find( (err, bounties) => {
            if(err) {
                res.status(500);
                next(err);
            } else
                res.status(200).send(bounties);
        });
    }
});

bountyRouter.get("/:_id", (req, res, next) => {
    Bounty.findOne({_id: req.params._id}, (err, foundBounty) => {
        if(err) {
            res.status(500);
            next(err);
        } else
            res.status(200).send(foundBounty);
    });
});

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500);
            next(err);
        } else
            res.status(201).send(savedBounty);
    });
});

bountyRouter.put("/:_id", (req, res, next) => {
    Bounty.findOneAndAndUpdate({ _id: req.params._id }, req.body, {new: true}, (err, updatedBounty) => {
        if(err) {
            res.status(500);
            next(err);
        } else
            res.status(201).send(updatedBounty);
    });
});

bountyRouter.delete("/:_id", (req, res, next) => {
    Bounty.findOneAndRemove({ _id: req.params._id }, (err, deletedBounty) => {
        if(err) {
            res.status(500);
            next(err);
        } else
            res.status(202).send({
                message: "Bounty successfully deleted",
                success: true, 
                _id: deletedBounty._id
            });
    });
});

module.exports = bountyRouter;