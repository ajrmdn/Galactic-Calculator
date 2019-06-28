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
  constructor(yearsLeft) {
    this.yearsLeft = yearsLeft;
    this.mercuryDeath = this.getMercuryDeath(yearsLeft)
    this.venusDeath = this.getVenusDeath(yearsLeft)
    this.marsDeath = this.getMarsDeath(yearsLeft)
    this.jupiterDeath = this.getJupiterDeath(yearsLeft)
  }

  getMercuryDeath(yearsLeft) {
    return age * 0.24;
  }

  getVenusDeath(yearsLeft) {
    return age * 0.62;
  }

  getMarsDeath(yearsLeft) {
    return age * 1.88;
  }

  getJupiterDeath(yearsLeft) {
    return age * 11.86;
  }

  returnD() {
    const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(this.dateLiteral);
    return DAYS_OF_WEEK[date.getDay()];
  }
}
