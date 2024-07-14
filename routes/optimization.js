

const express = require('express');
const router = express.Router();
const MarketData = require('../models/MarketData');
const Bond = require('../models/Bond');

function calculateSharpeRatio(returns, riskFreeRate = 0.01) {
  const avgReturn = returns.reduce((acc, ret) => acc + ret, 0) / returns.length;
  const stdDev = Math.sqrt(returns.map(ret => (ret - avgReturn) ** 2).reduce((acc, val) => acc + val, 0) / returns.length);
  return (avgReturn - riskFreeRate) / stdDev;
}

function calculateAlpha(returns, benchmarkReturns) {
  const avgReturn = returns.reduce((acc, ret) => acc + ret, 0) / returns.length;
  const avgBenchmark = benchmarkReturns.reduce((acc, ret) => acc + ret, 0) / benchmarkReturns.length;
  return avgReturn - avgBenchmark;
}

router.get('/sharpe-ratio', async (req, res) => {
  try {
    const marketData = await MarketData.find();
    const returns = marketData.map(data => data.return);
    const sharpeRatio = calculateSharpeRatio(returns);
    res.json({ sharpeRatio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/alpha', async (req, res) => {
  try {
    const marketData = await MarketData.find();
    const benchmarkData = await MarketData.find({ type: 'benchmark' });
    const returns = marketData.map(data => data.return);
    const benchmarkReturns = benchmarkData.map(data => data.return);
    const alpha = calculateAlpha(returns, benchmarkReturns);
    res.json({ alpha });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
