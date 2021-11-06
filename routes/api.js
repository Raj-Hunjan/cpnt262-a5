const cars = require("../data/cars")

  
  // Dynamic JSON Endpoint
app.get('/api/cars', (req, res) => {
  res.send(cars);
})

app.get('/api/cars/:id', (request, response) => {

    const carRandom = cars.find((item) => {
      if (request.params.id === item.id) {
        return true;
      } else {
        return false;
      }
    }); // Use Array. find() here
    res.send(carRandom);
  })


      
