// properties-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const properties = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    rules: { type: String },
    minimumDays: { type: Number },
    userName: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('properties', properties);
};
