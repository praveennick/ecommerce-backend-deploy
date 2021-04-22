var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
        pid:{
            type: Number,
            required: true,
            unique: true,
            index:true
        },
        product_name:{
            type: String,
            required:true,
            unique:true,
            index:true
        },
        price:{
            type:Number,
            required:true,
            index:true
        },
        product_image:{
            type: String,
            required:true
        },
        offers:{
            type: Array,
            required: true
        },
        product_specifications:{
            type: Array,
            required:true
        },
        category:{
            type: String,
            required: true
        },
        sub_category:{
            type: String,
            required: true
        },
        seller:{
            type: String,
            required: true
        },
        reviews:{
            type: Array,
            default:null
        }
    }
)

module.exports= mongoose.model("product",ProductSchema);