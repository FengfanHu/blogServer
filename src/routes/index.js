var Router = require('koa-router');
var route = new Router();
route.get('/', function (ctx) {
    var query = ctx.request.query;
    ctx.body = query;
});
module.exports = route;
