// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const recommendations = sequelizeClient.define('recommendations', {
    namespace: {
      type: DataTypes.STRING
    },
    person: {
      type: DataTypes.STRING
    },
    action: {
      type: DataTypes.STRING
    },
    thing: {
      type: DataTypes.STRING
    },
    expiresAt: {
      type: DataTypes.DATE,
      field: 'expires_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdat'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedat'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  recommendations.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return recommendations;
};
