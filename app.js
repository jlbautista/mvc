require("dotenv").config();
const express = require("express");
const cors = require("cors"); // CSRF

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const purchasesRoutes = require("./routes/purchasesRoutes");

app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/purchase", purchasesRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;