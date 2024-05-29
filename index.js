import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import sequelize from './config/database.js';
import Recipe from './models/recipe.js';

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/recipes', async (req, res) => {
  try {
    const { title, description } = req.body;

    const recipe = await Recipe.create({ title, description });

    res.status(201).json(recipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).send('Failed to create recipe');
  }
});

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected and models synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
