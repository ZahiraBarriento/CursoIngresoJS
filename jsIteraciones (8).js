function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numero;

	while (respuesta=="si")
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);

			if (numero>0) 
			{
				positivo=numero+positivo;
			}
			else
			{
				negativo=numero*negativo;
			}
			respuesta=prompt("¿Desea ingresar otro numero?")
			contador++;
		}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN