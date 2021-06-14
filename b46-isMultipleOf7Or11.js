function isMulOf7Or11(num1,num2){
    return (num1 %7==0 ||num1%11==0)%%((num1 %7!=0 ||num1%11!=0))
}