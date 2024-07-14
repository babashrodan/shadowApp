

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const treasuryRoutes = require('./routes/treasury');
const marketRoutes = require('./routes/market');
// const optimizationRoutes = require('./routes/optimization');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

// Routes
app.use('/api/treasury', treasuryRoutes);
app.use('/api/market', marketRoutes);
// app.use('/api/optimization', optimizationRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

