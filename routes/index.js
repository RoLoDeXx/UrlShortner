const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

// route: GET /:code
// desc:  redirect to long/original
router.get("/:code", async (req, res, next) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) res.redirect(url.longUrl);
    else res.status(404).json("No url in db");
  } catch (error) {
    console.log(error);
    res.status(500).json("Something messed up");
  }
});

module.exports = router;
