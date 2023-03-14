const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();

app.listen(3000);
app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    fs.readFile("./data/data.json", (err, data) => {
        if (err) throw err
        const dt =  JSON.parse(data);
        res.render("index", dt);
    });
});

app.get("/eliminar/:myId", (req, res) => {
    const id = req.params['myId'];
    fs.readFile("./data/data.json", (err, data) => {
        if (err) throw err
        Promise.all([
            ... Object.values(JSON.parse(data))[0]
        ])
        .then(dt => {
            dt = {id: id, ... dt[id]}
            console.log(dt)
            res.render("eliminar", dt);
        })
    });
});

app.get("/crear", (req, res) => {
    res.render("crear");
});
