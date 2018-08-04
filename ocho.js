function mostrar()
{
	var numero;
	var letra;
	var contador;
	var respuesta;
	var cantidadPares;
	var cantidadImpares;
	var cantidadCeros;
	var numerosPositivos;
	var numeroNegativos;
	var promedio;
	var flag;

	numero=0;
	contador=0;
	respuesta="si";
	cantidadPares=0;
	cantidadCeros=0;
	numerosPositivos=0;
	numeroNegativos=0;
	promedio=0;
	flag=0;
	cantidadImpares=0;
	

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese un numero:");
		numero=parseInt(numero);
		while(isNaN(numero)|| numero<-100 || numero>100)
		{
			numero=prompt("Numero invalida. Ingrese un numero:");
			numero=parseInt(numero);
		}
	
		letra=prompt("Ingrese una letra:");
		respuesta=prompt("¿Desea ingresar mas datos?");
	
		//a
		if (numero%2==0) 
		{
			cantidadPares++;
		}

		//b y c
		else
		{
			cantidadImpares++;
		}
			
		if (numero==0) 
			{
				cantidadCeros++;
			}

		//d
		else if (numero>0) 
		{
			numerosPositivos=numerosPositivos+numero;
			numerosPositivos++;
		}

		else
		{
			numeroNegativos=numeroNegativos+numero;
		}
		
		//f
		if (flag==0 || numero<numeroMinimo && letra<letraMinima) 
		{
			numeroMinimo=numero;
			letraMinima=letra;
		}
	
		if (flag==0 || numero>numeroMaximo && letra>letraMaxima) 
		{
			numeroMaximo=numero;
			letraMaxima=letra;
			flag=1;
		}
	}
	//d
	promedio=numerosPositivos/contador;
	document.write("La cantidad de numeros pares es: "+cantidadPares+"<br>");
	document.write("La cantidad de numeros impares es: "+cantidadImpares+"<br>");
	document.write("La cantidad de ceros es: "+cantidadCeros+"<br>");
	document.write("El promedio de todos los positivos es:" +promedio+"<br>");
	document.write("La suma de los negativos es: "+numeroNegativos+"<br>");
	document.write("El numero y la letra maxima es: "+numeroMaximo+" y "+letraMaxima+"<br>");
	document.write("El numero y la letra mimima es: "+numeroMinimo+" y "+letraMinima+"<br>");
}