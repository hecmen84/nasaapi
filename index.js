const  express = require('express');
const  bodyParser = require('body-parser');

//import registerRouter from './routes/api/users/register.js';


const app = express();

//app.use(bodyParser.json());

//app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './index')


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));



//routes for rendering pages .ejs
app.get('/', (req, res)=> {
 res.render('welcome');
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running successfully `);
});
