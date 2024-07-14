const express = require('express');
const router = express.Router();

// Define your market routes here
router.get('/', (req, res) => {
  res.send('Market route working');
});

module.exports = router;
