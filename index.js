const Koa = require('koa');
const body = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
