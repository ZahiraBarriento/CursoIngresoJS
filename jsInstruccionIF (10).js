function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() * 10) + 1;

	if (numeroRandom>8) 
		{
			alert("Su nota es: "+numeroRandom+". Excelente");
		}
	else
		{
			if (numeroRandom<5) 
				{
					alert("Su nota es: "+numeroRandom+". Vamos la proxima se puede");
				}
			else
			{
				alert("Su nota es: "+numeroRandom+". Aprobó");
			}	
		}

}//FIN DE LA FUNCIÓN