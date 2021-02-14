const Koa = require('koa');
const body = require('koa-bodyparser');
const cors = require('koa2-cors');
const routes = require('./routes');

const app = new Koa();

app.use(cors());
app.use(body());
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(3000, console.log('Server start at port 3000'));
