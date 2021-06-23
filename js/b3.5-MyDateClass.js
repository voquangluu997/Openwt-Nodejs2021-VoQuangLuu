class MyDate {
    constructor(day, month, year) {
        this.MONTHS = [
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
        this.DAYS = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Sunday",
        ];
        this.DAYS_IN_MONTHS = [
            31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];
        this.day = day;
        this.month = month;
        this.year = year;
    }
    isLapYear() {
        return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
    }
    isValidDate() {
        return (this.year >= 0 &&
            this.year <= 9999 &&
            this.month < 12 &&
            this.month > 0 &&
            this.day < this.DAYS_IN_MONTHS[this.month - 1]);
    }
    getDayOfWeek() {
        return new Date(this.month, this.day, this.year).getDay();
    }
    getday() {
        return this.day;
    }
    getmonth() {
        return this.month;
    }
    getyear() {
        return this.year;
    }
    setDay(day) {
        this.day = day;
    }
    setMonth(month) {
        this.month = month;
    }
    setYear(year) {
        this.year = year;
    }
    setDate(day, month, year) {
        return this.day + "/" + this.month + "/" + this.year;
    }
    nextDay() {
        let nextDay = new Date(this.month, this.day + 1, this.year);
        return new MyDate(nextDay.getDay(), nextDay.getMonth(), nextDay.getFullYear());
    }
    nextMonth() {
        let nextDay = new Date(this.month + 1, this.day, this.year);
        return new MyDate(nextDay.getDay(), nextDay.getMonth(), nextDay.getFullYear());
    }
    nextYear() {
        let nextDay = new Date(this.month, this.day, this.year + 1);
        return new MyDate(nextDay.getDay(), nextDay.getMonth(), nextDay.getFullYear());
    }
    toString() {
        return ("Date[day=" +
            this.getday() +
            " month =" +
            this.getmonth() +
            " year =" +
            this.getyear() +
            "]");
    }
}
