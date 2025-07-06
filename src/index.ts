import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


const app = express()
app.use(express.json());
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000
const uri = process.env.MONOGODB_URL|| ""

mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.log(err)
})


import productRoutes from './routes/productRoutes'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
