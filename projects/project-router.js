const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

// Build an API with endpoints for:

  // adding resources.
  // retrieving a list of resources.
  // adding projects.
  // retrieving a list of projects.
  // adding tasks.
  // retrieving a list of tasks. The list of tasks should include the project name and project description.

// GET PROJECTS

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ message: "Could not get projects." }))
});

// POST PROJECT 

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then(project => {
      res.status(201).json({ created: project[0] });
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

// GET TASKS

router.get('/tasks', (req, res) => {
  Projects.findTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST TASK

router.post('/tasks', (req, res) => {
  const taskData = req.body
  Projects.addTask(taskData)
      .then(thing => {
          res.status(201).json({created: thing[0]})
      })
      .catch(err => {
          res.status(500).json({message: "Failed to create new task" })
      })
})

// GET RESOURCES

router.get('/resources', (req, res) => {
  Projects.findResources()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => res.status(500).json({ message: 'Could not fetch resources' }));
});

// POST RESOURCE

router.post("/resources", (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then(thing => {
        res.status(201).json({created: thing[0]})
    })
    .catch(err => {
        res.status(500).json({message: "failed to post resources" });
    });
});

module.exports = router;