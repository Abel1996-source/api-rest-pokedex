const Users=require('../models/User.js')
const bcrypt= require('bcrypt');
const { ValidationError, UniqueConstraintError } = require('sequelize');
exports.controllerCreateUsers= async(req,res)=>{
     bcrypt.hash(req.body.password,10).then(async hash=>{
        return await Users.create({username:req.body.username, password:hash})
        .then(user=>{
            const message=`L'utilisateur ${user.get().username} à bien été créé`;
            res.json({message, data:user})
        }).catch((err)=>{
            if(err instanceof ValidationError){
                return res.status(400).json({message:err.message,data:err});
            }
            if(err instanceof UniqueConstraintError){
                return res.status(400).json({message:err.message,data:err});
            }
            const message=`L'utilisateur n'a pas pu etre créer. Réessayer dans quelques instant  !`;
            res.status(500).json({message,data:err})
        })
    })
}