/* 
stack = Lifo => Last In First Out
the call stack save the record of a function 

*/

const cortar = (ingrediente) => {
    console.log('Cortar ' + ingrediente);
  }
  function mezclarIngredientes(n) {
    if (n <= 0) return;
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  
  function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
  
  hacerEnsaladaMixta();



  Clousures 

  /*
  ATENCIÓN: Si copiás y pegás TODO EL CÓDIGO en la consola vas a ver el siguiente error:
    > Uncaught SyntaxError: Identifier 'error' has already been declared 
  Ya que se está re-escribiendo la variable error (que en principcio es una función).

  Copiar una sola versión para ejecutar el código.
 */
/* Primer versión con múltiples funciones */

function error(str) {
    console.log(`%c Error: ${str} `, 'background: red; color: white;');
  }
  
  function warning(str) {
    console.log(`%c Warning: ${str} `, 'background: orange; color: white;');
  }
  
  function exito(str) {
    console.log(`%c Éxito: ${str} `, 'background: green; color: white;');
  }
  
  /* Segunda versión con clausuras */
  
  function crearImpresoraDeMensajes(tipo, estilos) {
    return function mensaje(str) {
      console.log(`%c ${tipo}: ${str} `, estilos);
    }
  }
  
  const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');
  const warning = crearImpresoraDeMensajes('Warning', 'background: orange; color: white;');
  const exito = crearImpresoraDeMensajes('Éxito', 'background: green; color: white;');
  


 function crearContado() {
     let contador= 0 ;
     return function incrementar() {
         contador += 1 ;
         return contador
     }
 } 


let cont = crearContado();
console.log(cont());
console.log(cont());




