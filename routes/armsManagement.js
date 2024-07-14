const express = require('express');
const router = express.Router();
const ArmsManagement = require('../services/armsManagement');

router.post('/procure', async (req, res) => {
  try {
    const { name, type, quantity } = req.body;
    const arms = await ArmsManagement.procureArms(name, type, quantity);
    res.json(arms);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/transaction', async (req, res) => {
  try {
    const { armsId, type, quantity } = req.body;
    const transaction = await ArmsManagement.recordTransaction(armsId, type, quantity);
    res.json(transaction);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
