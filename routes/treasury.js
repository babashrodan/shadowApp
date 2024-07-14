const express = require('express');
const router = express.Router();
const TreasuryManagement = require('../services/treasury');

router.post('/issue', async (req, res) => {
  try {
    const { type, faceValue, maturityDate, interestRate } = req.body;
    const treasury = await TreasuryManagement.issueTreasury(type, faceValue, maturityDate, interestRate);
    res.json(treasury);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/transaction', async (req, res) => {
  try {
    const { treasuryId, type, amount } = req.body;
    const transaction = await TreasuryManagement.recordTransaction(treasuryId, type, amount);
    res.json(transaction);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
