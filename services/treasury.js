const Treasury = require('../models/Treasury');
const TreasuryTransaction = require('../models/TreasuryTransaction');

const issueTreasury = async (type, faceValue, maturityDate, interestRate) => {
  const treasury = new Treasury({ type, faceValue, maturityDate, interestRate, balance: faceValue });
  await treasury.save();
  return treasury;
};

const recordTransaction = async (treasuryId, type, amount) => {
  const treasury = await Treasury.findById(treasuryId);
  if (!treasury) throw new Error('Treasury not found');

  const transaction = new TreasuryTransaction({ type, amount, treasury: treasury._id });
  await transaction.save();

  if (type === 'deposit') {
    treasury.balance += amount;
  } else if (type === 'withdrawal') {
    treasury.balance -= amount;
  }

  treasury.transactions.push(transaction._id);
  await treasury.save();

  return transaction;
};

module.exports = { issueTreasury, recordTransaction };
