const Pokemons = require("../models/Pokemon.js");
const { ValidationError, UniqueConstraintError } = require("sequelize");
exports.createPokemonController= async (req,res)=>{
    await Pokemons.create(req.body)
        .then(pokemon=>{
            const message=`Le pokémons ${pokemon.get().name} à bien été créé`;
            res.json({message, data:pokemon})
        }
 ).catch(err=>{
    if(err instanceof ValidationError){
        return res.status(400).json({message:err.message,data:err});
    }

    if(err instanceof UniqueConstraintError){
        return res.status(400).json({message:err.message,data:err})
    }
    const message=`Le pokémon n'a pas pu etre ajouté. Réessayer dans quelques instant !`;
    res.status(500).json({message,data:err});
})
}