function temperature(){
  document.getElementById('temp').innerHTML = thermostat.currentTemperature+"&#8451";
  document.getElementById('temp').style.color = thermostat.colourCode;
};
var thermostat = new Thermostat();
temperature();

$(document).ready(function() {
  $("#increaseTemp").click(function(){
    thermostat.increase();
    thermostat.colour();
    temperature();
  });

  $("#decreaseTemp").click(function(){
    thermostat.decrease();
    thermostat.colour();
    temperature();
  });

  $("#radioOn").click(function() {
      thermostat.powerSaveOn();
      thermostat.colour();
      temperature();
    });

  $("#radioOff").click(function() {
      thermostat.powerSaveOff();
      thermostat.colour();
      temperature();
    });
});
