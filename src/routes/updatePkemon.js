const {updatePokemonController}=require('../controllers/updatePokemonController.js')
const auth=require('../auth/auth.js');
module.exports=(app)=>{
    app.put('/api/pokemons/:id',auth,updatePokemonController)
}