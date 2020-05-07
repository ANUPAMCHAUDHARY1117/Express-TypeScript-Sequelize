import dotenv from 'dotenv';
import express, { Router } from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { sequelize } from './config/database';
import router from './routes/index';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
sequelize
	.authenticate()
	.then(async () => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../src/views'));
app.use(express.static(path.join(__dirname, '../src/public'), { maxAge: 31557600000 }));
app.engine(
	'hbs',
	exphbs({
		defaultLayout: 'index',
		extname: 'handlebars',
		layoutsDir: path.join(__dirname, '../src/views/layouts'),
		partialsDir: path.join(__dirname, '../src/views/partials'),
	}),
);
app.use('/', router);
app.listen(process.env.PORT, () => {
	console.log(`Server started at ${process.env.PORT}`);
});
