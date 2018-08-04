function Mostrar()
{
	var numero;
	var contador;
	var maximo;
	var minimo;
	var flag;
	var respuesta;
	var cantidadPares;
	var sumaNumero;
	var promedio;

	contador=0;
	flag=0;
	respuesta="si";
	cantidadPares=0;
	sumaNumero=0;

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese un numero:");
		numero=parseFloat(numero);
		while(isNaN(numero)|| numero<=0)
		{
			numero=prompt("numero invalido. Ingrese un numero:");
			numero=parseInt(numero);
		}

		respuesta=prompt("¿Desea ingresar mas datos?");
		
		if (numero%2==0) 
		{
			cantidadPares++;
		}

		sumaNumero=sumaNumero+numero;

		if (flag==0 || numero>maximo) 
		{
			maximo=numero;
		}

		if (flag==0 || numero<minimo) 
		{
			minimo=numero;
			flag=1;
		}
	}

	promedio=sumaNumero/contador;

	document.write("La cantidad de numeros pares es: "+cantidadPares+"<br>")
	document.write("El promedio es: "+promedio+"<br>");
	document.write("La suma es: "+sumaNumero+"<br>");
	document.write("El numero maximo es: "+maximo+" y el minimo es: "+minimo+"<br>");
}
