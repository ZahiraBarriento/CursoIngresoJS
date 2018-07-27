function mostrar()
{

	var contador=0;
	// declarar variables
	var numero=0;
	var elMaximo=0;
	var elMinimo=0;
	var respuesta='si';

	while(respuesta!='no')
		{
			numero=prompt("Ingrese un numero:");
			numero=parseInt(numero);

			if (numero<elMinimo) 
			{
				elMinimo=numero;
			}
			
			else
			{
				if (numero>elMaximo) 
				{
					elMaximo=numero;
				}
			}
			
			respuesta=prompt("¿Desea ingresar otro numero?");
			contador++;

			if (contador==1) 
			{
				elMaximo=numero;
				elMinimo=numero;
			}
		}

	document.getElementById('maximo').value=elMaximo;
	document.getElementById('minimo').value=elMinimo;

}
//FIN DE LA FUNCIÓN