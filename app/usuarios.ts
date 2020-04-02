import mongoose = require("mongoose")
import { connectMDB1 } from "./helpers"

interface IUsuario extends mongoose.Document{
    id: string;
    usuario: string;
    contraseña: string;
}
const UsuarioSchema = new mongoose.Schema({
    id: {type : String, required : true},
    usuario: {type : String, required : true},
    contraseña: {type : String, required : true}
});

export const Usuario = mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export const addUsuario = async function(
    id: string,
    usuario: string,
    contraseña: string
){
    await connectMDB1;

    const ide: any = await getUsuario(id);
    const us = new Usuario;

    us.id = id;
    us.usuario = usuario;
    us.contraseña = contraseña;

    if (ide == null){
        await us.save((err: any)=>{
            if(err){
                console.log(err);
            }else{
                console.log(us);
            }
        });

    }else{
        console.log("Identificador no valido");
    }
};

export function getUsuario(_id: string):Promise<any>{
    return new Promise<any>( resolve => {
        Usuario.findOne({id: _id}, (err:any, data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}
