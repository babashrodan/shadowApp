const TradeAccount = require('../models/TradeAccount');
const Trade = require('../models/Trade');

const createAccount = async (accountNumber, customerName, initialDeposit) => {
  const account = new TradeAccount({ accountNumber, customerName, balance: initialDeposit });
  await account.save();
  return account;
};

const recordTrade = async (accountNumber, type, amount) => {
  const account = await TradeAccount.findOne({ accountNumber });
  if (!account) throw new Error('Account not found');

  const trade = new Trade({ type, amount, account: account._id });
  await trade.save();

  if (type === 'buy') {
    account.balance -= amount;
  } else if (type === 'sell') {
    account.balance += amount;
  }

  account.tradeHistory.push(trade._id);
  await account.save();

  return trade;
};

module.exports = { createAccount, recordTrade };
