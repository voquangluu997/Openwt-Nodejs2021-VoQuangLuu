class MyTime {
  private hour: number = 0;
  private minute: number = 0;
  private second: number = 0;

  constructor(hour: number, minute: number, second?: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getHour(): number {
    return this.hour;
  }

  getMinute(): number {
    return this.minute;
  }

  getSecond(): number {
    return this.second;
  }

  setHour(hour: number) {
    this.hour = hour;
  }

  setMonth(minute: number) {
    this.minute = minute;
  }
  setSecond(second: number) {
    this.second = second;
  }

  setTime(hour: number, minute: number, second: number) {
    return this.hour + ":" + this.minute + ":" + this.second;
  }

  nextSecond(): MyTime {
    let h, m, s;
    if (this.hour == 23 && this.minute == 59 && this.second == 59)
      return new MyTime(0, 0, 0);

    s = (this.second + 1) % 60;
    m = (Math.floor((this.second + 1) / 60) + this.minute) % 60;
    h =
      Math.floor((Math.floor((this.second + 1) / 60) + this.minute) / 60) % 24;
    return new MyTime(h, m, s);
  }

  toString(): string {
    return (
      "Time[hour=" +
      this.getHour() +
      " minute =" +
      this.getMinute() +
      " second =" +
      this.getSecond() +
      "]"
    );
  }
}
