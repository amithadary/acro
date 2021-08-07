const express = require('express');
const path = require('path');

const app = express();
const api = require('./routes/api');
const sequelize = require('./config/sequelize.config');
const port = 3000;
const clientPath = path.resolve(__dirname + '/../client/dist/client');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', api);

app.use(express.static(clientPath));
app.use('/*', (req, res) => res.sendFile(`${clientPath}/index.html`));

sequelize.authenticate().then(() => {
  console.log('Connection to MySQL has been established successfully');
  app.listen(port, () => console.log(`Listening at http://127.0.0.1:${port}`));
})
.catch(err => {
  console.log('An error has occured trying to connect to MySQL:',err.message);
  console.log(err.stack);
})

process.on("unhandledRejection", err => {
  console.log('An unhandeled rejection has occured:', err.message);
  console.log(err.stack);
})