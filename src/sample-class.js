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

// export class DoomsDay {
//   constructor(years) {
//     this.yearsLeft = years;
//     this.demo =
//   }
//
//   returnYears() {
//    const Years = [];
//    const date = new Date(this.yearsLeft);
//    return Years[date.getYear()];
//   }
 }
