const {Sequelize}=require('sequelize');

const db=new Sequelize('pokedex','root','',{
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions:{
        timezone:'Etc/GMT-2'
    },
    logging:false,
    operatorsAliases:false
})


module.exports= db