function mostrar()
{
	var planeta = prompt("Ingrese un planeta:");

	switch (planeta)
	{
		case "Tierra":
			alert("Acá vivimos");
			break;

		case "Mercurio":
		case "Venus":
			alert("Aca hace más calor");
			break;

		case "Jupiter":
		case "Saturno":
		case "Marte":
		case "Neptuno":
		case "Urano":
		case "Pluton":
			alert("Aca hace más frío");
			break;

		default:
			alert("Planeta no valido");
			break;


	}
}
