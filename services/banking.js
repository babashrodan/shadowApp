const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

const createAccount = async (accountNumber, customerName, initialDeposit) => {
  const account = new Account({ accountNumber, customerName, balance: initialDeposit });
  await account.save();
  return account;
};

const processTransaction = async (accountNumber, type, amount) => {
  const account = await Account.findOne({ accountNumber });
  if (!account) throw new Error('Account not found');

  const transaction = new Transaction({ type, amount, account: account._id });
  await transaction.save();

  if (type === 'deposit') {
    account.balance += amount;
  } else if (type === 'withdrawal') {
    account.balance -= amount;
  }

  account.transactionHistory.push(transaction._id);
  await account.save();

  return transaction;
};

module.exports = { createAccount, processTransaction };
