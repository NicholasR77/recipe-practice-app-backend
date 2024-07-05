import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/database.js';
import recipeRoutes from './routes/recipes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/recipes', recipeRoutes);

app.listen(port, '0.0.0.0', async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Synchronize all models with the database
    console.log('Database connected and models synchronized');
    console.log('Server is running');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

