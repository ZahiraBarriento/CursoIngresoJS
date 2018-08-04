function Mostrar()
{
	// el promedio se saca con el contador si no se la cantidad de datos
	var edad;
	var sexo;
	var contador;
	var edadTotal;
	var promedio;
	var flag;
	var minima;
	var maxima;
	var cantidadVarones;

	contador=0;
	edadTotal=0;
	flag=0;
	cantidadVarones=0;

	for (contador=0; contador<3; contador++) 
	{
		edad=prompt("Ingrese la edad:");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<0 || edad>100)
		{
			edad=prompt("Edad invalida. Ingrese la edad:");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese el sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Edad invalida. Ingrese el sexo");

		}

		//a
		edadTotal=edadTotal+edad;

		//b
		if (flag==0 || edad<minima) 
		{
			minima=edad;
			flag=1;
		}
	
		if (sexo=="m" && edad>19) 
		{
			cantidadVarones++;
		}

	}

	promedio=edadTotal/3;
	alert("El promedio de las edades es: "+promedio);
	alert("La edad mas baja es: "+minima);
	alert("La cantidad de varones que tiene 20 o mas es: "+cantidadVarones);
}
