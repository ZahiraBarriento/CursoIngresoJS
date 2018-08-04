/*Realizar el algoritmo que pida el peso en kilos 
(validar que sea mayor a 0,”cero”) de cada uno de 
os 50 contenedores (pedir 50 veces) de un depositor 
prompt, e informar cual fue el más pesado y cuál
fue el menos pesado.*/
function Mostrar()
{
	//parseInt numeros enteros
	//parseFloat numeros con coma
	//en la condicion debemos poner lo que no queremos que se cumpla
	//flag = bandera
	//en el ultimo flag vale "1"

	var peso;
	var contador;
	var maximo;
	var minimo;
	var flag;

	contador=0;
	flag=0;

	while(contador<5)
	{
		contador++;
		peso=prompt("Ingrese el peso en kg.:");
		peso=parseFloat(peso);
		while(isNaN(peso)|| peso<=0)
		{
			peso=prompt("Peso invalido. Ingrese el peso en kg.:");
			peso=parseFloat(peso);
		}

		if (flag==0 || peso>maximo) 
		{
			maximo=peso;
		}

		if (flag==0 || peso<minimo) 
		{
			minimo=peso;
			flag=1;
		}
	}

	document.write("El mas pesado es: "+maximo+"kg y el menos pesado es :"+minimo+"kg");
}
