// GET /api/files/download/[id] - ファイルダウンロード
export default function handler(req, res) {
  const { method, query } = req;
  const { id } = query;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!id) {
    return res.status(400).json({ error: 'ファイルIDが必要です' });
  }

  // サンプルファイルデータ（実際のアプリケーションではファイルシステムやストレージから取得）
  const sampleFiles = {
    '1': {
      name: 'document.pdf',
      content: 'PDFファイルの内容（サンプル）',
      type: 'application/pdf'
    },
    '2': {
      name: 'image.jpg',
      content: '画像ファイルの内容（サンプル）',
      type: 'image/jpeg'
    },
    '3': {
      name: 'data.csv',
      content: '名前,年齢,住所\n田中太郎,30,東京\n佐藤花子,25,大阪',
      type: 'text/csv'
    }
  };

  const file = sampleFiles[id];

  if (!file) {
    return res.status(404).json({ error: 'ファイルが見つかりません' });
  }

  // ファイルをダウンロードとして提供
  res.setHeader('Content-Type', file.type);
  res.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);
  res.status(200).send(file.content);
}
