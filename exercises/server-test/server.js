
const express = require("express");
const app = express();

let movies = [
    {   title: "some movie", 
        genre:"horror", 
        _id: "1"
    },
    {   title: "some other movie", 
        genre:"action", 
        _id: "2"
    },
    {   title: "some third movie", 
        genre: "comedy", 
        _id: "3"
    }
];

//middleware that fires on every request - looks for a request object (e.g. POST) and turns it into a req.body
app.use(express.json());

    //Mount path

app.get("/", (req, res) => {
    console.log(req);
    res.send("Welcome Home...");
});

app.get("/movies", (req, res) => {
    console.log(req);
    res.send(movies);
});

app.get("/movies/:_id", (req, res) => {
    console.log(req.params);
    res.send(movies.find(movie => movie._id.toString() === req.params._id));
});

app.post("/movies/", (req, res) => {
    req.body._id = Math.floor(Math.random() * 100000).toString();
    movies.push(req.body);
    res.send(req.body);
});

app.delete("/movies/:_id", (req, res) => {

    movies = movies.filter(movie => movie._id !== req.params._id);
    res.send("Successfully deleted record");
});

app.put("/movies/:_id", (req, res) => {

    req.body = Object.assign(movies.find(movie => movie._id === req.params._id), req.body);
    movies = movies.map(movie => movie._id === req.params._id ? req.body : movie);
    res.send(req.body);
    
});

        //Port
app.listen(7000, () => {
    console.log("Server is running on port 7000");
});