import { getConnection } from 'typeorm';
const fs = require('fs');
const Route = require('koa-router');

const rootRoute = new Route();

fs.readdirSync(__dirname).forEach(file => {
  if (file === 'index.ts') return;
  const route = require(`./${file}`);
  rootRoute.use('/api', route.routes()).use(route.allowedMethods());
})

module.exports = (app) => {
  app.use(rootRoute.routes()).use(rootRoute.allowedMethods());
}
