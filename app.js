const express = require('express');
const moment = require('moment');
var app = express();
const port = process.env.PORT || 3000;


app.get('/:userDate', (req,res) => {
  var date = req.params.userDate;
  if(/^\d{10}$/.test(date)){
    date = moment(date, 'X');
  }else{
    date = moment(date, 'MMMM DD YYYY');
  }
  if(date.isValid()){
    res.json({
      'unix' : date.format('X'),
      'natural' : date.format('MMMM DD YYYY')
    });
  }else{
    res.json({
      'unix' : null,
      'natural' : null
    });
  };
});

app.listen(port, () => {
  console.log(`Server is up on port : ${port}`);
});
