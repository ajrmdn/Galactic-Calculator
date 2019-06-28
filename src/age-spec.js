import { PlanetAge } from './sample-class.js';
describe('calculator', function () {
import { DoomsDay } from './sample-class.js';
describe('calculator', function () {

//test planet age -------------------
  it('Should test whether a users age on mercury changes to mercury age', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual(7.2);
  });

  it('Should test whether a users age on venus changes to venus age', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual(18.6);
  });

  it('Should test whether a users age on mars changes to mars age', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual('56.4');
  });

  it('Should test whether a users age on jupiter changes to jupiter age', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual('355.8');
  });

//test death age -------------------
  it('Should test the age a user will die on mercury', function () {
  const testDoomsDay = new death('30');
  expect(testDoomsDay.checkYears()).toEqual('0');
});
