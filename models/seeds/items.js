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

module.exports = arrayOfCars

