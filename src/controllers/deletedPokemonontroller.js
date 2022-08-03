const Pokemons=require('../models/Pokemon.js')
exports.deletedPokemonController=async(req,res)=>{
     await Pokemons.findByPk(req.params.id).then( async (pokemon)=>{
        if(pokemon==null){
            const message=`Le pokémon n'existe pas dans la base de données.`;
            res.status(404).json({message,data:err});
        }
        const pokemonDeleted=pokemon;
       return await Pokemons.destroy({
            where: {
            id:pokemon.id
            }
        })
        .then(_ =>{
            const message=`Le pokémons dont l'identifiant est le n°${pokemonDeleted.id} à bien été suprimé`;
            res.json({message, data:pokemonDeleted})
        })
}).catch(err=>{
    const message=`Le pokémon n'a pas pu etre suprimer. Réessayer dans quelques instant !`;
    res.status(500).json({message,data:err});
})
}