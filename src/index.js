var Koa = require('koa');
var body = require('koa-bodyparser');
var cors = require('koa2-cors');
var routes = require('./routes');
var app = new Koa();
app.use(cors());
app.use(body());
app.use(routes.routes()).use(routes.allowedMethods());
app.listen(3000, console.log('Server start at port 3000'));
