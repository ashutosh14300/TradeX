
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const DB_URI = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ---- Routes ----
app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.get("/allHoldings", async (req, res) => {
  const data = await HoldingModel.find({});
  res.json(data);
});

app.get("/allPositions", async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

app.get("/allOrders", async (req, res) => {
  const data = await OrdersModel.find({});
  res.json(data);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel(req.body);
  await newOrder.save();
  res.send("Order saved!");
});

// ---- Connect DB ----
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("📌 MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log("❌ DB ERROR:", err));
