'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    // 要求されたURLによって処理を分岐
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      // ログアウトして、ステータスコード401を返す
      util.handleLogout(req, res);
      break;
    default:
      // 要求されたパスが未実装だった場合、ステータスコード404を返す
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route: route
};