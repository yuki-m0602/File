// DELETE /api/files/delete/[id] - ファイル削除
export default function handler(req, res) {
  const { method, query } = req;
  const { id } = query;

  if (method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!id) {
    return res.status(400).json({ error: 'ファイルIDが必要です' });
  }

  // サンプルファイルIDのチェック
  const validIds = ['1', '2', '3'];

  if (!validIds.includes(id)) {
    return res.status(404).json({ error: 'ファイルが見つかりません' });
  }

  // 実際のアプリケーションではここでファイルを削除
  // 例: await deleteFileFromStorage(id);
  
  res.status(200).json({
    message: `ファイルID ${id} が削除されました`,
    deletedAt: new Date().toISOString()
  });
}
