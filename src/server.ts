import { productsRouter } from '@routes/products'
import express from 'express'

const app = express()

app.use(express.json())
app.use(productsRouter)

app.listen(process.env.PORT || 3333, () => {})
