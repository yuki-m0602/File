// GET /api/files/list - ファイル一覧を取得
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // サンプルファイル一覧（実際のアプリケーションではデータベースから取得）
  const files = [
    {
      id: 1,
      name: 'document.pdf',
      size: 1024000,
      type: 'application/pdf',
      uploadedAt: '2024-01-15T10:30:00Z',
      url: '/api/files/download/1'
    },
    {
      id: 2,
      name: 'image.jpg',
      size: 512000,
      type: 'image/jpeg',
      uploadedAt: '2024-01-15T11:45:00Z',
      url: '/api/files/download/2'
    },
    {
      id: 3,
      name: 'data.csv',
      size: 256000,
      type: 'text/csv',
      uploadedAt: '2024-01-15T14:20:00Z',
      url: '/api/files/download/3'
    }
  ];

  res.status(200).json({
    files: files,
    count: files.length,
    totalSize: files.reduce((sum, file) => sum + file.size, 0)
  });
}
