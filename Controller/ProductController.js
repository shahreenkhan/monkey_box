const ProductModel = require("../models/Product")

class ProductController{
    static getAllProducts = async(req,res) =>{
        try {
            const data = await ProductModel.find()
            res.status(200).json({
                success:true,
                data
            })
            
        } catch (err) {
            res.send(err)
        }
    }

    // Admin
    static CreatProduct = async(req,res) =>{
        //  console.log(req.body)
        try {
            const data = await ProductModel.create(req.body)
            res.status(201)
            .send({status:"success",message:"Product Added Successfully !"})

        } catch (err) {
            res.send(err)
        }
    }
    static getProductdetail = async(req,res) =>{
        try {
            const data = await ProductModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                data
            })
        } catch (err) {
            res.send(err)
        }
    }
    static UpdateProduct = async(req,res) =>{
        // console.log(req.body)
        try {
            const data = await ProductModel.findById(req.params.id)
            const update = await ProductModel.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category
                })
            //saving data
            await update.save()
            res.status(201)
            .send({status:"success",message:"Product Update Successfully !"})

        } catch (err) {
            res.send(err)
        }
    }
    static deleteProduct = async(req,res) =>{
       // console.log(req.params.id)
       try{
        const result = await ProductModel.findByIdAndDelete(req.params.id)
        return res.status(400)
         .send({status:"success",message:"Product Deleted Successfully !"})
    }catch(err){
        res.send(err);
    }
    }
}
module.exports = ProductController