var express = require('express');
var app = express();
var port = process.env.port || 1337

app.get('/', function (req, res) {
    res.send('Hello Azure World!<b>Holy funcking shit it wok.</b>');
});

app.get('/asswipe', function (req, res) {
    res.send('<h1>ass wipe</h1>');
});


var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});