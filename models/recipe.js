// models/recipe.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Recipe = sequelize.define('Recipe', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  metadata: {
    type: DataTypes.HSTORE, // Using hstore type for metadata
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default Recipe;
