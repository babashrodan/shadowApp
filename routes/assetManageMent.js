const express = require('express');
const router = express.Router();
const AssetManagement = require('../services/assetManagement');

router.post('/create-portfolio', async (req, res) => {
  try {
    const { name } = req.body;
    const portfolio = await AssetManagement.createPortfolio(name);
    res.json(portfolio);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/add-asset', async (req, res) => {
  try {
    const { portfolioId, assetName, assetType, assetValue } = req.body;
    const asset = await AssetManagement.addAssetToPortfolio(portfolioId, assetName, assetType, assetValue);
    res.json(asset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/track-asset', async (req, res) => {
  try {
    const { assetId, value } = req.body;
    const asset = await AssetManagement.trackAssetPerformance(assetId, value);
    res.json(asset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
