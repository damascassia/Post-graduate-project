import { DataTypes } from "sequelize"; 
import sequelize from "../utils/database";

const Course = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {underscored: true});

export default Course;