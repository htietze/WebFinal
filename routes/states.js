let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next){
    States.findAll({order: ['name']})
        .then( states => {
            return res.json(states)
        })
        .catch( err => next.err() )
})

router.get('/states/:name', function(req, res, next){
    States.findOne({ where: {name: req.params.name}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next.err() )
})

router.patch('/state/:name', function(req,res, next){
    States.update({ visited: req.body.visited }, { where: {
                name: req.params.name
            }
        })
        .then( rows => {
            if (rows) {
                return res.send('ok')
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next.err() )
})

module.exports = router