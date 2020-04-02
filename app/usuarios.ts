import mongoose = require("mongoose")
import { connectMDB1 } from "./helpers"

interface IUsuario extends mongoose.Document{
    usuario: string;
    contraseña: string;
}

const UsuarioSchema = new mongoose.Schema({
    _id: {type : String, required : true},
    usuario: {type : String, required : true},
    contraseña: {type : String, required : true}
});

export const Usuario = mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export const addUsuario = async function(
    id: string,
    usu: string,
    contraseña: string
){
    await connectMDB1;

    const ide: any = await getUsuario({usuario: usu});
    const us = new Usuario;

    us._id = id;
    us.usuario = usu;
    us.contraseña = contraseña;

    if (ide == null){
        await us.save((err: any)=>{
            if(err){
                console.log(err);
            }else{
                console.log(us);
            };
        });

    }else{
        console.log("Identificador no valido");
    }
};

export const deleteUsuario = async function(filter: any){
    await connectMDB1;

    Usuario.deleteMany(filter, (err:any, result:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        };
    });
};

export const updateUsuario = async function(filter: any, update: any){
    await connectMDB1;

    Usuario.updateMany(filter, update, (err:any, result:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result)
        }
    });
};

export function getUsuario(filter : any):Promise<any>{
    return new Promise<any>( resolve => {
        Usuario.findOne(filter, (err:any, data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}
