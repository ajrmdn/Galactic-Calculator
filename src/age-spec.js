import { PlanetAge } from './sample-class.js';
describe('calculator', function () {

  //test planet age -------------------
  it('Should test whether a users age on mercury changes to mercury years', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual(7.2);
  });

  it('Should test whether a users age on venus changes to venus years', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual(18.6);
  });

  it('Should test whether a users age on mars changes to mars years', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual('56.4');
  });

  it('Should test whether a users age on jupiter changes to jupiter years', function () {
    const testPlanetAge = new age('30');
    expect(testPlanetAge.checkAge()).toEqual('355.8');
  });
