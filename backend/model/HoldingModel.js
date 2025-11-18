const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");

const HoldingModel = mongoose.model("holdings", HoldingSchema);

module.exports = { HoldingModel };
