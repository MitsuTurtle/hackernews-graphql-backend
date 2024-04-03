const bcrypt = require('bcryptjs');

// ユーザーの新規登録のリゾルバ
async function signup(parent, args, context) {
  // パスワードの設定
  const password = await bcrypt.hash(args.password, 10);

  // ユーザー新規作成
  const user = await context.prisma.use.create({
    data: {
      ...args,
      password,
    },
  });
}
