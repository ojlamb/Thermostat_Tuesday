describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has default temperatures', function() {
    it('default currentTemperature is 20', function() {
        expect(thermostat.temperature()).toEqual(20);
    });

    it('default maximumTemperature is 25', function() {
        expect(thermostat.maximumTemperature).toEqual(25);
    });
  });

  describe('increases the temperature', function() {
    it('can increase the temp by 1', function() {
      expect(thermostat.increase()).toEqual(21);
    });
  });

  describe('decreases the temperate', function() {
    it('can descrease the temp by 1', function() {
      expect(thermostat.decrease()).toEqual(19);
    });
  });

  describe('has a minimum temperature', function() {
    it('set to 10', function() {
      for(i=20; i>10; i--){thermostat.decrease()};
      expect(thermostat.decrease()).toEqual(10);
    });
  });

  describe('has a power save button', function() {
    it('set to On, maximum temperature is set to 25', function() {
      thermostat.powerSaveOn();
      for(i=20; i<25; i++){thermostat.increase()};
      expect(thermostat.increase()).toEqual(25);
    });

    it('set to On, current temp drops to 25 if above that level', function() {
      for(i=20; i<30; i++){thermostat.increase()};
      thermostat.powerSaveOn();
      expect(thermostat.currentTemperature).toEqual(25);
    });

    it('set to Off, maximum temperature is set to 32', function(){
        thermostat.powerSaveOff();
        for(i=20; i<32; i++){thermostat.increase()};
        expect(thermostat.increase()).toEqual(32);
    });
  });

  describe('has a reset button', function() {
    it('sets currentTemperature to 20', function(){
      thermostat.increase();
      thermostat.resetTemperature();
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('has a colour', function() {
    it('set to green if currentTemperature < 18', function(){
      for(i=20; i>16; i--){thermostat.decrease()};
      expect(thermostat.colour()).toEqual('green');
    });

    it('set to yellow if currentTemperature < 25 & >=18', function(){
      for(i=20; i>19; i--){thermostat.decrease()};
      expect(thermostat.colour()).toEqual('yellow');
    });

    it('set to red if currentTemperature >= 25', function(){
      for(i=20; i<28; i++){thermostat.increase()};
      expect(thermostat.colour()).toEqual('red');
    });
  });

});
