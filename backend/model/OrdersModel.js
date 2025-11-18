// const{model}=require('mongoose');

// const OrdersSchema=require('../schemas/OrdersSchema');

// const OrdersModel=new model("order",schema=OrdersSchema);
// module.exports={OrdersModel};
const mongoose = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");

// Use mongoose.model (NOT new model)
const OrdersModel = mongoose.model("order", OrdersSchema);

module.exports = OrdersModel; // ✅ export directly, not inside {}
