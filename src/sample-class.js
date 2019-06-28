export class PlanetAge {
  constructor(age) {
    this.age = age;
    this.mercuryAge = this.getMercuryAge(age);
    this.venusAge = this.getVenusAge(age);
    this.marsAge = this.getMarsAge(age);
    this.jupiterAge = this.getJupiterAge(age);
  }

  getMercuryAge(age) {
    return age * 0.24;
  }

  getVenusAge(age) {
    return age * 0.62;
  }

  getMarsAge(age) {
    return age * 1.88;
  }

  getJupiterAge(age) {
    return age * 11.86;
  }

}
export class DoomsDay {
  constructor(years) {
    this.yearsLeft = year;
  }

  const date = new Date(this.death);

  returnD() {
    const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return DAYS_OF_WEEK[date.getDay()];
  }
}
