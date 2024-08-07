import {Schema, model} from "mongoose"

export const esquema2 = new Schema ({
    nombre:{
        type:String
    },
    precioViejo:{
        type:String
    },
    precioActual:{
        type:String
    }
    
})
export const modelo5 = new model ('Promociones', esquema2)
