import express from 'express'
import cors from 'cors'
import routes from './routes'
const PORT = 3333

const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://sevn-monorepo-web.vercel.app'
  ]
}));

app.use(express.json());
app.use(routes)

app.listen(3333, () => {
  console.log(`Server is running on port ${PORT} 🔥`);
})