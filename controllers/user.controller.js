var jwt = require('jsonwebtoken');

var userModel = require('../models/user.model');
var Config = require('../configs/app.config')

exports.registerUser=function(request,response){
    console.log(request.body);
    var userData= request.body;
    var newUser= new userModel(userData);
    newUser.save(function(err,docs){
        if(err){
            response.send({result:err.message})
        }
        if(docs._id){
            var payload = {
                id: docs._id
            }
            var token=jwt.sign(payload,Config.config.SECRET_KEY);
            response.send({result:"success",token:token})
        }
    })
}

exports.loginUser=function(request,response){
    var userData= request.body;
    userModel.findOne({email:userData.email},function(error,docs){
        if(error){
            response.send({result:false,error:error.message})
        }
        if(docs.role==userData.role){
            if(docs.password == userData.password){
                var payload = {
                    id: docs._id
                }
                var token=jwt.sign(payload,Config.config.SECRET_KEY);
                response.send({result:"Login Success",token:token})
            }else{
                response.send({result:false,message:"Incorrect Password!"});
            }
        }else{
            response.status(401).send({result:false,message:"Unauthorized Access!!"});
        }
        
    })
}

exports.changePassword=function(request,response){
    var userData= request.body;
    userModel.findOne({email:userData.email},function(error,docs){
        if(error){
            response.send({result:false,error:error.message})
        }
        if(docs.password == userData.currentPassword){
            userModel.updateOne({email:userData.email},{password:userData.newPassword},function(err,res){
                if(err){
                    response.send({result:false,err:err.message})
                }
                if(res){
                    response.send({result:true,message:"Password updated"})
                }
            })
        }else{
            response.send("cannot change pwd");
        }
    })
}