var Controller = require('./controller');

module.exports = function (app) {
    app.get('/api', Controller.hbaseController);
}