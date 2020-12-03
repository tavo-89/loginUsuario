let modulousuarios = require('./usuarios')
const process = require('process');
let comando = process.argv[2]
switch (comando) {
   
    case 'listar':
        console.log("---------lista----------")
        let usuarios = modulousuarios.leerJSON();
        for (let index = 0; index < usuarios.length; index++) {
           
           console.log("- usuario: " + usuarios[index].nombre + "\n" + "- mail: " +  usuarios[index].mail + "\n" + "- password: " + usuarios[index].password )
           console.log("-----------------------")
        }
        break;
    case 'registrar' :
        let nombre = process.argv[3];
        let mail = process.argv[4];
        let password = process.argv[5]
        modulousuarios.registrar(nombre,mail,password )
        break;
    case 'login' :
        let resultado = modulousuarios.login(process.argv[3], process.argv[4])
        if (resultado.length == 1) {
            console.log("----------------------");
            console.log("------bienvenido------");
            console.log("----------------------");
        } else {
            console.log("-------------------------------------");
            console.log("-----no se pudo iniciar sesion ------");
            console.log("-------------------------------------");
        }
        break;

    case 'eliminar' :
        
        let resultado = modulousuarios.login(process.argv[3], process.argv[4])
        if (resultado.length == 1) {
            modulousuarios.eliminar(mail, contraseia)
            console.log("-------------------------------------");
            console.log("--ha eliminado el usuario con exito--");
            console.log("-------------------------------------");
        break;
    }
}