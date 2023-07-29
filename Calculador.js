const x = parseFloat(prompt(" Informe o primeiro número: "));
const y = parseFloat(prompt(" Informe o segundo número: "));

// tambem poderia ser feito desta forma
/*
const entrada1= prompt(' Informe o primeiro número')
const entrada2= prompt('Infome o segundo número')

**informando a constante de entrada1 a prompt modelo acima
depois informando ou elevando a constande de entrada1 a parsefloat
modelo abaixo
anbas as entradas

const x = parseFloat (entrada1)
const y = parseFloat(entrada2)
*/
const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

window.alert(
  " Resultado das operacões: \n" +
    "\nSoma: " +
    soma +
    "\n Subtração: " +
    subtração +
    "\n Multiplicação: " +
    multiplicação +
    "\n divisão: " +
    divisão
);
// exercicio poderia ser resolvido com qualquer tipo de variavel
