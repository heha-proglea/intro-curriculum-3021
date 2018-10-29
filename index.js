'use strict';
const http = require('http');
const auth = require('http-auth');
const router = require('./lib/router');

// Basic認証の設定
const basic = auth.basic({
  // basic認証で覆う(保護する)範囲の指定
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

// 第一引数にbasicオブジェクトを渡すことで、basic認証に対応
const server = http.createServer(basic, (req, res) => {
  router.route(req, res);
}).on('error', (e) => {
  console.error('Server Error', e);
}).on('clientError', (e) => {
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});