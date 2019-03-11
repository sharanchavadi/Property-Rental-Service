// Initializes the `bookings` service on path `/bookings`
const createService = require('feathers-mongoose');
const createModel = require('../../models/bookings.model');
const hooks = require('./bookings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bookings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('bookings');

  service.hooks(hooks);
};
