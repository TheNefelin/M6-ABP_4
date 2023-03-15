import {Router} from "express"
import * as fs from "fs"

const myRoutes = Router();

myRoutes.get("/", (req, res) => {
    leerArchivo().then(data => {
        res.render("index", data);
    });
});

myRoutes.get("/eliminar/:id", (req, res) => {
    const id = req.params['id'];
    
    leerArchivo().then(data => {
        data.almuerzos.splice(id, 1);
        escribirArchivo(data);
        return data
    }).then((dt) => {
        res.render("index", dt);
    });
});

myRoutes.get("/crear", (req, res) => {
    res.render("crear");
});

myRoutes.post("/crear", (req, res) => {
    leerArchivo().then(data => {
        if(req.body.nombre && req.body.precio) {
            data.almuerzos.push({nombre: req.body.nombre, precio: req.body.precio});
            escribirArchivo(data);
        };
        
        return data
    }).then((dt) => {
        res.render("index", dt);
    });
});

async function leerArchivo() {
    const data = await fs.promises.readFile("./data/data.json", (err, data) => {
        if (err) throw err 
        return data
    });
    return await JSON.parse(data);
}

async function escribirArchivo(data) {
    fs.writeFile("./data/data.json", JSON.stringify(data), err => {
        if (err) throw err
    });
}

export default myRoutes;