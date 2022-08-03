const Pokemons = require("../models/Pokemon.js")
const { Op } = require("sequelize");
module.exports=allPokemonsControler=async (req,res)=>{
    if(req.query.name){
        const name=req.query.name;
        const limit=parseInt(req.query.limit)||9

        if(name.length < 2){
            const message=`Le terme rechercher doit contenir au moins deux carractères !`;
            return res.status(400).json({message})
        }
        Pokemons.findAndCountAll({
            where: {
              name: {
                [Op.like]: `%${name}%`
              }
            },
            order:['name'],
            limit:limit
          }).then(({count,rows})=>{
                const message=`Il y a ${count} pokémons qui correspondent au terme de recherche '${name}'.`
                res.json({message,data:rows})
          })

    }else{

        await Pokemons.findAll({order:['name']}).then(pokemon=>{
        const message=`La liste des pokémons a bien été récupérée`;
        res.json({message, data:pokemon})
    }).catch(err=>{
        const message=`La liste de pokémon n'a pu etre recupérée. Réessayer dans quelques instant !`;
        res.status(500).json({message,data:err});
    })
    }
}