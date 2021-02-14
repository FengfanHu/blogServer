import * as Router from 'koa-router';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';
import { privateKey, getHashedPassword, response } from '../utils';

const router: Router = new Router();
const userRepository = getRepository(User);

/**
 * Login
 * token expires in 1 day.
 * @return token if success, otherwise response code 400
 */
router.post('/login', async ctx => {
  console.log(ctx);
  const { name, password } = ctx.request.body;
  const manager = await userRepository.findOne({ where: { id: 1 } });
  if (name === manager.name && getHashedPassword(password) === manager.password) {
    const token = jwt.sign({ id: manager.id, name: manager.name }, privateKey, { expiresIn: 1000 * 60 * 60 * 24 });
    ctx.body = response.resSuccess({ token: 'Bearer '+token });
  } else {
    ctx.body = response.resBadParam();
  }
});

router.get('/user', async ctx => {
  const request = ctx.request;
  const token = request.header.authorization.split(' ')[1] || '';
  const res = jwt.verify(token, privateKey);
  ctx.body = res;
})

export = router;
