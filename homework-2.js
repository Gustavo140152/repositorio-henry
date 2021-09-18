// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x===y){return x;}
  if (x>y) {return x;}
    return y;

}
obtenerMayor(56, 85); // 85

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad>=18){return 'Allowed';}
    return 'Not allowed';
}
mayoriaDeEdad(35); //Allowed
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status===1){return 'Online';}
    if (status===2) {return 'Away';}
      return 'Offline';

}
conection(2); // Away

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma==='aleman'){return 'Guten Tag'+'!';}
  if (idioma==='mandarin'){return 'Ni Hao'+'!';}
  if (idioma==='ingles'){return 'Hello'+'!';}
  return 'Hola'+'!';

}
saludo('mandarin'); // Ni Hao!

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  if (color==='blue') {return 'This is blue';}
  if (color==='red') {return 'This is red';}
  if (color==='green') {return 'This is green';}
  if (color==='orange') {return 'This is orange';}
    return 'Color not found';
}
colors(); // Color not found

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero===10||numero===5) {return true;}
  return false;
}
esDiezOCinco(8);

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50&&numero>20) {return true;}
  return false;
}
estaEnRango(35);

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  y=Math.abs(numero);
  x=Math.floor(y);
  z=x-y;
  if(z===0){return true;}
  return false;
}
esEntero(-145.38)

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero%3===0&&numero%5===0){return 'fizzbuzz';}
  if (numero%3===0) {return 'fizz';}
    if (numero%5===0) {return 'buzz';}
    return numero;
}
fizzBuzz(45);

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distinntos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1<0) {return 'Hay negativos';}
    if (num2<0) {return 'Hay negativos';}
    if (num3<0) {return 'Hay negativos';}
    if (num1===0) {return 'Error';}
    if (num2===0) {return 'Error';}
    if (num3===0) {return 'Error';}
  if (num1>num2&&num1>num3) {return 'Número 1 es mayor y positivo';}
  if (num3>num1||num3>num2) {return num3+1;}
    return false;
  }
  
operadoresLogicos(100, 50, 60);

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero===0||numero===1) {numero+' no es considerado número primo';}
  if (numero===2){return true;}
  if (numero%2===0){return false;}
  for (var i = 2; i <= numero; i++) {
    if (numero/i===1){return true;}
  }
    return false;

}
esPrimo(38);

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor===true) {return 'Soy verdadero';}
  if (valor===false){return 'Soy falso';}
  return ' ni true ni false';
}
esVerdadero(true);

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  var prod=new Array(11) 
  for (var i=0 ; i<=10; i++){
    prod[i]=i*6;
    //var Cad=prod.toString();
  }
  //return ('['+Cad+']');
  var cad1='['
  for (var i=0 ;i<=9;i++){
    cad1=cad1+prod[i]+', ';
  }
  return (cad1+prod[10]+']');
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  if (numero>=100&&numero<=999){return true;}
  return false;
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
  do {
  i = i + 1;
  numero = numero + 5;
  } while (i < 8);
return (numero);

}
doWhile(32);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
