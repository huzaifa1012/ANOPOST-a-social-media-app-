import express from "express"
const app = express()
const port = 3000
import path from 'path';
import cors from "cors"

app.use(cors())

//This one is getting simple html file 
// const __dirname = path.resolve()
// app.use('/', express.static(path.join(__dirname, '/client')))

//This one is getting react build File  
const __dirname = path.resolve()
app.use('/', express.static(path.join(__dirname, '../Client/anopost/dist/')))




app.get('/contact', (req, res) => {
  res.send('Hello World!')
})

app.get('/first', (req, res) => {
  res.send({ data: 'abc' })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})