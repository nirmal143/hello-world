var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({
  extended: false
}))

// POST /form gets urlencoded bodies
app.post('/form', function(req, res) {
  //if (!req.body) return res.sendStatus(400)
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2]);