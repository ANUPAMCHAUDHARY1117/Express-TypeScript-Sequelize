import models from '../models/index';
import { sequelize } from '../config/database';

const undoMigrations = async () => {
	for (const model of models) {
		const result = await sequelize.drop();
		if (result.length > 0 && model) {
			break;
		}
	}
};

undoMigrations();
