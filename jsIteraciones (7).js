function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta=="si")
		{
			numero = prompt("Ingrese un numero:");
			numero=parseInt(numero);
			acumulador=numero+acumulador;
			contador++;
			respuesta=prompt("¿Desea ingresar otro numero?");
		}	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN