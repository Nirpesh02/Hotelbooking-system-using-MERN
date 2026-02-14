const Subscriber = require("../models/suscribeModel");

exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if exists
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ message: "Already subscribed!" });

    // Save new
    const newSub = new Subscriber({ email });
    await newSub.save();

    res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    res.status(500).json({ message: "Error subscribing", error: error.message });
  }
};