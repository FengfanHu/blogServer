import * as Koa from 'koa';
import * as body from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as session from 'koa-session';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const SESSION_CONFIG = {
  key: 'koa:frank:session'
}

createConnection().then(connection => {
  const app = new Koa();

  app.use(cors({
    origin: (ctx) => {
      if (ctx.url === '/api/login') return 'http://192.168.31.27:3000';
      return "*";
    },
    credentials: true,
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  }));
  app.use(session(SESSION_CONFIG, app));
  app.use(body());
  require('./routes')(app);

  app.listen(3000, () => console.log('Server start at port 3000'));

})
