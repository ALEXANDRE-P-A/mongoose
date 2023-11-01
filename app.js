const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();

(async _ => {
  await mongoose.connect(
    "mongodb+srv://atoviag:safada42@cluster0.kbno8nb.mongodb.net/suppier_information?retryWrites=true&w=majority",
  );

  if(mongoose.connection.readyState === 1)
    console.log('DBへの接続を完了しました。'); // 接続の確認
})();

app.get("/",(req, res) => {
  res.end("OK");
});

app.listen(PORT,_=>{
  console.log(`Application listening at http://127.0.0.1:${PORT}`);
});