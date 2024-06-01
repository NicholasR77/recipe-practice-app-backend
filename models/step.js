import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Recipe from './recipe.js';

const Step = sequelize.define('Step', {
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

Recipe.hasMany(Step, { foreignKey: 'recipeId', as: 'steps' });
Step.belongsTo(Recipe, { foreignKey: 'recipeId' });

export default Step;
