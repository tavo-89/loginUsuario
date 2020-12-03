const fs = require('fs'); 
let modulousuarios = {
    archivo : './usuarios.json',
    leerJSON : function(){
        let usuariosJson = fs.readFileSync(this.archivo,'utf-8');
        return JSON.parse(usuariosJson)
    },
    registrar : function(nombre,mail,password){
        let listaDeusuarios = this.leerJSON();

        let nuevoUsuario = {
            nombre : nombre,
            mail : mail,
            password : password
        }
        listaDeusuarios.push(nuevoUsuario)
        this.guardarJSON(listaDeusuarios)
        
        this.leerJSON(listaDeusuarios)
        return console.log('TU USUARIO HA SIDO AGREGADA CON ÉXITO')
    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8')
    },
    login : function(mail, contrasenia){

        let listaDeusuarios = this.leerJSON();
        let logueoUsuario = listaDeusuarios.filter(usuario=>{
            
            return usuario.mail == mail && usuario.password == contrasenia
            
        })
       
        return logueoUsuario
    },
    eliminar : function(mail, contrasenia){
        let listaDeusuarios = this.leerJSON();
        let nuevaLista = listaDeusuarios.filter( usuario =>{
            return usuario.mail != mail && usuario.password != contrasenia 
        })
 
        this.guardarJSON(nuevaLista)
    }
}
module.exports = modulousuarios