const salaryCol = colombia.map( person => person.salary)

const salariesSorted = salaryCol.sorted(a,b =>  a - b )

const calculateAverage = (list) => {

    const sumList = list.reduce((acumulate = 1, newItem) => acumulate + newItem );
    const averageList = sumList/list.length;  
      
    return averageList
}

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
const average = calculateMedian(salariesSorted);


const onClickResult = () => {
    const input = document.getElementById("InputNumber").value;

    
    let result = document.getElementById("Result");
    result.innerHTML = "El promedio es " + average ;

}