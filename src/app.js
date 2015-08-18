function temperature(){
  document.getElementById('temp').innerHTML = thermostat.currentTemperature + "&#8451";
  document.getElementById('temp').style.color = thermostat.colourCode;
}
var thermostat = new Thermostat();
temperature();

document.getElementById('increaseTemp').onclick = function(){
  thermostat.increase();
  thermostat.colour();
  temperature();
}


document.getElementById('decreaseTemp').onclick = function(){
  thermostat.decrease();
  thermostat.colour();
  temperature();
}
