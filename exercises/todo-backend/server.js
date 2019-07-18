const app = require("express")();

app.use(require("express").json());

let todos = [
    {
        "completed": true,
        "_id": "5d0945e851fd04620b4da65e",
        "title": "Challenger with ugly color!",
        "price": 483748,
        "description": "What the hell is this color?",
        "imgUrl": "https://st.motortrend.com/uploads/sites/10/2015/11/2014-dodge-challenger-rt-coupe-angular-front.png"
    },
    {
        "completed": false,
        "_id": "5d0971acbf661e491325fb39",
        "title": "Black Challenger",
        "price": 600000,
        "description": "red snow",
        "imgUrl": "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/fc7f64e6ff1e092a306c669c7d8d6be6.png"
    },
    {
        "completed": false,
        "_id": "5d097667bf661e491325fb3b",
        "title": "White Challenger",
        "price": 100000,
        "description": "Update this garbage",
        "imgUrl": "https://cdn.motor1.com/images/mgl/e90o8/s3/dodge-challenger-trims.jpg"
    },
    {
        "completed": false,
        "_id": "5d0a7bea6afe213b7a711ec6",
        "title": "Ford Mustang",
        "price": 45345,
        "description": "This whole thing works; awesome",
        "imgUrl": "https://www.louisvillehondaworld.com/assets/stock/colormatched_01/white/640/cc_2017foc050002_01_640/cc_2017foc050002_01_640_j7.jpg"
    },
    {
        "completed": false,
        "_id": "5d0aafbd3ea2d8473695d8f3",
        "title": "Orange Mustang",
        "price": 45000,
        "description": "Oooh, shiny!",
        "imgUrl": "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2019/collections/adplanners/19_frd_mst_ps34_fast_400a_orfy.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
    },
    {
        "completed": false,
        "_id": "5d0ab0493ea2d8473695d8f4",
        "title": "Yellow Mustang",
        "price": 55000,
        "description": "It's yellow",
        "imgUrl": "https://cdn.bringatrailer.com/wp-content/uploads/2018/11/2015_ford_50th_anniversary_mustang_gt_convertible_hennessey_hpe800_15414629519f98764daIMG_4785-940x705.jpg"
    },
    {
        "completed": false,
        "_id": "5d0b9c5462fa2d1908e4a536",
        "title": "Squirrel!",
        "price": 20,
        "description": ":-o",
        "imgUrl": "https://mdc.mo.gov/sites/default/files/media/images/2014/09/pa-10-2014.jpg"
    },
    {
        "completed": false,
        "_id": "5d0ba2f6a35a90655026480c",
        "title": "Baby Hippo",
        "price": 2000,
        "description": "Look at it!",
        "imgUrl": "https://cbsmiami.files.wordpress.com/2018/10/11.jpg?w=1000&h=1&crop=1"
    },
    {
        "completed": false,
        "_id": "5d0ba43aa35a90655026480f",
        "title": "Sheep",
        "price": 500,
        "description": "Fuzzy",
        "imgUrl": "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        "completed": false,
        "_id": "5d0bb90bb8dcd5225765d843",
        "title": "Plymouth Roadrunner",
        "price": 30000,
        "description": "meep meep",
        "imgUrl": "https://cdn1.mecum.com/auctions/sc0517/sc0517-282476/images/sc0517-282476_12@2x.jpg?1491831697000"
    },
    {
        "completed": false,
        "_id": "5d0bb9dcaf0cef24b4cfdf5e",
        "title": "Plymouth Barracuda",
        "price": 30000,
        "description": "not related to Heart",
        "imgUrl": "https://cdn.bringatrailer.com/wp-content/uploads/2017/03/58c3410fa097a_DSC00347-e1489607416649-940x663.jpg"
    },
    {
        "completed": true,
        "_id": "5d0bba60ef604d25ec9ca6df",
        "title": "Ford GT40",
        "price": 100000,
        "description": "Vroom",
        "imgUrl": "https://rmsothebys-cache.azureedge.net/4/b/9/7/c/c/4b97ccc214b2e83e5dcdfe7ca0dc8405581e47cd.jpg"
    },
    {
        "completed": false,
        "_id": "5d0bbb5def604d25ec9ca6e6",
        "title": "Hennessey Venom GT",
        "price": 1000000,
        "description": "1200 HP",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hennessey_Venom_GT_%2816040233465%29.jpg/1280px-Hennessey_Venom_GT_%2816040233465%29.jpg"
    },
    {
        "completed": false,
        "_id": "5d0bbdaf1a297f2be72880fa",
        "title": "Lancia 037",
        "price": 120000,
        "description": "Competed against AWD cars and won",
        "imgUrl": "https://www.supercars.net/blog/wp-content/uploads/2016/05/1982_lancia_037_group_b_2_0.jpg"
    },
    {
        "completed": false,
        "_id": "5d0beb7a94ccbb6bd9a0bdf4",
        "title": "Baby Beaver",
        "price": 200,
        "description": "It's cute",
        "imgUrl": "https://www.washingtonpost.com/pbox.php?url=http://www.washingtonpost.com/news/local/wp-content/uploads/sites/2/2016/05/20160505_babybeaver_storyful.jpg&w=1484&op=resize&opt=1&filter=antialias&t=20170517"
    },
    {
        "completed": false,
        "_id": "5d0c04bc78f3a351a52f85db",
        "title": "Cow",
        "price": 2000,
        "description": "Moo",
        "imgUrl": "https://www.dairyherd.com/sites/default/files/Florida%20Horned%20Cow%20Grazing%20Crossbred.jpg"
    },
    {
        "completed": false,
        "_id": "5d28ace0bcbdb75b5af55c88",
        "title": "Beaver!",
        "description": "A beaver",
        "imgUrl": "https://www.varmentguard.com/wp-content/uploads/2018/05/Beaver.jpg",
    }
];

app.get("/", (req, res) => {
    console.log("Welcome home...");
    res.send("Why are you here?");
})

app.get("/todos/", (req, res) => {
    console.log("get all");
    res.send(todos);
});

app.get("/todos/:_id", (req, res) => {
    console.log("get " + req.params._id);
    res.send(todos.find(todo => todo._id === req.params._id));
});

app.post("/todos/", (req, res) => {
    console.log("post " + req.body);
    req.body._id = Math.floor(Math.random() * 10000000000000).toString();
    todos.push(req.body);
    res.send(req.body);
});

app.delete("/todos/:_id", (req, res) => {
    console.log("delete " + req.params._id);
    todos = todos.filter(todo => todo._id !== req.params._id);
    res.send("Successfully deleted record");
});

app.put("/todos/:_id", (req, res) => {
    console.log("put " + req.body);
    todos = todos.map(todo => todo._id === req.params._id ? Object.assign(todos.find(todo => todo._id === req.params._id), req.body) : todo);
    res.send(req.body);
})

app.listen(7600, () => {
    console.log("Commence world domination...");
});









