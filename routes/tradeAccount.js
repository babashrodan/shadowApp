const express = require('express');
const router = express.Router();
const TradeAccountManagement = require('../services/tradeAccount');

router.post('/create-account', async (req, res) => {
  try {
    const { accountNumber, customerName, initialDeposit } = req.body;
    const account = await TradeAccountManagement.createAccount(accountNumber, customerName, initialDeposit);
    res.json(account);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/trade', async (req, res) => {
  try {
    const { accountNumber, type, amount } = req.body;
    const trade = await TradeAccountManagement.recordTrade(accountNumber, type, amount);
    res.json(trade);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
