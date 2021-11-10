const dotenv = require('dotenv').config();

const express = require('express')
const app = express()

const cars = require('./routes/api')

app.use('/api', cars)
app.use(express.static('public'))

/*************************************/
/* Handle 404 errors with middleware */
/*************************************/

app.use((req, res) => {

    // If path starts with `/api`, send JSON 404
    if (req.url.startsWith('/api')) {

      res.status(404)
      res.send({ error: 'File Not Found' })

    } else {

      // else send HTML 404
      res.status(404)
      res.send('<h1>404: File Not Found</h1>')

    }
  });

/*****************/
/* Start server */
/****************/

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  });

