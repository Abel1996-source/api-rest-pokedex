const { findPokemonontroller } = require("../controllers/findPokemonController")
const auth=require('../auth/auth.js')
module.exports=(app)=>{
    app.get('/api/pokemons/:id',auth,findPokemonontroller)
}