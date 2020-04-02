import {deleteUsuario, updateUsuario, addUsuario, getUsuario} from "./usuarios"

//addUsuario("User1", "Oswar", "os123");
//addUsuario("User2", "Margorie", "mar123");
//addUsuario("User3", "Lesly", "les123");

//deleteUsuario({nombre: "margorie"});
//updateUsuario({_id: "User1"}, {usuario: "Oswar1"});

async function l(){const s:any = await getUsuario({_id: "User2"}); console.log(s)};l();
