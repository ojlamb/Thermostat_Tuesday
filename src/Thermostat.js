var Thermostat = function(){
  this.currentTemperature = 20;
  this.maximumTemperature = 25;
  this.minimumTemperature = 10;
};

Thermostat.prototype.temperature = function() {
  return this.currentTemperature;
};

Thermostat.prototype.increase = function() {
  if (this.currentTemperature < this.maximumTemperature){
    return this.currentTemperature+=1;
  }
  return this.currentTemperature;
};

Thermostat.prototype.decrease = function() {
  if (this.currentTemperature === this.minimumTemperature){
    return this.currentTemperature;
  }
  return this.currentTemperature-=1;
};

Thermostat.prototype.powerSaveOn = function() {
  this.maximumTemperature = 25;
};

Thermostat.prototype.powerSaveOff = function() {
  this.maximumTemperature = 32;
};

Thermostat.prototype.resetTemperature = function() {
  this.currentTemperature = 20
};

Thermostat.prototype.colour = function() {
  if(this.currentTemperature < 18){
    return 'green'
  }
  else if (this.currentTemperature < 25) {
    return 'yellow'
  }
  else {
    return 'red'
  }
};
