const  Sequelize  = require("sequelize");
const db=require('../db/connexion.js');
module.exports= db.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:{
            msg:"Le Nom de ce pokemon existe déja !"
        },
        validate:{
            isEmail:{
                msg:"Le champ doit contenir un email: exemple@gmail.com"
            },
            notNull:{
                msg:"Le champ est requis !"
            }
        }
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"Le champ est requis !"
            },
            notNull:{
                msg:"Ce champ ne peux pas etre null !"
            }
        }
    }
  })