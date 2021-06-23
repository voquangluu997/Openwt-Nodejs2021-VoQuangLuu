class MyDate {
  private day: number;
  private month: number;
  private year: number;
  private MONTHS: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  private DAYS: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
  ];
  private DAYS_IN_MONTHS: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];

  constructor(day: number, month: number, year?: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  isLapYear(): boolean {
    return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
  }

  isValidDate(): boolean {
    return (
      this.year >= 0 &&
      this.year <= 9999 &&
      this.month < 12 &&
      this.month > 0 &&
      this.day < this.DAYS_IN_MONTHS[this.month - 1]
    );
  }

  getDayOfWeek(): number {
    return new Date(this.month, this.day, this.year).getDay();
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

  nextDay(): MyDate {
    let nextDay = new Date(this.month, this.day + 1, this.year);
    return new MyDate(
      nextDay.getDay(),
      nextDay.getMonth(),
      nextDay.getFullYear()
    );
  }

  nextMonth(): MyDate {
    let nextDay = new Date(this.month + 1, this.day, this.year);
    return new MyDate(
      nextDay.getDay(),
      nextDay.getMonth(),
      nextDay.getFullYear()
    );
  }

  nextYear(): MyDate {
    let nextDay = new Date(this.month, this.day, this.year + 1);
    return new MyDate(
      nextDay.getDay(),
      nextDay.getMonth(),
      nextDay.getFullYear()
    );
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
