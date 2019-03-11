// bookings-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const bookings = new Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    propertyName: { type: String, required: true },
    userName: { type: String, required: true },
    isConfirmed: { type: Boolean, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('bookings', bookings);
};
