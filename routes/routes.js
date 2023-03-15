import {Router} from "express"
import * as fs from "fs"
const myRoutes = Router();

myRoutes.get("/", (req, res) => {
    fs.readFile("./data/data.json", (err, data) => {
        if (err) throw err
        const dt =  JSON.parse(data);
        console.log(dt);
        res.render("index", dt);
    });
});

// myRoutes.get("/", (req, res) => {
//     fs.readFile("./data/data.json", (err, data) => {
//         if (err) throw err
//         const dt =  JSON.parse(data);
//         res.render("index", dt);
//     });
// });

myRoutes.get("/eliminar/:id", (req, res) => {
    // const id = req.params['myId'];
    // fs.readFile("./data/data.json", (err, data) => {
    //     if (err) throw err
    //     Promise.all([
    //         ... Object.values(JSON.parse(data))[0]
    //     ])
    //     .then(dt => {
    //         dt = {id: id, ... dt[id]}
    //         console.log(dt)
    //         res.render("eliminar");
    //     });
    // });

    res.render("eliminar");
});

myRoutes.get("/crear", (req, res) => {
    res.render("crear");
});

export default myRoutes;