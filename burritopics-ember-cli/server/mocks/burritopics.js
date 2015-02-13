module.exports = function(app) {
  var express = require('express');
  var burritopicsRouter = express.Router();

  burritopicsRouter.get('/', function(req, res) {
    res.send({
      'burritopics': []
    });
  });

  burritopicsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  burritopicsRouter.get('/:id', function(req, res) {
    res.send({
      'burritopics': {
        id: req.params.id
      }
    });
  });

  burritopicsRouter.put('/:id', function(req, res) {
    res.send({
      'burritopics': {
        id: req.params.id
      }
    });
  });

  burritopicsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/burritopics', burritopicsRouter);
};
