class MDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
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
