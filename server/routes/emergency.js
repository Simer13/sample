const express = require('express');
const Emergency = require('../models/Emergency');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { type, location, details } = req.body;
  const emergency = new Emergency({ type, location, details });
  await emergency.save();
  res.json({ msg: "Emergency recorded" });
});

router.get('/all', async (req, res) => {
  const emergencies = await Emergency.find().sort({ createdAt: -1 });
  res.json(emergencies);
});

module.exports = router;
