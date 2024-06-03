import express from 'express'
import cors from 'cors'
import routes from './routes'
const PORT = 3333

const app = express()

const corsOptions = {
  origin: '*',
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, X-CSRF-Token, X-Api-Version',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes)

app.listen(3333, () => {
  console.log(`Server is running on port ${PORT} 🔥`);
})