const Project = require('../models/Project');
const User = require('../models/User');
class ProjectService {
  async createProject(projectName) {
    const project = new Project({ projectName });
    await project.save();
    return project;
  }
  async createProjectForUser(userId, projectName) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const project = new Project({ projectName });
    await project.save();

    user.projects.push(project);
    await user.save();

    return project;
  }
}

module.exports = ProjectService;
