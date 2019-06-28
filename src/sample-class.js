
export class PlanetYears {
  constructor(mercuryYears, venusYears, marsYears, jupiterYears) {
    this.dateLiteral = date;
  }

  returnDay() {
    const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(this.dateLiteral);
    return DAYS_OF_WEEK[date.getDay()];
  }
}
