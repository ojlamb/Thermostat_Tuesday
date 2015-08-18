describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a temperature', function(){
    it('default is 20', function(){
        expect(thermostat.temperature()).toEqual(20);
    });

    describe('increases the temperature', function(){
      it('can increase the temp by 1', function(){
        expect(thermostat.increase()).toEqual(21);
      });
    });

    describe('decreases the temperate', function(){
      it('can descrease the temp by 1', function(){
        expect(thermostat.decrease()).toEqual(19);
      });
    });

  });
});
