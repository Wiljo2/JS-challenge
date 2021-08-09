/* string to number array */ 

const inputToArray = (input) => input.split(",").map(x =>+x)



/*------------------- averege -------------------*/
const calculateAverage = (list) => {

    const sumList = list.reduce((acumulate = 1, newItem) => acumulate + newItem );
    const averageList = sumList/list.length;  
      
    return averageList
}

const onClickAverage = () => {
    const input = document.getElementById("InputNumber").value;
    const arrayInput = inputToArray(input);
    const average = calculateAverage(arrayInput);
    
    let result = document.getElementById("Result");
    result.innerHTML = "El promedio es " + average ;

}


/*-------------- median ---------------*/
const calculateMedian = (list) => {
    const halfList = parseInt(list.length / 2);

    if (list.length % 2 ===  0) {
        const first = list[halfList - 1];
        const second = list[halfList];
        const median  = calculateAverage([first,second]);

        return median
    }else{
        const median = list[halfList];
        return median
    }
}

const onClickMedian = () => {
    const input = document.getElementById("InputNumber").value;
    const arrayInput = inputToArray(input);
    const average = calculateMedian(arrayInput);
    
    let result = document.getElementById("Result");
    result.innerHTML = "El promedio es " + average ;

}


/* ----------------mode -----------------*/

const calculateMode = (arr) => {
    return arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}

const onClickMode = () => {
    const input = document.getElementById("InputNumber").value;
    const arrayInput = inputToArray(input);
    const average = calculateMode(arrayInput);
    
    let result = document.getElementById("Result");
    result.innerHTML = "El promedio es " + average ;

}
