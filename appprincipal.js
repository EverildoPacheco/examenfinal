const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home', {
            titulo: 'HOME'
  })
})
app.get('/electrico', (req, res) => {
  res.render('electrico');
});

app.get('/gasolina', (req, res) => {
  res.render('gasolina');
});

app.get('/diesel', (req, res) => {
  res.render('diesel');
});



app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

