function isGapYear(year){
    return (year%4==0&& year%100!=0 || year %400 ==0)

}

console.log(isGapYear(400));

