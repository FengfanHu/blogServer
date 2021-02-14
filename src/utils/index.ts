import * as fs from 'fs';
import * as path from 'path';
import * as response from './response';

const crytpo = require('crypto');
export const privateKey = fs.readFileSync(path.join(__dirname, "./rsa_private.key"));

/**
 * 获取password的hash
 * @param password
 */
function getHashedPassword(password: String):String {
  const hmac = crytpo.createHmac("sha256", privateKey);
  return hmac.update(password).digest('hex');
}

export {
  response,
  getHashedPassword
}
