const cars = require("../models/cars")
const express = require('express')
const router = express.Router()

/*****************/
/* Define routes */
/*****************/

// List entry route
router.get('/cars', (req, res) => {

    if (typeof cars !== 'undefined' && Array.isArray(cars)) {
      // Variable is an array!
      res.send(cars)
    } else {
      res.status(404)
      res.send({ error: 'File Not Found' })
    }

  })

// Item route
router.get('/cars/:id', (req, res) => {
    let carRandom

    if (typeof cars !== 'undefined' && Array.isArray(cars)) {
      carRandom = cars.find(item => Number(req.params.id) === item.id) // Use Array.find() here
    } else {
      carRandom = null
    }

    if (typeof carRandom === 'object' && carRandom !== null) {
      res.send(carRandom)
    } else {
      res.status(404)
      res.send({ error: 'File Not Found' })
    }
  })


   module.exports = router   
