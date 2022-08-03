const Pokemons=require('../models/Pokemon')
const { ValidationError, UniqueConstraintError } = require('sequelize');
exports.updatePokemonController=async(req,res)=>{
        const id=req.params.id;
    await Pokemons.update(req.body, {
        where: {
            id:id
        }
    }).then(async _ =>{
     return await Pokemons.findByPk(id).then(pokemon=>{
            if(pokemon==null){
                const message=`Le pokémon n'existe pas dans la base de données.`;
                res.status(404).json({message,data:err});
            }
            const message=`Le pokémons ${pokemon.get().name} à bien été modifier`;
            res.json({message, data:pokemon})
        })
})
.catch(err=>{
    if(err instanceof ValidationError){
        return res.status(400).json({message:err.message,data:err});
    }
    if(err instanceof UniqueConstraintError){
        return res.status(400).json({message:err.message,data:err})
    }
    const message=`Le pokémon n'a pas pu etre modifier. Réessayer dans quelques instant !`;
    res.status(500).json({message,data:err});
})
}