/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Temperatura;
	var Centigrados;

	Temperatura=document.getElementById('Temperatura').value;
	Temperatura=parseInt(Temperatura);

	Centigrados=(Temperatura-32)/1.8;

	alert(+Temperatura+" Fahrenheit son "+Centigrados+" centígrados");
}

function CentigradosFahrenheit () 
{
	var Temperatura;
	var Fahrenheit;

	Temperatura=document.getElementById('Temperatura').value;
	Temperatura=parseInt(Temperatura);

	Fahrenheit=(Temperatura*1.8)+32;

	alert(+Temperatura+" Centígrados son "+Fahrenheit+" Fahrenheit");
}
