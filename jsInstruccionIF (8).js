function mostrar()
//tomo la edad  
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	if (edad>17 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}	
}
//FIN DE LA FUNCIÓN
//El = solo es para asignar valor y el doble es para comparar