const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        Required:true
    },
    description:{
        type: String,
        Required:true
    },
    price: {
        type: Number,
        Required:true
    },
    category: {
        type: String,
        Required:true
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
},
{timestamps:true});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;