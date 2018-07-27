function mostrar()
// Tomar el nombre, sexo y edad

{
	var nombre;
	var edad;
	var sexo;
	var contador;
	var respuesta;


	respuesta='si';
	contador=0;

	while(respuesta!='no')
		{		
			nombre=prompt("Ingrese nombre:");
			sexo=prompt("Ingrese el sexo:");
		
			while(sexo)
			{
				sexo=prompt("Ingrese el sexo:");
			}
			
			edad=prompt("Ingrese la edad:");
			edad=parsInt(edad);

			while(edad)
			{
				edad=prompt("Ingrese la edad:");
				edad=parsInt(edad);
			}
			
			contador++;	
		}

}
