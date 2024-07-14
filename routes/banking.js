const express = require('express');
const router = express.Router();
const Banking = require('../services/banking');

router.post('/create-account', async (req, res) => {
  try {
    const { accountNumber, customerName, initialDeposit } = req.body;
    const account = await Banking.createAccount(accountNumber, customerName, initialDeposit);
    res.json(account);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/transaction', async (req, res) => {
  try {
    const { accountNumber, type, amount } = req.body;
    const transaction = await Banking.processTransaction(accountNumber, type, amount);
    res.json(transaction);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
