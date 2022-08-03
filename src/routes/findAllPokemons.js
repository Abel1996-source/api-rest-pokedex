
const allPokemonsControler=require('../controllers/allPokemonsController')
const auth=require('../auth/auth.js');
module.exports= (app)=>{
    app.get('/api/pokemons',auth,allPokemonsControler)
}