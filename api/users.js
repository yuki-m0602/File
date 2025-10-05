// GET /api/users - ユーザー一覧を取得
// POST /api/users - 新しいユーザーを作成
export default function handler(req, res) {
  const { method } = req;

  // サンプルデータ
  let users = [
    { id: 1, name: '田中太郎', email: 'tanaka@example.com' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com' }
  ];

  switch (method) {
    case 'GET':
      res.status(200).json({
        users: users,
        count: users.length
      });
      break;

    case 'POST':
      const { name, email } = req.body;
      
      if (!name || !email) {
        res.status(400).json({
          error: '名前とメールアドレスが必要です'
        });
        return;
      }

      const newUser = {
        id: users.length + 1,
        name: name,
        email: email
      };

      users.push(newUser);

      res.status(201).json({
        message: 'ユーザーが作成されました',
        user: newUser
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ error: `Method ${method} not allowed` });
      break;
  }
}
