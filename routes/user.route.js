var express = require('express');
var jwt = require('jsonwebtoken');

var userController =  require('../controllers/user.controller');
var Config= require('../configs/app.config')

var userRouter=express.Router();

//http://localhost:9478/user/register
userRouter.post('/register',userController.registerUser);

//http://localhost:9478/user/login
userRouter.post('/login',userController.loginUser);

var authMiddleware = function(request,response,next){
    console.log(request.headers);
    if(request.headers.authorization==null||request.headers.authorization==""){
        response.status(401).send("Unauthorized Access!")
    }
    var token = request.headers.authorization.split(" ")[1];
    console.log("token",token)
    jwt.verify(token,Config.config.SECRET_KEY,function(error,payload){
        if(error){
            response.send({error:error.message})
        }
        if(payload){
            console.log(payload);
            next();
        }
    })
}

//http://localhost:9478/user/changePassword
userRouter.post('/changePassword',authMiddleware,userController.changePassword);

module.exports=userRouter;