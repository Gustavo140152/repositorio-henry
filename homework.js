// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Gustavo';
var miprimernombre='Gustavo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1545600.45;
var numeroleido=1545600.45;

// Crea una variable booleana:
const nuevoBool = false
var encontreelzapato=false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
devolverString();

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var z=x+y;
  return z; // 3767
}
suma(2535, 1232)

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var z=x-y;
  return z; // 1303
}
resta(2535, 1232)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var z=x*y;
  return z; // 3123120
}
multiplica(2535, 1232)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var z=x/y;
  return z; // 2.06
}
divide(2535, 1232)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    return true;
  }
  return false;
}
sonIguales(2535, 1232); // false

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) { return true;}
  return false
}
tienenMismaLongitud('uva', 'pez'); //true

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){return true;}
  return false;
}
menosQueNoventa(145); //false

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){return true;}
  return false;
}
mayorQueCincuenta(85);// falso

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var z=x%y;
  return z;
  
}
obtenerResto(45, 7); // 3

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2 === 0) {return true;}
  return false;
  
}
esPar(45); //falso

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((Math.abs(num%2)>0)) {return true;}
  return false;
  
}
esImpar(45); // true

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var z=(Math.pow(num, 2));
  return z;
}
elevarAlCuadrado(25); // 625

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var z=(Math.pow(num, 3));
  return z;
}
elevarAlCubo(5); // 125

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var z=(Math.pow(num, exponent));
  return z;
}
elevar(2,5);// 32

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var z=(Math.round (num));
  return z;
  
}
redondearNumero(655.35); // 635

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var z=(Math.ceil(num));
  return z;
}
redondearHaciaArriba(655.35); //656

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  z=(Math.random());
  return z;
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var a='Es positivo';
  var b='Es negativo';
  if (numero===0){return false;}
  if (numero>0){return a;}
  return b;
  
}
esPositivo(- 2534); // Es negativo

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return (str + '!');
}
agregarSimboloExclamacion('Hola Pedrito'); //Hola Pedrito!

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var spacio=' ';
  return (nombre +spacio+apellido);
  
}

combinarNombres('Rosendo', 'Cabrales');// Rosendo Cabrales

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return ('Hola '+nombre+'!');
  
}
obtenerSaludo('Martin')

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var arearectangulo=alto*ancho;
  return arearectangulo;
}
obtenerAreaRectangulo(45, 10); //450

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetrodecuadrado=4*lado;
  return perimetrodecuadrado;
}
retornarPerimetro(100); //400

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areatriangulo=base*altura/2
  return areatriangulo;

}
areaDelTriangulo(20, 20); // 200

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var tasade=1.2;
  return euro*tasade;
  
}
deEuroAdolar(1500); // 1800


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var svoc='Es vocal';
  var nvocd='Dato incorrecto';
  var voc1='a';
  var voc2='e';
  var voc3='i';
  var voc4='o';
  var voc5='u';
  if (letra.length>1) {return nvocd;}
  if (letra===voc1){return svoc;}
  if (letra===voc2){return svoc;}
  if (letra===voc3){return svoc;}
  if (letra===voc4){return svoc;}
  if (letra===voc5){return svoc;}
  return nvocd;
}
esVocal('a'); // Dato incorrecto 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
