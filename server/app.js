const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer')

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 保存したいパス
    cb(null, './uploads')
  }
  ,
  filename: function (req, file, cb) {
    // アップロードしたときのファイル名で保存
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

const server = app.listen(5000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.post("/api/post", upload.single('file'), function(req, res, next){
  console.log('post')
  // console.log(req)

  // POSTされた画像の情報をJSONで取得
  const req_file_json = JSON.stringify(req.file)

  console.log(req_file_json)
  console.log(req.body)
  res.send('POST request to the homepage');
});

app.get("/api/get", function(req, res, next){
  console.log('get')
});