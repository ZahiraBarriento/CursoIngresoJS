
function mostrar()
{
	var base;
	var altura;
	var superfcie;
	var perimetro;

	base=prompt("Ingrese la base del triangulo equilátero:");
	altura=prompt("Igrese la altura del triangulo equilátero:");

	superfcie=(base*altura)/2;
	perimetro=base*3;

	alert("La superfcie del triangulo equilátero es "+superfcie+" y el perimetro es "+perimetro);
}
