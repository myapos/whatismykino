const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 2345;

app.use(cors());

app.get("/", (req, res) => {
  console.log("empika mre");
  const msg = {
    hello: "Hello World"
  };
  res.send(msg);
});

// getKinos and parse request variables
app.get("/getKinos", (req, res) => {
  // console.log('request params', req.query);
  const { date } = req.query;

  // console.log('date:', date);
  // const apiUrl = `https://api.opap.gr/draws/v3.0/1100/draw-date/${date}/${date}?page=${page}`;
  const apiUrl = `https://applications.opap.gr/DrawsRestServices/kino/drawDate/${date}.json`;

  // console.log(apiUrl);
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      // res.redirect('/error');
      console.log("error:", err);
    });
  // const msg = {
  //   'hello': 'Hello World',
  // };
  // res.send(msg);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
