function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero=0;
	
	while (numero<9)
		{
			alert("El numero ingresado es incorrecto");
			numero = prompt("ingrese un número entre 0 y 9.");
		}
}
//FIN DE LA FUNCIÓN