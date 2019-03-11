// Initializes the `recommendations` service on path `/recommendations`
const createService = require('feathers-sequelize');
const createModel = require('../../models/recommendations.model');
const hooks = require('./recommendations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/recommendations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('recommendations');

  service.hooks(hooks);
};
