const priceWithTickets = () => {
    const price = document.getElementById("InputMovie").value;
    const cost = document.getElementById("InputPrice").value;

    const total = price * cost ;
    let result = document.getElementById("ResultCinema");

    if (total == false) {
		result.innerHTML = "Debes seleccionar la cantidad de películas y el precio"
	} else {
		result.innerHTML = "El precio total de las boletas es de $" + total
	}

    return total
} 

const priceWithStreaming = () => {
    let total; 
    if (document.getElementById("Disney").checked) { total += 23900;}
    if (document.getElementById("Netflix").checked) {total += 16900 };
    if (document.getElementById("Amazon").checked) {total += 14900 };
    if (document.getElementById("HBO").checked) {total += 13900 };

    let result = document.getElementById("ResultStreaming");

    if ( total == undefined) {
		result.innerHTML = "Debes seleccionar al menos una plataforma de Streaming";
	} else {
		result.innerHTML = "El precio total de la suscripción es de $" + total;
	}

    return total
} 

const compare = () => {
    const streaming = priceWithStreaming();
    const cinema = priceWithTickets();

    let result = document.getElementById("Result");

    if ( cinema > streaming) {
		result.innerHTML = "Te conviene contratar las suscripciones"
	} else if ( streaming > cinema ) {
		result.innerHTML = "Te conviene ir al cine"
	} else if ( cinema == false || streaming == false) {
		result.innerHTML = "Revisa los enunciados, de pronto no te falta un dato ;)"
	} else {
		result.innerHTML = "En ambas opciones gastarias lo mismo"
	}

}