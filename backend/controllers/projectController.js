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

  async getAllProjects(req, res) {
    try {
     
      const userId = req.params.userId; 

      const projects = await projectService.getAllProjects(userId);
      res.json( {data: projects} );
    } catch (error) {
      console.error('Error handling request:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createEpisode(req, res) {
    const { projectId } = req.params;
    const { episodeName, description } = req.body;

    try {
      const project = await projectService.createEpisodeAndLinkToProject(projectId, { episodeName, description });
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = ProjectController;
