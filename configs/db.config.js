var mongoose = require('mongoose');

var Config = require('./app.config');

exports.connect=()=>{
    mongoose.connect(Config.config.MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true },function(error){
        if(error){
            console.log(error.message);
        }else{
            console.log("Database Connected!");
        }
    });
}