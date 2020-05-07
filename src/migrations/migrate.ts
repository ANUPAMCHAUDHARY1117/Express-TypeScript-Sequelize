import models from '../models/index';

const migrate = () => {
	for (const model of models) {
		model.sync({ alter: true });
	}
};

migrate();
