// POST /api/files/upload - ファイルアップロード
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // multipart/form-dataの処理
    const formData = await req.formData();
    const file = formData.get('file');
    
    if (!file) {
      return res.status(400).json({ error: 'ファイルが選択されていません' });
    }

    // ファイル情報を取得
    const fileInfo = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    };

    // ファイルの内容を読み取り（実際のアプリケーションでは外部ストレージに保存）
    const buffer = await file.arrayBuffer();
    
    // ここではファイル情報のみを返す（実際の保存は外部ストレージで行う）
    res.status(200).json({
      message: 'ファイルがアップロードされました',
      fileInfo: fileInfo,
      size: buffer.byteLength,
      uploadedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'ファイルアップロードに失敗しました' });
  }
}
