const properties = require('./properties/properties.service.js');
const bookings = require('./bookings/bookings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(properties);
  app.configure(bookings);
};
