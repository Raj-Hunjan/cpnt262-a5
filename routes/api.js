const cars = require("../data/cars")
// Define seed data
// Your data here

  
  // Dynamic JSON Endpoint
  app.get('/api/cars', (req, res) => {
          res.send(cars);
      })
  
  app.get('/api/cars/:id', (req, res) => {
          const foundCar = 'Array.find()'; // Use Array.find() here
          res.send(foundCar);
      })

