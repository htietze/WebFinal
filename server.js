let express = require('express')
let bodyParser = require('body-parser')
let states_api = require('./routes/states.js')
let path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParser.json())

app.use('/api', states_api)

// error handlers, for not found and app errors
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

// start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})