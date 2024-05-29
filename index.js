import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World 5!');
});

app.post('/recipes', (req, res) => {
  console.log("🚀 ~ app.get ~ req:", req.body)
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
