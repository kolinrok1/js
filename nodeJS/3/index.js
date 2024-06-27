const express = require('express')
const app = express()

const fs = require ("fs");
const path = require("path");
const pathFile = path.join(__dirname, "count.json");

const count = JSON.parse(fs.readFileSync(pathFile, 'utf8'));

app.get('/', function (req, res) {
    count.index ++;
    fs.writeFileSync(pathFile, JSON.stringify(count, null, 1));
  res.send(`
    <h1>Корневя страница</h1>
    <p>Число переходв ${count.index}</p>
    <a href='/about'>переход на about</a>`);

})

app.get('/about', function (req, res) {
    count.about ++;
    fs.writeFileSync(pathFile, JSON.stringify(count, null, 1));
  res.send(`
    <h1>Cтраница about</h1>
   <p> Число переходв ${count.about}</p>
    <a href='/'>переход на главную</a>`
  );

})


app.listen(3000)