const { controllerCreateUsers } = require("../controllers/controllerCreateUsers")

module.exports=(app)=>{
    app.post('/api/register',controllerCreateUsers)
}