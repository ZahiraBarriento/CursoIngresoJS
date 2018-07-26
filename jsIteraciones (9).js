function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
		{
			numero=prompt("Ingrese un numero:");
			numero=parseInt(numero);

			if (numero<maximo) 
			{
				numero=minimo;
			}
			
			else
			{
				if (numero>minimo) 
				{
					numero=maximo
				}
			}
			respuesta=prompt("¿Desea ingresar otro numero?")
			contador++;
		}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN