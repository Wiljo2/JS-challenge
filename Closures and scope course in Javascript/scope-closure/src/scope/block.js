const fruits = () => {
    if (true){
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
        console.log(fruits1);
        console.log(fruits2);
        console.log(fruits3);
    }
}
fruits();

let x = 1
{
    let x = 2
    console.log(x);
}
console.log(x);

var x = 1
{
    var x = 2
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for(var i = 0; i < 100; i++) {
        setTimeout(() => console.log(i),1);
    }
}
anotherFunction();
/* 10 ,10 10 10 10 10 10 */

const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i),1000);
    }
}
anotherFunction();