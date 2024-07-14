const Asset = require('../models/Asset');
const Portfolio = require('../models/Portfolio');

const createPortfolio = async (name) => {
  const portfolio = new Portfolio({ name });
  await portfolio.save();
  return portfolio;
};

const addAssetToPortfolio = async (portfolioId, assetName, assetType, assetValue) => {
  const asset = new Asset({ name: assetName, type: assetType, value: assetValue });
  await asset.save();

  const portfolio = await Portfolio.findById(portfolioId);
  if (!portfolio) throw new Error('Portfolio not found');

  portfolio.assets.push(asset._id);
  await portfolio.save();

  return asset;
};

const trackAssetPerformance = async (assetId, value) => {
  const asset = await Asset.findById(assetId);
  if (!asset) throw new Error('Asset not found');

  asset.performanceHistory.push({ value });
  await asset.save();

  return asset;
};

module.exports = { createPortfolio, addAssetToPortfolio, trackAssetPerformance };
