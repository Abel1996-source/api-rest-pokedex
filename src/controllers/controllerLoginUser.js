const user=require('../models/User.js');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const privateKey=require('../auth/private_key.js');

exports.controllerLoginUser= async(req,res)=>{
await user.findOne(
    { 
        where: { username: req.body.username } 
}
).then(user=>{
    if(!user){
        const message=`Cet utilisteur est introuvable`
        res.status(404).json({message})
    }
    bcrypt.compare(req.body.password,user.password).then(isPassWordValide=>{
        if(!isPassWordValide){
            const message=`Le mot de passe est incorect !`
            res.sattus(401).json({message})
        }

        const jeton=jwt.sign(
            {userId: user.id},
            privateKey,
            {expiresIn:'24h'}
            )

        const message=`L'utilisateur à été connecté avec succès`
        res.json({message,data:user,jeton})
    })
}).catch((err)=>{
    const message=`Le mot de passe est incorret! rassurer que vous aviez un compte sinon en créer un!`
    res.status(500).json({message,data:err})
})

}