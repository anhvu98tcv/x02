var socket = io();

var locationButton = jQuery("#send-location");

locationButton.on('click', function (){
  if (!navigator.geolocation){
    return alert('Geolocation not support by your browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location ...');

  navigator.geolocation.getCurrentPosition( function(position) {
    locationButton.removeAttr('disabled').text('Send location');

    //alert("Kinh do" + position.coords.latitude + " Vi do "position.coords.longitude);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    $('#abc').append(`<p>${position.coords.latitude}</p>`);
    $('#abc').append(`<p>${position.coords.longitude}</p>`);
    socket.emit('CreateLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location');
  });
});

jQuery('#send-data-form').on('submit', function(e){
  e.preventDefault();

  var messageTextbox = jQuery('[name=location]');

  socket.emit('createLocation', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('');
  });
});

jQuery('#gui-du-lieu').on('submit', function(e){
  e.preventDefault();

  var COinput = jQuery('[name=nong-do-co]');
  var Ninput = jQuery('[name=tieng-on]');

  socket.emit('guiDuLieu', {
    COinput : COinput.val(),
    Ninput: Ninput.val()
  }, function () {
    COinput.val('');
    Ninput.val('');
  });
});

socket.on('sendLocation', function(location){
  console.log(location);
  $('#dia-diem-nhap').append(`<p>${location}</p>`);
});
