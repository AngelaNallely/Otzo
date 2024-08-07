import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { test1 } from "./backend/controlador/empleados.controller.js";
import {test2} from "./backend/controlador/gerentes.controller.js";
import {test3} from "./backend/controlador/productos.controller.js";
import {test4} from "./backend/controlador/ProductosF.controller.js";
import {test5} from "./backend/controlador/promociones.controller.js";
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console.log("jala")
})
.catch((error) =>{
    console.log("no jala", error)
})
const app =express();
app.use(cors())
app.listen(4000, () => {
    console.log("todo funciona")
})

test1()
test2()
test3()
test4()
test5()