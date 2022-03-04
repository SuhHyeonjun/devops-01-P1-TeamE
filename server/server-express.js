const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

require(`dotenv`).config();
app.use(express.json({"strict":false}));
app.use(express.static(`../client`));
app.use(cors());
app.use(morgan('dev'));

const ip = process.env.HOST_IP;
const port = process.env.HOST_PORT;

const votedResult = require('../routes/voted_result');
const usersRouter = require(`../routes/users`);
const dbRouter = require(`../db_connect/dbconn`);

app.use(`/`, dbRouter);
app.use(`/voted_result`, votedResult);
app.use(`/users`, usersRouter);

app.listen(port, ip, () => {
  console.log(`Server listening on http://${ip}:${port}`)
});
