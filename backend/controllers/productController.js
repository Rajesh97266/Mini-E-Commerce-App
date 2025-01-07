exports.getProducts = (req, res) => {
    res.json({
        success: true,
        message: "Get Products Working"
    })
}

exports.getSingleProduct = (req, res) => {
  res.json({
    success: true,
    message: "Get Single Product Working",
  });
};

