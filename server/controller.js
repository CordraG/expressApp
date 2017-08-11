var hbase = require('hbase');
var client = hbase({
    host: '200.13.4.216',
    port: '32769'
});

exports.hbaseController = function (req, res) {
    var inicio = req.query.idmin;
    var fin = req.query.idmax;

    client
        .table('data')
        .scan({
            startRow:   "1",
            endRow:     "9",
            //startRow: "serv_salud01"
            maxVersions: 1
        }, function (err, rows){
            if(err)res.send(err);
            console.log(res.json(rows));
        });
}