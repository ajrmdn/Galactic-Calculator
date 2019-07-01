import { PlanetAge } from './sample-class.js';
import { DoomsDay } from './sample-class.js';


//test planet age -------------------
describe('should calculate age on planet', function () {
  it('Should test whether a users age on mercury changes to mercury age', function () {
    const planetAge = new PlanetAge(30);
    expect(planetAge.getMercuryAge(30)).toEqual(7);
  });

  // it('Should test whether a users age on venus changes to venus age', function () {
  //   const testPlanetAge = new age('30');
  //   expect(testPlanetAge.checkAge()).toEqual(18.6);
  // });
  //
  // it('Should test whether a users age on mars changes to mars age', function () {
  //   const testPlanetAge = new age('30');
  //   expect(testPlanetAge.checkAge()).toEqual('56.4');
  // });
  //
  // it('Should test whether a users age on jupiter changes to jupiter age', function () {
  //   const testPlanetAge = new age('30');
  //   expect(testPlanetAge.checkAge()).toEqual('355.8');
  // });
});
describe('should calculate how many years left on planet', function () {
  it('should test how many years a user has left on mercury', function() {
    const doomsDay = new DoomsDay(30, 77)
    expect(doomsDay.getMercuryYearsLeft(30,77)).toEqual(11)
  });

  it('should test how many years a user has left on venus', function() {
    const doomsDay = new DoomsDay(30, 77)
    expect(doomsDay.getVenusYearsLeft(30, 77)).toEqual(29)
  });










});





  ///=================

describe('should calculate how many years passed expectancy they have lived', function () {
  it('should test how many years passed life expectancy on mercury', function (){
    const yearsPassed = new DoomsDay(100, 77)
    expect(yearsPassed.getMercuryYearsLeft(100, 77)).toEqual(6)
  });




 });
