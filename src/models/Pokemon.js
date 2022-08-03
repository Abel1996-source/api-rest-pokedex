const Sequelize=require('sequelize')
const db=require('../db/connexion.js')

module.exports= db.define('Pokemons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:{
        name:"Le nom est déja occupé",
        msg:"Le Nom de ce pokemon existe déja !"
      },
      validate:{
       notEmpty:{msg:`Ce champs est requis`},
        notNull:{msg:`Le nom du pokemon est requis`}
      }
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
        isUrl:{msg:`Ce champ require uniquement un lien(URL)`},
        notNull:{msg:`Le nom du pokemon est requis`}
      }
    }
  })