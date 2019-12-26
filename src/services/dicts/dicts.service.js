// Initializes the `dicts` service on path `/dicts`
const { Dicts } = require('./dicts.class');
const createModel = require('../../models/dicts.model');
const hooks = require('./dicts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/dicts', new Dicts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dicts');

  service.hooks(hooks);
};
