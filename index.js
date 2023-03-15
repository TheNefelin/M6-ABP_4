// npm install express
// npm install hbs
// npm install body-parser
// npm init

import express from "express";
import hbs from "hbs";
import rutas from "./routes/routes.js"
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bodyParser from "body-parser"

const _root = import.meta.url;
const _dirname = dirname(fileURLToPath(_root));
const app = express();

app.listen(3000);
app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(join(_dirname, "/views/partials"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(rutas);
