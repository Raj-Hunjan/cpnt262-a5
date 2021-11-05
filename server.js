const express = require('express')
const app = express()

require('../data/cars')
require('../routes/api')


// Start server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  });

// Handle 404 errors with middleware
app.use((req, res) => {
    res.status(404)
    res.send('404: File Not Found')
  })