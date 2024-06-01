import Recipe from '../models/recipe.js';
import Step from '../models/step.js';
import sequelize from '../config/database.js';

export const createRecipe = async (req, res) => {
  const { title, description, steps } = req.body;
  const transaction = await sequelize.transaction();
  try {
    const recipe = await Recipe.create({ title, description }, { transaction });
    const stepPromises = steps.map((step, index) => Step.create({ order: index, description: step.description, recipeId: recipe.id }, { transaction }));
    await Promise.all(stepPromises);
    await transaction.commit();
    res.status(201).json(recipe);
  } catch (error) {
    await transaction.rollback();
    console.error('Error creating recipe:', error);
    res.status(500).send('Failed to create recipe');
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({ include: [{ model: Step, as: 'steps' }] });
    res.status(200).json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Failed to fetch recipes');
  }
};
