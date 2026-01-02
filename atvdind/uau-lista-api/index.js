const express = require('express')
const app = express()
const port = 3000
const response = {
    teste: "resposta"
}
app.get('/', (req, res) => {
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
