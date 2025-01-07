const orderModel = require("../models/orderModel");

//Create order api - /api/v1/order
exports.createOrder = async (req, res) => {
  const cartItems = req.body;
  const amount =Number (cartItems.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  )).toFixed(2);
  const status = "Pending";

  //Create a new order in the database
  const order = await orderModel.create({
    cartItems,
    amount,
    status,
  })
  res.json({
    success: true,
    order
  });
};
