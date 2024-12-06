import express from 'express'

export const server = express();

server.get('/', (req, res) => {
  res.json({ message: 'Hello from snacks-here-api' });
})

server.listen(process.env.PORT || 3333, () => {
  console.log(`🌳 Server is Running!!`);
});