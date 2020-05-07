import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { sequelize } from '../config/database';
import User from './user';

class Todo extends Model {
	public id!: number;
	public name!: string;
	public userId!: number;
	public readonly createdAt: Date | null;
	public readonly updatedAt: Date | null;
}

Todo.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: User,
				key: 'id',
			},
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
		tableName: 'Todos',
		sequelize, // this bit is important
	},
);

export default Todo;
