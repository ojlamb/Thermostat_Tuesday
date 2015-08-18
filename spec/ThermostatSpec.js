describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a temperature', function() {
    it('default is 20', function() {
        expect(thermostat.temperature()).toEqual(20);
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
    });

  });
});
