const router = require("express").Router();
const { model } = require("mongoose");
const Pin = require("../models/Pin");

//creating a pin

router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const SavedPin = await newPin.save();
    res.status(200).json(SavedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//getting all the pins

router.get("/", async (req, res) => {
  try {
    const Pins = await Pin.find();
    res.status(200).json(Pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
