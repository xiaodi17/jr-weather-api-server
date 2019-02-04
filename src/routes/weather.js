const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:cc/:city", (req, res) => {
  // res.send('weather');
  const { cc, city } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=271b4dcce8b1367805a719dd68ba0350`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
