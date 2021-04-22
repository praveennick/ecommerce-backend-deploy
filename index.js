var express = require('express');
var cors= require('cors');

var app = express();

var Config= require('./configs/app.config')
var DB= require('./configs/db.config');
var userRouter= require('./routes/user.route');
var productRouter= require('./routes/product.route')

app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.use('/admin',productRouter)

DB.connect();

app.listen(Config.config.PORT,function(){
    console.log("Server Started! on port-no:"+Config.config.PORT);
})