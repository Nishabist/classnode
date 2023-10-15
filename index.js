const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send({name:"nisha",caste:"bist"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 