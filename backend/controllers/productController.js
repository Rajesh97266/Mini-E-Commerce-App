const ProductModel = require("../models/productModel");

//Get all products api
exports.getProducts = async (req, res) => {

  try {
    const { keyword } = req.query; // Extract the keyword from query parameters

    // Build the search condition
    const searchCondition = keyword
      ? { name: { $regex: keyword, $options: "i" } } // Case-insensitive regex search
      : {}; // Fetch all products if no keyword is provided

    const products = await ProductModel.find(searchCondition);
    res.json({
      success: true,
      message: "Get Products Working",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to get products",
    });
  }
};

//Get single product api
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    return res.json({
      success: true,
      message: "Get Single Product Working",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to get product with that ID",
    });
  }
};
