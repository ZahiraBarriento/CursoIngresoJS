function mostrar()
{

	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Junio":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno");
			break;
		
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
			alert("Ya pasamos el frio¡Ahora calor!");
			break;

	}




}
//FIN DE LA FUNCIÓN