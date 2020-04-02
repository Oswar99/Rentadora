import mongoose = require("mongoose");

const os: string  = "mongodb+srv://mn1:mn1@cluster0-xzegi.azure.mongodb.net/ProyectoRentadora?retryWrites=true&w=majority";
//const mar: string = "mongodb+srv://mar:mar@cluster0-i5bsq.azure.mongodb.net/ProyectoRentadora?retryWrites=true&w=majority";
//const les: string = "mongodb+srv://Lesly:aguilar@cluster0-zffcc.azure.mongodb.net/ProyectoRentadora?retryWrites=true&w=majority";

export const connectMDB1 = new Promise<void>(resolve =>{
    mongoose.connect(os,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa 1");
        }
        resolve();
    });       
});

