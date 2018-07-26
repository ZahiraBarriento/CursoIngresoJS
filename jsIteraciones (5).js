function mostrar()
{

	var sexo = prompt("ingrese f ó m.");


	while (sexo=="f" && sexo=="m")	
		{
			alert("El sexo ingresado es incorrecto");
			sexo = prompt("ingrese f ó m.");
		}

	document.getElementById('Sexo').value=sexo;
}
//FIN DE LA FUNCIÓN