import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {
	public id!: number;
	public name!: string;
	public readonly createdAt!: Date | null;
	public readonly updatedAt!: Date | null;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: new DataTypes.STRING(128),
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
		},
	},
	{
		tableName: 'Users',
		sequelize, // this bit is important
	},
);

export default User;
