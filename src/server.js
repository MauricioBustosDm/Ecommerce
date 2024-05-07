import express from 'express';
import path from 'path';
import morgan from 'morgan'
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/example', (req, res) => {
  res.render('pages/example');
});

export default app;
