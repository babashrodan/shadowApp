const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  timestamp: Date,
  soilMoisture: Number,
  temperature: Number,
  humidity: Number
});

const SensorData = mongoose.model('SensorData', SensorDataSchema);

router.post('/', async (req, res) => {
  const { timestamp, soilMoisture, temperature, humidity } = req.body;

  try {
    const newSensorData = new SensorData({ timestamp, soilMoisture, temperature, humidity });
    await newSensorData.save();
    res.status(201).send(newSensorData);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const sensorData = await SensorData.find();
    res.status(200).send(sensorData);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
