'use strict';

// ステータスコード401: ログアウト用の関数
function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

// ステータスコード404: 指定されたファイルが見つからなかった時の関数
function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('404 - Not Found\n「ページが見つかりません」');
}

// ステータスコード400: 未対応のメソッドが来た時の関数
function handleBadRequest(req, res) {
  res.writeHead(400, {
  'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('404 - BadRequest\n「未対応のメソッドです」')
}

// 関数のモジュール化
module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest
};
