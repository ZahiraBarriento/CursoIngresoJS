function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var sumaDeNegativos;
	var sumaDePositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadDePares
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	sumaDeNegativos=0;
	sumaDePositivos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	cantidadDePares=0;
	promedioNegativos=0;
	promedioPositivos=0;
	diferencia=0;

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		
		if (numero<0) 
		{
			sumaDeNegativos=sumaDeNegativos+numero;
			cantidadNegativos++;
		}
		
		else
		{
			if(numero>0)
			{
				sumaDePositivos=sumaDePositivos+numero;
				cantidadPositivos++;
			}

			else
			{
				cantidadCeros++;
			}
		}
		
		if (numero%2==0)
		{
			cantidadDePares++;
		}

		respuesta=prompt("Ingrese no para salir");
	}
	
	promedioPositivos=sumaDePositivos/cantidadPositivos;
	promedioNegativos=sumaDeNegativos/cantidadNegativos;
	diferencia=sumaDePositivos-sumaDeNegativos;

	document.write("La suma de los negativos es: "+sumaDeNegativos+ "<br>");
	document.write("La suma de los positivos es: "+sumaDePositivos+ "<br>");
	document.write("La cantidad de los positivos es: "+cantidadPositivos+ "<br>");
	document.write("La cantidad de los negativos es: "+cantidadNegativos+ "<br>");
	document.write("La cantidad de los ceros es: "+cantidadCeros+ "<br>");
	document.write("La cantidad de los pares es: "+cantidadDePares+ "<br>");
	document.write("El promedio de los positivos es: "+promedioPositivos+ "<br>");
	document.write("El promedio de los negativos es:"+promedioNegativos+ "<br>");
	document.write("La diferencia entre positivos y negativos es :"+diferencia+ "<br>");
}
//FIN DE LA FUNCIÓN