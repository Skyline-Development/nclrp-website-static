const express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.enable("trust proxy");
app.set("etag", false);

function customHeaders(req, res, next) {
  app.disable('x-powered-by');

  res.setHeader('X-Powered-By', 'NCLRP V2.9');

  next();
}

app.use(customHeaders);

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