const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));

app.get("/", (req,res) => {
    res.sendFile("C:/Users/hadeelsafadi/Desktop/webapp/weather/weather.html");
});
app.get("/", (req,res) => {
    res.sendFile("C:/Users/hadeelsafadi/Desktop/webapp/weather/weather.css");
});
app.get("/", (req,res) => {
    res.sendFile("C:/Users/hadeelsafadi/Desktop/webapp/weather/weather.js");
});



app.listen(8000, () => console.log('Server run on port 8000!'));
