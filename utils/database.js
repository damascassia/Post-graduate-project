import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'lgpd-databese',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamps: false
        }
    }
);

export default sequelize;
