var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
// This will display the main.styl content, not needed.
app.get(process.argv[3], function(req, res) {
  res.render('main');
});

app.listen(process.argv[2]);