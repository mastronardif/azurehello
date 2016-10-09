var express = require('express');
var app = express();
var port = process.env.port || 1337

app.get('/', function (req, res) {
    var results = "";
    results += 'Hello Azure World!<b>Moving the project forward.</b><br/>';
    results += '<br/> "$azure"/azure help';
    results += '<br/> "$azure"/azure list';
    results += '<br/> "$azure"/azure --version';
    results += '<br/> "$azure"/azure config mode asm';
    results += '<br/> "$azure"/azure login';    
    results += '<br/>__________________';
    
    results += '<br/> "$azure"/azure site create --git --location \'South Central US\' whatthefuck102';
    results += '<br>$git push azure master';
    
    results += '<br/>__________________';
    results += '<br>$git remote -v';
    results += '<br>$git add .';
    results += '<br>$git commit .';
    results += '<br>$git push origin master';    
    results += '<br>$git push azure master';
       

    res.send(results);

});

app.get('/asswipe', function (req, res) {
    res.send('<h1>ass wipe</h1>');
});


var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});