//var {mongoose} = require('./db/mongoose');

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const geocode = require('./utils/geocode.js');
const conoise = require('./utils/co-noise.js');
const {thucHien} = require('./utils/luat.js');
const {giaiMo} = require('./utils/giaimo.js')

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
      }
    });
    socket.emit('sendLocation', 'abc');
  });

  socket.on('guiDuLieu', (params, callback) => {
    console.log(params);
    conoise.conoise(params.COinput, params.Ninput , (errorMessage, results) =>{
      if (errorMessage){
        console.log('Ko the doc duoc du lieu');
      } else {
        console.log(results);
        console.log(thucHien(results));
        console.log(giaiMo(thucHien(results)));
        socket.emit('sendLocation', giaiMo(thucHien(results)));
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
