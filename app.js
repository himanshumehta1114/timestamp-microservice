const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Server is up on port : ${port}`);
});
