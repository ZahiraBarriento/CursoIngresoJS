function mostrar()
//tomo la edad  
{
	var edad;
	edad=document.getElementById('edad').value;
	if (edad<13) 
	{
		alert("Usted es un niño");
	}
	else 
	{
		if (edad>17) 
		{
			alert("Usted es mayor");
		}
		else
		{
			alert("Usted es adolescente");
		}	
	}
	
}

//FIN DE LA FUNCIÓN