const Pokemons = require("../models/Pokemon.js")
exports.findPokemonontroller= async (req,res)=>{
    await Pokemons.findByPk(req.params.id)
             .then(pokemon=>{
                if(pokemon===null){
                    const message=`Le pokémon n'existe pas dans la base de données.`;
                    res.status(404).json({message,data:err});
                }
                const message=`Le pokémons ${pokemon.get().name} à bien été récupéré`;
                res.json({message, data:pokemon})
    }).catch(err=>{
        const message=`Le pokémon n'existe pas dans la base de données !`;
        res.status(500).json({message,data:err});
    })
}