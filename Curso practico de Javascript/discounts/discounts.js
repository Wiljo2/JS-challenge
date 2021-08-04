const calcularPrecioConDescuento = (price, discount) => price * ((100 - discount)/100)

const onClickPriceDiscount = () => {
    const inputPrice = document.getElementById("inputPrice").value;
    const inputDiscount = document.getElementById("inputDiscount").value;
    
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    
    const discountedPriceP = document.getElementById("discountedPrice");
    discountedPriceP.innerHTML = "El precio final es  <h2>$ " + precioConDescuento + "</h2>"


}    