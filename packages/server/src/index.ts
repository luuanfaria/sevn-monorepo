import express from 'express'
import cors from 'cors'
import routes from './routes'
const PORT = 3333

const app = express()

const allowedOrigins = [
  'http://localhost:3000',
  'https://sevn-monorepo-web.vercel.app'
];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());
app.options('*', cors(corsOptions));
app.use(routes)

app.listen(3333, () => {
  console.log(`Server is running on port ${PORT} 🔥`);
})