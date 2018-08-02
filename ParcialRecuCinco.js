function mostrar()
{
	var dia;

	dia=prompt("Ingrese un día de la semana:");

	switch(dia)
	{
		case "Sábado":
		case "Domingo":
			alert("Buen fin de semana");
			break;

		case "Lunes":
		case "Martes":
		case "Miércoles":
		case "Jueves":
		case "Viernes":
			alert("A trabajar");
			break;

		default:
			alert("Día invalido.")
	}
}
