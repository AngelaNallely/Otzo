import { esquema } from "./productos.modelo.js";
import{model} from "mongoose"


export const modelo4 = new model('productosF', esquema)