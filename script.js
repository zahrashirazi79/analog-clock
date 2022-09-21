
var  seconds = document.querySelector('.s');
var  minutes = document.querySelector('.m');
var  hour = document.querySelector('.h');

function setDate() {
  var  now = new Date();
  var sec = now.getSeconds();
  var secondsDegrees = sec * 6;
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;
  var mins = now.getMinutes();
  var minsDegrees = mins * 6;
  minutes.style.transform = `rotate(${minsDegrees}deg)`;
  var hr = now.getHours();
  var hourDegrees = (hr * 30) + (mins * 6) / 12;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();