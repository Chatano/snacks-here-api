import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from snacks-here-api' })
})

app.listen(process.env.PORT || 3333, () => {})
