import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST || 'postgres-service-new',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres',
});

export default sequelize;
