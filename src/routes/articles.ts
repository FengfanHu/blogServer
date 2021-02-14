import * as Router from 'koa-router';

const router: Router = new Router({ prefix: '/articles' });

router.get('/', ctx => ctx.body = 'Articles');

export = router;
