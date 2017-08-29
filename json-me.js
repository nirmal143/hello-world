var express = require('express');
var fs = require("fs");
var app = express();
app.set('json spaces', 0)
app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], 'utf8', function(err, data) {
    if (err) throw err;
    var out = JSON.parse(data);
    res.json(out)
  });

});

app.listen(process.argv[2]);