export class PlanetAge {
  constructor(age) {
    this.age = age;
    this.mercuryAge = this.getMercuryAge(age);
    this.venusAge = this.getVenusAge(age);
    this.marsAge = this.getMarsAge(age);
    this.jupiterAge = this.getJupiterAge(age);
  }

  getMercuryAge(age) {
    return Math.floor(age * 0.24);
  }

  getVenusAge(age) {
    return Math.floor(age * 0.62);
  }

  getMarsAge(age) {
    return Math.floor(age * 1.88);
  }

  getJupiterAge(age) {
    return Math.floor(age * 11.86);
  }
}

export class DoomsDay {
  constructor(ageInput, lifeExpectancyInput) {
    this.lifeExpectancy = lifeExpectancyInput;
    this.age = ageInput;
    this.mercuryYearsLeft = this.getMercuryYearsLeft(ageInput, lifeExpectancyInput);
    this.venusYearsLeft = this.getVenusYearsLeft(ageInput, lifeExpectancyInput);
    // this.marsYearsLeft = this.getMarsYearsLeft(ageInput, lifeExpectancyInput);
    //
    // // this.jupiterYearsLeft = this.getJupiterYearsLeft(ageInput, lifeExpectancyInput);
  }

  getMercuryYearsLeft(ageInput, lifeExpectancyInput) {
    const mercuryExpectancy = Math.round(lifeExpectancyInput * 0.24);
    const mercuryAge = Math.round(ageInput * 0.24);
    const yearsLeft = mercuryExpectancy - mercuryAge;
    if (ageInput > lifeExpectancyInput) {
      return Math.abs(yearsLeft);
    } else {
      return yearsLeft;
    }
  }

  getVenusYearsLeft(ageInput, lifeExpectancyInput) {
    const venusExpectancy = Math.round(lifeExpectancyInput * 0.62);
    const venusAge = Math.round(ageInput * 0.62);
    const yearsLeft = venusExpectancy - venusAge;
    if (ageInput > lifeExpectancyInput) {
      return Math.abs(yearsLeft);
    } else {
      return yearsLeft;
    }
  }
}
