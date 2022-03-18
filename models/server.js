const express = require("express");
const cors = require('cors')
class Server{

    constructor(){
        this.app= express();
        this.port= process.env.PORT;

        this.usuariosPath ='/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        
        this.route();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //lectura y parseo
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    route(){
        
        this.app.use(this.usuariosPath, require('../routes/user'));

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('server run in port: ',this.port);
           });
    }

}

module.exports= Server;