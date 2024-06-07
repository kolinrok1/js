const http = require("http");
let countAbout = 0;
let count = 0;
const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    if (req.url === "/"){
        count++;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end (`
            <a href='/about'>переход на about</a>
            <p> Количесво посещений этой страници ${count}</p>
            `);
    } else if (req.url === "/about"){
        countAbout++;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end (`
            <p>страница About</p>
            <a href='/'>переход на главнуюt</a>
            <p> Количесво посещений этой страници ${countAbout}</p>
            `);
    }else{
        res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end (`
            page not found
            `);
    }

});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на ${port}`);
});