const cars = require("../data/cars")

  
/*****************/
/* Define routes */
/*****************/

// List entry route
// TODO: refactor for arrow functions so we look fashionable
app.get('/api/cars', (req, res) => {
  let carRandom = null;

  // TODO: Add support for `?filter=poisoned` and return all cars members that have `poisoned` set to true
  if (req.query.filter === 'random') {   

    carRandom = randomItem(cars)
    res.send(carRandom)

  } else if (typeof cars !== 'undefined' && Array.isArray(cars)) {

    // Variable is an array!
    res.send(cars)

  } else {

    res.status(404)
    res.send({error: 'File Not Found'})
    
  }

})

// Item route
app.get('/api/cars/:id', (req, res) => {
  let vehicle

  if (typeof cars !== 'undefined' && Array.isArray(cars)) {
    vehicle = cars.find(item => req.params.id === item.id) // Use Array.find() here
  } else {
    vehicle = null;
  }
  
  if (typeof vehicle === 'object' && vehicle !== null) {
    res.send(vehicle)
  } else {
    res.status(404)
    res.send({error: 'File Not Found'})
  }
})


      
