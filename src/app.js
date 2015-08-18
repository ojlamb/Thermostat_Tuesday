function temperature(){
  document.getElementById('temp').innerHTML = thermostat.currentTemperature+"&#8451";
  document.getElementById('temp').style.color = thermostat.colourCode;
};
var thermostat = new Thermostat();
temperature();

document.getElementById('increaseTemp').onclick = function(){
  thermostat.increase();
  thermostat.colour();
  temperature();
};


document.getElementById('decreaseTemp').onclick = function(){
  thermostat.decrease();
  thermostat.colour();
  temperature();
};

var radioElements = document.getElementsByName("powerSave");
radioElements[0].onclick = function(){
  if(radioElements[0].checked){
    thermostat.powerSaveOn();
    thermostat.colour();
    temperature();
  }
};
radioElements[1].onclick = function(){
if(radioElements[1].checked){
    thermostat.powerSaveOff();
    thermostat.colour();
    temperature();
  }
};
