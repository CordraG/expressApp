var express = require('express');
var app = express();

var hbase = require('hbase');
var client = hbase({
    host: '200.13.4.216',
    port: '32769'
});

app.use(express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
require('./server/routes.js')(app);

app.listen(8081, '127.0.0.1');
console.log('up');