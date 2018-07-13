function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	if (numeroUno==numeroDos) 
	{
		alert("Su primer numero es: "+numeroUno+" y el segundo es: "+numeroDos);
	}

	if (numeroUno>numeroDos) 
	{
		resultado=numeroUno/numeroDos;
		alert(resultado);
	}
	
	else 
	{

		if (numeroUno<numeroDos) 
		{
		resultado=numeroUno+numeroDos;
		if (resultado<50) 
		{
			alert("La suma es: "+resultado+" y es menor a 50");
		}
		
		}
	}
}
