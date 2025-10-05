// GET /api/hello
export default function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({
      message: 'こんにちは！Vercelサーバーです',
      timestamp: new Date().toISOString(),
      method: method
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
