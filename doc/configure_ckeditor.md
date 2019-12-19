# Angularアプリケーション内のCKEditor (ClassicEditor) でSimpleUploadAdapterを使う

カスタムエディターを作らない場合のやり方。

## リポジトリをクローンする

適当なディレクトリを作りソースコードをダウンロードする。

```
$ git clone -b stable https://github.com/ckeditor/ckeditor5-build-classic.git
$ cd ckeditor5-build-classic
$ npm install
```

## SimpleUploadAdapterをインストールする

SimpleUploadAdapterが入っているckeditor5-uploadをプロジェクトに追加する。

```
$ npm install --save-dev @ckeditor/ckeditor5-upload
```

## ckeditor.jsを編集する

srcフォルダーのckeditor.jsを編集する。

やるべきことは以下の２点。

- SimpleUploadAdapterをインポート
- buildinPluginsにSimpleUploadAdapterを追加

```
...
...
// SimpleUploadAdapterをインポート
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
...

ClassicEditor.builtinPlugins = [
    ...
    ...
    SimpleUploadAdapter,
    ...
    ...

];
```

## 変更したClassicEditorをビルドする

以下のコマンドを実行するとbuildディレクトリに変更したCKEditorができる。

```
$ npm run build
```

Angularプロジェクトのディレクトリで以下のコマンドを実行してCKEditor関連のモジュールをインストールする。

```
$ npm install --save @ckeditor/ckeditor5-angular
$ npm install --save @ckeditor/ckeditor5-build-classic
```

## ビルドしてCKEditorでAngularプロジェクトにインストールしたCKEditorを置き換える

`node_modules/@ckeditor/ckeditor5-build-classic/build` の中身をビルドしたCKEditorで置き換える。

これでAngularアプリからCKEditorのSimple Upload Adapterによる画像アップロード機能が使用可能になる。

## AngularでCKEditorを使用する

MyComponent.ts
``` 
...
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
...

export class MyComponent {
  // CKEditorで編集したテキストを保存する変数
  data: string;
  // ClassicEditorインスタンス
  editor = ClassicEditor;
  // ClassicEditorのSimpleUploadAdapterを使う設定
  // uploadUrlはサーバー側のアップロードファイルの受け口
  editorConfig = {
    simpleUpload: {
      uploadUrl: 'http://localhost:3000/upload'
    }
  };

  ...
  ...
  ...
}
```

MyComponent.html
```
...
...

  <ckeditor 
    [editor]="editor" 
    [config]="editorConfig" 
    [(ngModel)]="data" 
    name="content">
  </ckeditor>

...
...
```

## アップロードの形式

CKEditorがサーバーにPOSTするデータはマルチパートのフォームデータでこんな形をしている。

```
------WebKitFormBoundary8uR1plzQUc5ZmcOU
Content-Disposition: form-data; name="upload"; filename="IMG_4929.jpg"
Content-Type: image/jpeg

...
```

## アップロードファイルを受け取るサーバー（Node.js）

Node.js (Express)にMulterとMongooseをインストールし、受け取ったファイルのデータをMongoDBのGridFSに保存する例。わかりやすさのためエラー処理などを省いたコードです。

server.js
```
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');

// MongoDBに接続
mongoose.connect(${MONGODB_URL}, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;

let gfs;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Database connected');
    // データベースに接続できたらGridFSBucketを用意する
    gfs = new mongoose.mongo.GridFSBucket(db.db, {
        bucketName: 'uploads'
    });
});

// GridFsStoreの用意
// この例ではcryptoを使ってランダムな文字列のファイル名を生成している
const storage = new GridFsStorage({
    url: config.db.uri,
    file: (req, file) => {
        return new Promise( (resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

// Multerミドルウエアの用意
const upload = multer({
    storage
});

const port = process.env.PORT || 3000;

...
...

// クライアントからPOSTされたアップロードデータを受ける部分

// MulterミドルウエアはFormDataのマルチパートコンテントの中から
// uploadを取り出してGridFSの保存する

// Multerミドルウエアを実行した後はrequestにfileプロパティが追加
// されているので、そこからfilenameを取り出す

// CKEditorのSimpleUploadAdapterの作法として、アップロードに成功
// した場合はアップロードしたファイルを取り出すためのURLを返すこ
// になっている

// サムネールなどの複数のサイズの画像のURLも返すことができる
// ページ最後の参考資料を参照のこと

app.post('/upload', upload.single('upload'), (req, res) => {
    const file = req.file;
    res.json({url: '/image/' + file.filename});
});

// 保存した画像ファイルをクライアントに送信する部分

app.get('/image/:filename', (req, res) => {
    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
});

...

app.listen(port, () => {
    console.log('Server started on port:',  port);
});


```
これでCKEditorからアップロードした画像ファイルがGridFSに保存され、CKEditor上にもその画像が表示されるはず。

## MongoDBに保存したデータを確認する

Mongo Shellから次のような方法で確認できる
```
use my_db

switched to db my_db

show collections
...
uploads.chunks
uploads.files
...

db.uploads.files.find()

{ "_id" : ObjectId("5df90b4c9356944f6a38b540"), "length" : 59052, "chunkSize" : 261120, "uploadDate" : ISODate("2019-12-17T17:07:24.006Z"), "filename" : "ecdb16926d031f343cea1f9531587eda.png", "md5" : "a6f18463cecb582df74817f9438f7b1c", "contentType" : "image/png" }
{ "_id" : ObjectId("5df97357993ba1442e382481"), "length" : 253211, "chunkSize" : 261120, "uploadDate" : ISODate("2019-12-18T00:31:19.985Z"), "filename" : "2c463853b8a759e513fda2252ed19c98.jpg", "md5" : "add8a5ce293ca071b402e15f4cacb55a", "contentType" : "image/jpeg" }
```

## 参考資料

[CKEditor -> Installing plugins](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html)

[CKEditor -> Simple upload adapter](https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html#server-side-configuration)

[MongoDB -> GridFS](https://docs.mongodb.com/manual/core/gridfs/index.html)