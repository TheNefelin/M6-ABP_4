// npm install express
// npm install hbs
// npm init

import express from "express";
import hbs from "hbs";
import rutas from "./routes/routes.js"
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const _root = import.meta.url;
const _dirname = dirname(fileURLToPath(_root));
const app = express();

app.listen(3000);
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(rutas);
hbs.registerPartials(join(_dirname, "/views/partials"));


