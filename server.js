const express = require('express')
const bodyParser = require("body-parser")
const fs = require('fs');
//express app
const app = express()
//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
//route
const routes = require('./routes/user.route')
app.use('/', routes)
app.get('/', (req, res) => {
  res.send('')
})
//start server
app.listen(3000, () => {
    console.log('Listening')
});

//endpoints
app.get("/", (req, res) => {
  res.send("server up");
});
app.use('/api/users',routes)