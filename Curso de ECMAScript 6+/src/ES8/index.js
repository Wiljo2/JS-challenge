const data  = {
    frontend: "oscar",
    backend: "Isabel",
    design: "ana"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


const data  = {
    frontend: "oscar",
    backend: "Isabel",
    design: "ana",
}

const values = Object.values(data)
console.log(values);
console.log(values.length);


const string = "Hello";
console.log(string.padStart(8,"Hi "));
console.log(string.padStart(18,"-----"));
console.log("food".padEnd(12,"-----"));

const obj = {
    name:"oscar",
};

const helloWorld = () => {
    return new Promise( (resolve,reject) => {
        (true) ?setTimeout(() => resolve("hello"), 4000): reject(new Error ("Nojoda que monda"));
    })
}

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/
const anotherfunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello) 
    }
    catch(error){
        console.log(error)
    }
}

anotherfunction()

// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}
