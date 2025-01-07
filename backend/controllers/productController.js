const ProductModel = require("../models/productModel");

//Get all products api
exports.getProducts = async (req, res) => {

   const products =  await ProductModel.find({});

    res.json({
            success: true,
            message: "Get Products Working",
            products
        })
}

//Get single product api
exports.getSingleProduct = async (req, res) => {

  try{
    const product = await ProductModel.findById(req.params.id);
    return res.json({
      success: true,
      message: "Get Single Product Working",
      product
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to get product with that ID",
      
    });
  }
};

