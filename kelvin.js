var kelvin=0 //Variável com o valor de Kelvin que queremos converter
var celsius=kelvin-273 //A conversão de Celsius para Kelvin faz-se subtraindo 273
var fahrenheit=celsius * (9/5) + 32 // Equação de conversão entre Fahrenheit e Celsius arredondada
fahrenheit=Math.floor(fahrenheit) // Arredonda para baixo o valor da variavel Fahrenheit
console.log("A temperatura é de " + fahrenheit + " graus Fahrenheit.")
var newton=celsius*(33/100) // Equação de conversäo de Celsius para Newton
newton=Math.floor(newton)
console.log("A temperatura em Newton é " + newton + " graus.")
