const express = require('express');
const ProjectController = require('../controllers/projectController');

const router = express.Router();
const projectController = new ProjectController();

router.post('/', projectController.createProject);

module.exports = router;
