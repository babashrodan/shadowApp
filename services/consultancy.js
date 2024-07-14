const Consultancy = require('../models/Consultancy');

const createProject = async (clientName, projectName, startDate, endDate, status, notes) => {
  const project = new Consultancy({ clientName, projectName, startDate, endDate, status, notes });
  await project.save();
  return project;
};

const updateProjectStatus = async (projectId, status) => {
  const project = await Consultancy.findById(projectId);
  if (!project) throw new Error('Project not found');

  project.status = status;
  await project.save();

  return project;
};

module.exports = { createProject, updateProjectStatus };
