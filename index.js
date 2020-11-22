const express = require('express');
const mongoose = require('mongoose');
//const dotenv = require('dotenv');

//dotenv.config(); 
const app = express();
app.use("/static", express.static("public"));
mongoose.connect('mongodb://localhost/index')
app.use(express.urlencoded({ extended: true }));
const db = mongoose.connection;

app.set("view engine","ejs");

app.get('/',(req , res) => {
  res.render('todo.ejs');
  res.send('Use localhost:3000/api/tasks');
});

app.post('/',(req, res) => {
  console.log(req.body);
});

app.listen(3000, () => console.log("Server Up and running"));
