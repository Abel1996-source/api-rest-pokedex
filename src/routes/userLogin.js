const { controllerLoginUser } = require("../controllers/controllerLoginUser");

module.exports=(app)=>{
    app.post('/api/login',controllerLoginUser);
}