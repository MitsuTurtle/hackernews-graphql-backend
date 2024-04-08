// トークンを複合するための関数

// ユーザーIDを取得するための関数
function getUserId(req, authToken) {
  if (req) {
    // ヘッダを確認します。認証権限があります？かを確認する。
    const authHeader = req.headers.authorization;
    // 権限があるなら
    if (authHeader) {
      const token = authHeader.replace('Bearer', '');
      if (!token) {
        throw new Error('トークンが見つかりませんでした');
      }
      // そのトークンを複合する。
    }
  }
}