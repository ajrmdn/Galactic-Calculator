import { PlanetAge } from './../src/sample-class.js';
import { DoomsDay } from './../src/sample-class.js';


//test planet age -------------------
describe('should calculate age on planet', function () {
  it('Should test whether a users age on mercury changes to mercury age', function () {
    const planetAge = new PlanetAge(30);
    expect(planetAge.getMercuryAge(30)).toEqual(7);
  });

  it('Should test whether a users age on venus changes to venus age', function () {
    const planetAge = new PlanetAge(30);
    expect(planetAge.getVenusAge(30)).toEqual(18);
  });

  it('Should test whether a users age on mars changes to mars age', function () {
    const planetAge = new PlanetAge(30);
    expect(planetAge.getMarsAge(30)).toEqual(56);
  });

  it('Should test whether a users age on jupiter changes to jupiter age', function () {
    const planetAge = new PlanetAge(30);
    expect(planetAge.getJupiterAge(30)).toEqual(355);
  });
});

//test dooms day age -----------------
describe('should calculate how many years left on planet', function () {
  it('should test how many years a user has left on mercury', function() {
    const doomsDay = new DoomsDay(30, 77);
    expect(doomsDay.getMercuryYearsLeft(30,77)).toEqual(11);
  });

  it('should test how many years a user has left on venus', function() {
    const doomsDay = new DoomsDay(30, 77);
    expect(doomsDay.getVenusYearsLeft(30, 77)).toEqual(29);
  });

  it('should test how many years a user has left on mars', function() {
    const doomsDay = new DoomsDay(30, 77);
    expect(doomsDay.getMarsYearsLeft(30, 77)).toEqual(89);
  });

  it('should test how many years a user has left on jupiter', function() {
    const doomsDay = new DoomsDay(30, 77)
    expect(doomsDay.getJupiterYearsLeft(30, 77)).toEqual(557)
  });
});

// test life expectancy ---------------
describe('should calculate how many years passed expectancy they have lived', function () {
  it('should test how many years passed life expectancy on mercury', function (){
    const yearsPassed = new DoomsDay(100, 77)
    expect(yearsPassed.getMercuryYearsLeft(100, 77)).toEqual(6)
  });

  it('should test how many years passed life expectancy on venus', function (){
    const yearsPassed = new DoomsDay(100, 77)
    expect(yearsPassed.getVenusYearsLeft(100, 77)).toEqual(14)
  });

  it('should test how many years passed life expectancy on mars', function (){
    const yearsPassed = new DoomsDay(100, 77)
    expect(yearsPassed.getMarsYearsLeft(100, 77)).toEqual(43)
  });

  it('should test how many years passed life expectancy on jupiter', function (){
    const yearsPassed = new DoomsDay(100, 77)
    expect(yearsPassed.getJupiterYearsLeft(100, 77)).toEqual(273)
  });
 });
