const express = require("express");
const axios = require("../utils/axios");
const weather = require("../models/Weather");
const responseFormatter = require("../utils/responseFormatter");
const countryValidator = require("../middleware/countryValidator");
const router = express.Router();
const APPID = process.env.APPID;

router.get("/:cc/:city", countryValidator, (req, res, next) => {
  // res.send('weather');
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(error => next(error));
});

module.exports = router;
