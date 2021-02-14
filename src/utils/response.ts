const SUCCESS = 200;

const BAD_REQUEST = 400;
const UNAUTH = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;

const SERVER_ERROR = 500;

type Response = {
  code: number,
  msg: string,
  data?: Object
}

export function resSuccess(data?: object):Response {
  return {
    code: SUCCESS,
    msg: 'success',
    data
  }
}

export function resBadParam(data?: object):Response {
  return {
    code: BAD_REQUEST,
    msg: 'bad request',
    data
  }
}
