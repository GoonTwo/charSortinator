const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})