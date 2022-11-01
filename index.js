const express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.enable("trust proxy");
app.set("etag", false);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about-us', (req, res) => {
  res.render('about-us')
})

app.get('/departments', (req, res) => {
  res.render('departments')
})

app.listen(PORT || 8080, '0.0.0.0');

console.log('APPLICATION LIVE ON: http://192.168.1.16:8080');