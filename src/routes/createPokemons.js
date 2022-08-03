const { createPokemonController } = require("../controllers/createPokemonController")
const auth =require('../auth/auth.js')
module.exports=(app)=>{
    app.post('/api/pokemons/',auth,createPokemonController)
}