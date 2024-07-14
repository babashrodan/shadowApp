const express = require('express');
const router = express.Router();
const Consultancy = require('../services/consultancy');

router.post('/create-project', async (req, res) => {
  try {
    const { clientName, projectName, startDate, endDate, status, notes } = req.body;
    const project = await Consultancy.createProject(clientName, projectName, startDate, endDate, status, notes);
    res.json(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/update-status', async (req, res) => {
  try {
    const { projectId, status } = req.body;
    const project = await Consultancy.updateProjectStatus(projectId, status);
    res.json(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
