/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Largo;
	var Ancho;
	var Resultado;

	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;

	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);

	Resultado=((Largo+Ancho)*2)*3;

	alert("La cantidad de alambre a comprar es: "+Resultado);
}

function Circulo () 
{
	var Alambre;
	var Radio;
	var Resultado;

	Radio=document.getElementById('Radio').value;

	Alambre=(2*3.14*Radio);
	Resultado=Alambre*3

	alert("La cantidadde alambre a comprar es: "+Resultado);
}
/*Para hacer un contrapiso de 1m x 1m se necesitan 
2 bolsas de cemento y 3 de cal, debemos mostrar cuantas 
bolsas se necesitan de cada uno para las medidas del 
terreno rectangular.*/
function Materiales () 
{
	var Largo;
	var Ancho;
	var Cemento;
	var Cal;

	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;

	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);

	Cemento=(Largo*Ancho)*2;
	Cal=(Largo*Ancho)*3;

	alert("La cantidad de bolsas de cemento que necesita son "+Cemento+" y de cal son "+Cal+" bolsas");
}