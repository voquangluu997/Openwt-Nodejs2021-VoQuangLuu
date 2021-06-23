class MyTime {
    constructor(hour, minute, second) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    getHour() {
        return this.hour;
    }
    getMinute() {
        return this.minute;
    }
    getSecond() {
        return this.second;
    }
    setHour(hour) {
        this.hour = hour;
    }
    setMonth(minute) {
        this.minute = minute;
    }
    setSecond(second) {
        this.second = second;
    }
    setTime(hour, minute, second) {
        return this.hour + ":" + this.minute + ":" + this.second;
    }
    nextSecond() {
        let h, m, s;
        if (this.hour == 23 && this.minute == 59 && this.second == 59)
            return new MyTime(0, 0, 0);
        s = (this.second + 1) % 60;
        m = (Math.floor((this.second + 1) / 60) + this.minute) % 60;
        h =
            Math.floor((Math.floor((this.second + 1) / 60) + this.minute) / 60) % 24;
        return new MyTime(h, m, s);
    }
    toString() {
        return ("Time[hour=" +
            this.getHour() +
            " minute =" +
            this.getMinute() +
            " second =" +
            this.getSecond() +
            "]");
    }
}
