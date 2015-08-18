var Thermostat = function(){
  this.currentTemperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this.currentTemperature;
};

Thermostat.prototype.increase = function() {
  return this.currentTemperature+=1;
};

Thermostat.prototype.decrease = function() {
  return this.currentTemperature-=1;
};
