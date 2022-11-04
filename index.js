const express = require("express")
const app = express()


app.disable('x-powered-by')
app.disable('server')
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
// app.enable("trust proxy");
// app.set("etag", false);

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about-us', (req, res) => {
  res.render('about-us')
})

app.get('/departments', (req, res) => {
  res.render('departments')
})

app.listen(5000, '0.0.0.0');

console.log('APPLICATION LIVE');