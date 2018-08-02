function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
 	
 	numeroUno = prompt("Ingrese su primer numero");
	numeroDos = prompt("Ingrese su segundo numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
 	
 	if(numeroUno==numeroDos)
 	{
		alert("Su primer numero es "+numeroUno+" y su segundo numero es "+numeroDos);
	}
	
	else 
	{	
		if (numeroUno>numeroDos)
		{
			resultado = numeroUno-numeroDos;
			alert(resultado);
		} 
		else 
		{
			resultado= numeroUno+numeroDos;
			
			if (resultado>10) 
			{
				alert("La suma es " + resultado + " y supera al 10.");
			}
		} 
	}  
}
