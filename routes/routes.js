import {Router} from "express"
import * as fs from "fs"

const myRoutes = Router();

myRoutes.get("/", (req, res) => {
    fs.readFile("./data/data.json", (err, data) => {
        if (err) throw err
        const dt =  JSON.parse(data);
        res.render("index", dt);
    });
});

myRoutes.get("/eliminar/:id", (req, res) => {
    const id = req.params['id'];
    
    fs.readFile("./data/data.json", (err, data) => {
        if (err) throw err
        const dt =  JSON.parse(data);
        dt.almuerzos.splice(id,1);
        
        fs.writeFile("./data/data.json", JSON.stringify(dt), err => {
            if (err) throw err
        });

        res.render("index", dt);
    });
});

myRoutes.get("/crear", (req, res) => {
    res.render("crear");
});

myRoutes.post("/crear", (req, res) => {
    fs.readFile("./data/data.json", (err, data) => {
        if (err) throw err
        const dt =  JSON.parse(data);
        dt.almuerzos.push({nombre: req.body.nombre, precio: req.body.precio});
        
        fs.writeFile("./data/data.json", JSON.stringify(dt), err => {
            if (err) throw err
        });

        res.render("index", dt);
    });
});

export default myRoutes;