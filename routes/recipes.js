import express from 'express';
import { createRecipe, getAllRecipes } from '../controllers/recipes.js';

const router = express.Router();

router.post('/', createRecipe);

router.get('/', getAllRecipes);

export default router;
