function mostrar()
//tomo la edad 
{
	var edad;
	edad=document.getElementById('edad').value;
	if (edad>17) 
	{
		alert("Usted es mayor de edad");
	}
	if (edad<18) 
	{
		alert("Usted es menor de edad");
	}
}
/*FIN DE LA FUNCIÓN
	
	Tambien se puede hacer de esta manera
	
	var edad;
	edad=document.getElementById('edad').value;
	if (edad>17) 
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}
*/