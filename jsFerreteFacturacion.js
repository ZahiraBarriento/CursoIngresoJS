/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	Resultado=PrecioUno+PrecioDos+PrecioTres;

	alert("La suma da: "+Resultado);
}

function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	Resultado=(PrecioUno+PrecioDos+PrecioTres)/3;

	alert("El promedio de todos los numeron es: "+Resultado);
}

function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Suma;
	var PrecioIVA;
	var Resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	Suma=PrecioUno+PrecioDos+PrecioTres;
	PrecioIVA=Suma*1.21;

	Resultado=PrecioIVA;

	alert("El precio final es: "+Resultado);
}