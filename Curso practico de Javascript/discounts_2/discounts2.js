const calcularPrecioConDescuento = (price, discount) => price * ((100 - discount)/100)

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const onClickPriceDiscount = () => {
    const inputPrice = document.getElementById("inputPrice").value;
    const inputCoupon = document.getElementById("InputCoupon").value;
    let coupon = coupons.find(coupon => coupon.name === inputCoupon);
    if (coupon) {
        discounted = calcularPrecioConDescuento(inputPrice,coupon.discount);
        const discountedPriceP = document.getElementById("discountedPrice");
        discountedPriceP.innerHTML = "El precio final es  <h2>$ " + discounted + "</h2>"
    }else{
        alert("El cupón " + inputCoupon+ " no es válido");
    }

}    