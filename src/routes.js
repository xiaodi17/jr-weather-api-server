const express = require("express");
const weatherRoutes = require("./routes/weather");
const responseFormatter = require("./utils/responseFormatter");
//provided by express
const router = express.Router();

router.get("/", (req, res) =>
  responseFormatter(
    res,
    200,
    "Welcome to the weather API Visit /api-docs for help",
    null
  )
);

router.use("/api/weather", weatherRoutes);

module.exports = router;
