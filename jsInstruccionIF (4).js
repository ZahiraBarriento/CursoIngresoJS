function mostrar()
//tomar la edad
{
	var edad;
	edad=document.getElementById('edad').value;
	if (edad>12)
	{
		if (edad<18) 
		{
			alert("Usted es un adolescente");
		}
	}
	
}
//FIN DE LA FUNCIÓN

/*Tambien se puede realizar de esta manera

var edad;
	edad=document.getElementById('edad').value;
	if (edad>12 && edad<18)
	{
		alert("Usted es un adolescente");
	}
*/