const ProjectService = require('../services/projectService');

const projectService = new ProjectService();

class ProjectController {
  async createProject(req, res) {
    try {
        const { userId, projectName } = req.body;
        const project = await projectService.createProjectForUser(userId, projectName);
        res.status(201).json(project);
      } catch (error) {
        console.error('Error creating project:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }
}

module.exports = ProjectController;
