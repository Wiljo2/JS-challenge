// codigo del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4 

const areaCuadrado =(lado) => lado ** 2;

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const alturaTriangulo = 5.5;

console.log("la altura del tríangulo es " + alturaTriangulo );

const perimetroTriangulo = (lado1, lado2, base) => {
    console.log("El perímetro del cuadrado miden: " + (lado1 + lado2 + base) + "cm");
}
const areaTriangulo = ( base, altura) => {
    console.log("El area del cuadrado miden: " + ((base * altura ) / 2) + "cm^2")
 } ;


console.groupEnd();


// Código del círculo

console.group("Círculos")

const diametroCirculo = (radio) => {
    console.log("EL radio del círculo es " + radio + " y el diametro es: " + (radio*2));
}

const PI = Math.PI;

const perimetroCirculo = (radio) => {
     console.log("El perímetro del cuadrado miden: " + (diametroCirculo(radio) * PI )+ "cm");
}

const areaCirculo = (radio) => {
    console.log("El area del cuadrado miden: " +((radio * radio) * PI)+ + "cm^2");
}
console.log("Pi es = " + PI);
console.groupEnd();


//interaccion con html 


const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

const calcularAreaCuadrado = () => {
    let value = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(value);

    alert(area);
}

const altura = (lado1, lado2, base) => {
    if(lado1 === lado2 && lado1 != base){
        let altura = Math.sqrt(lado1**2 - base**2/ 4)
        return Math.round(altura)
    }
    else{
        return "Escriba bien"
    }
}

const calcularAlturaTriangulo = () =>{
    let lado1 = document.getElementById("inputLado1").value
    let lado2 = document.getElementById("inputLado2").value
    let base = document.getElementById("inputBase").value

    let laltura = altura(lado1,lado2,base);

    alert(laltura)

}

