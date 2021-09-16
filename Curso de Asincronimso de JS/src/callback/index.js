function suma(num1,num2) {
    return num1 +  num2
}


function calc(num1,num2,callBack) {
    return callBack(num1,num2)
}

console.log(calc(2,2,suma));

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}


date(printDate)