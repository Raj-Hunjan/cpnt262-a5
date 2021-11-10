/********************/
/* Connect to Atlas */
/********************/

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(() => {
          console.log('Connected to DB...');
      })
  .catch((err) => {
          console.log(err);
      });

  module.exports = mongoose // exports mongoose