const request = require('request');

var geocodeAddress = (address, callback) => {
  var endcodedAddress = encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${endcodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Khong ket noi duoc voi server google map');
    } else if (body.status === 'ZERO_RESULTS'){
      callback('Khong ket tim thay dia chi');
    } else if (body.status === 'OK'){
      callback(undefined,{
        diachi: body.results[0].formatted_address,
        kinhdo: body.results[0].geometry.location.lat,
        vido: body.results[0].geometry.location.lng,
      });
    }
  });

};

module.exports.geocodeAddress = geocodeAddress;
