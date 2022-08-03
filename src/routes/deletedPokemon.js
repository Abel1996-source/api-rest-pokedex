const {deletedPokemonController}=require('../controllers/deletedPokemonontroller.js')
const auth=require('../auth/auth.js')
module.exports=(app)=>{
    app.delete('/api/pokemons/:id',auth,deletedPokemonController);
}