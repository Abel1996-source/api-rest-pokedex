 const express =require("express")
 const favicon= require('serve-favicon')
 const bodyParser=require('body-parser')
 const morgan =require('morgan');

// créer une application express
 let app =express();

 
// appelle de quelques middlewares
app.use(favicon(__dirname+"/favicon.ico"));
app.use(morgan('dev'));
app.use(bodyParser.json())

// Points de controles
require('./src/routes/findAllPokemons.js')(app);
require('./src/routes/findPokemonByPk.js')(app);
require('./src/routes/createPokemons.js')(app);
require('./src/routes/updatePkemon.js')(app);
require('./src/routes/deletedPokemon.js')(app);
require('./src/routes/userLogin.js')(app)

//  Erreur du client 404
app.use(({res})=>{
    const message=`Inpossible de trouver la ressource demandée, vous pouvez éssayer une autre URL`;
    res.status(404).json(message)
})
//configuraton du port de communication avec le serveur HTTP 
 const port=process.env.PORT||8000
 app.listen(port,()=>console.log("Listennig on http:127.0.0.1: "+ port))