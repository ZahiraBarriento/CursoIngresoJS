function mostrar()
{
	var precio;
	var descuento;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;
	var elPrecioFinal;

	precio=prompt("Ingrese el precio:");
	descuento=prompt("Ingrese el porcentaje de descuento:");

	//1
	descuentoEnDinero=(precio*descuento)/100;

	//2
	precioConDescuento=precio-descuentoEnDinero;

	//3
	iva=precio*0.21;

	//4
	elPrecioFinal=precioConDescuento+iva;
	elPrecioFinal=parseInt(elPrecioFinal);

	alert("1. El descuento el dinero es $"+descuentoEnDinero+". El precio con el descuento es: $"+precioConDescuento+". El IVA es: $"+iva);
	document.getElementById('elPrecioFinal').value=elPrecioFinal;


}
