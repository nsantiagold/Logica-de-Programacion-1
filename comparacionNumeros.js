const prompt = require("prompt-sync")();
let numero1 = parseInt(prompt("Ingresa el primer numero: "));
let numero2 = parseInt(prompt("Ingresa el segundo numero: "));
let numero3 = parseInt(prompt("Ingresa el tercer  numero: "));

if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los numeros son iguales ", numero1, numero2, numero3);
} else if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log("De mayor a menor:", numero1, numero2, numero3);
    console.log("De menor a mayor:", numero3, numero2, numero1);
  } else {
    console.log("De mayor a menor:", numero1, numero3, numero2);
    console.log("De menor a mayor:", numero2, numero3, numero1);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log("De mayor a menor:", numero2, numero1, numero3);
    console.log("De menor a mayor:", numero3, numero1, numero2);
  } else {
    console.log("De mayor a menor:", numero2, numero3, numero1);
    console.log("De menor a mayor:", numero1, numero3, numero2);
  }
} else {
  if (numero1 >= numero2) {
    console.log("De mayor a menor:", numero3, numero1, numero2);
    console.log("De menor a mayor:", numero2, numero1, numero3);
  } else {
    console.log("De mayor a menor:", numero3, numero2, numero1);
    console.log("De menor a mayor:", numero1, numero2, numero3);
  }
}
