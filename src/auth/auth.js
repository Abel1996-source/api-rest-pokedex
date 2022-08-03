const jwt=require('jsonwebtoken');
const privateKey=require('../auth/private_key.js');

module.exports=(req,res,next)=>{
    const authorizationHeader=req.headers.authorization;

    if(!authorizationHeader){
        const message=`Vous n'avez pas fournir un jeton d'authentification. Ajouter-en un dans l'en-tete de la requete.`
        return res.status(401).json({message})
    }

const token=authorizationHeader.split(' ')[1]
const decodedToken=jwt.verify(token,privateKey,(err,decodedToken)=>{
    if(err){
        const message=`L'utilisateur n'est pas autorisé à accèder à cette ressource.`
        return res.status(401).json({message,data:err})
    }
})
const userId=decodedToken.userId;
if(req.body.userId && req.body.userId!==userId){
    const message=`L'identifiant de l'uitisateur est invalide.`
    res.status(401).json({message})
}else{
    next();
}
}