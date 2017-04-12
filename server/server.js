//var {mongoose} = require('./db/mongoose');

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const geocode = require('./utils/geocode.js');

var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname,'../public');

//hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(publicPath));

io.on('connection' , (socket) => {
  console.log('New user connected');

  //socket.on(CreateLocationMessage)
  socket.on('createLocation',  (params, callback) =>{

    geocode.geocodeAddress(params.text, (errorMessage, results) => {
      if (errorMessage){
        console.log('Khong the ket noi den server');
      } else {
        console.log(`Dia chi : ${results.diachi}`);
        console.log(`Kinh do :${results.kinhdo} `);
        console.log(`Vi do: ${results.vido}`);
        // weather.getWeather(results.kinhdo, results.vido, (errorMessage,results) => {
        //   if (errorMessage){
        //     console.log('Khong the ket noi den server');
        //   } else {
        //     console.log(`Nhiet do hien tai lai la ${results.nhietdo}`);
        //   }
        // });
      }
    });
    socket.emit('sendLocation', 'abc');
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
