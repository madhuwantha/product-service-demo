import express from 'express'
import mongoose from 'mongoose'
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000
const uri = process.env.MONOGODB_URL|| ""

mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.log(err)
})


import productRoutes from './routes/productRoutes'

app.use('/api/products', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
