function calcularTotal() {
 
    var precioProcesador = parseInt(document.getElementById("procesador").value);
    var precioRam = parseInt(document.getElementById("ram").value);
    var precioGpu = parseInt(document.getElementById("gpu").value);
    var precioAlmacenamiento = parseInt(document.getElementById("almacenamiento").value);
    var total = precioProcesador + precioRam + precioGpu + precioAlmacenamiento;
    var cuponIngresado = document.getElementById("cupon").value;
    var cuponValido = "UCC2025";
    var descuento = 0;

    if (cuponIngresado.toUpperCase() === cuponValido) {
        descuento = total * 0.15; // calcular el 15%
        total = total - descuento;
        document.getElementById("descuento-texto").textContent = "Cupón aplicado: descuento de $ " + descuento.toFixed(2);
    } else {
        document.getElementById("descuento-texto").textContent = "";
    }

    document.getElementById("total").textContent = "$" + total.toFixed(2);
}



function agregarAlCarrito() {
    alert("PC personalizada añadida al carrito.");
}

function verCarrito() {
    alert("Carrito no disponible aún.");
}
