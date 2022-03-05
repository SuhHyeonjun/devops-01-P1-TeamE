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

const exampleRouter = require(`../routes/example`);
const votedResultRouter = require('../routes/voted_result');
const voteRouter = require(`../routes/vote`);
const registerRouter = require(`../routes/register`);
const quizRouter = require(`../routes/quiz`);
const choiceRouter = require(`../routes/choice`);
const mongoConnect = require('../model');

mongoConnect();                              // mongoDB 연결
app.use(`/example`, exampleRouter);          // http://localhost:4000/example
app.use(`/voted_result`, votedResultRouter); // http://localhost:4000/voted_result
app.use(`/vote`, voteRouter);                // http://localhost:4000/vote
app.use(`/register`, registerRouter);        // http://localhost:4000/register
app.use(`/quiz`, quizRouter);                // http://localhost:4000/quiz
app.use(`/choice`, choiceRouter);            // http://localhost:4000/choice

app.get(`/`, (req, res) => { // http://localhost:4000/, 서버 동작 확인
  try {
    return res
      .status(200)
      .sendFile(`${__dirname}/server_status.html`)
  }
  catch(error) {
    return res
      .status(500)
      .sendFile(`${__dirname}/server_error.html`)
  }
});

app.listen(port, ip, () => {
  console.log(`Begin to run Server time : ${new Date()}\n Server listening on http://${ip}:${port}`)
});
