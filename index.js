const express = require('express')
const app = express()
const { dateObj } = require('./src/utils')

const PORT = 5000

app.get('/', (req, res) => {
  const date = dateObj(new Date())
  res.send('Date - ' + date.month + ' ' + date.date + ', ' + date.year)
})

app.listen(PORT, () => console.log('Server started @' + PORT))
