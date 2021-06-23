class date{
  private day: number;
  private month: number;
  private year: number;

  constructor(day: number, month: number, year?: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getday(): number {
    return this.day;
  }

  getmonth(): number {
    return this.month;
  }

  getyear(): number {
    return this.year;
  }

  setDay(day: number) {
    this.day = day;
  }

  setMonth(month: number) {
    this.month = month;
  }
  setYear(year: number) {
    this.year = year;
  }

  setDate(day: number, month: number, year: number) {
    return this.day + "/" + this.month + "/" + this.year;
  }

  toString(): string {
    return (
      "Date[day=" +
      this.getday() +
      " month =" +
      this.getmonth() +
      " year =" +
      this.getyear() +
      "]"
    );
  }
}
