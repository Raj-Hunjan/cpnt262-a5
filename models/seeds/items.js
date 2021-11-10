const mongoose = require('mongoose')

/*****************/
/* Define Schema */
/*****************/

const carsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  linkURL: String,
  credit: String,
  creditURL: String,
})

/*****************/
/* Compile Model */
/*****************/

const arrayOfCars = mongoose.model('array-of-cars', carsSchema)


const myFind = async () => {
  const vehicles = await arrayOfCars.find()
  console.log(vehicles)
}

myFind()

/****************/
/* Request Data */
/****************/



const myFindOne = async () => {
  const Vehicle = await arrayOfCars.findOne({id: req.params.id = Number})
  console.log(Vehicle)
}

myFindOne(1)
