import { ErrorHandler } from '@errors/error-handler'
import { productsRouter } from '@routes/products'
import express from 'express'

const app = express()

app.use(express.json())

app.use('/products', productsRouter)

app.use(ErrorHandler.handle)

app.listen(process.env.PORT || 3333, () => {})
