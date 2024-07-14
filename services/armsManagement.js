const Arms = require('../models/Arms');
const ArmsTransaction = require('../models/ArmsTransaction');

const procureArms = async (name, type, quantity) => {
  const arms = new Arms({ name, type, quantity });
  await arms.save();
  return arms;
};

const recordTransaction = async (armsId, type, quantity) => {
  const arms = await Arms.findById(armsId);
  if (!arms) throw new Error('Arms not found');

  const transaction = new ArmsTransaction({ type, quantity, arms: arms._id });
  await transaction.save();

  if (type === 'addition') {
    arms.quantity += quantity;
  } else if (type === 'removal') {
    arms.quantity -= quantity;
  }

  arms.transactions.push(transaction._id);
  await arms.save();

  return transaction;
};

module.exports = { procureArms, recordTransaction };
