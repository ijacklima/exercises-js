/*
9. Fácil - 
Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.
*/
let counter = 0;
for (let i = 1; i <= 10; i++) {
  const value = prompt(`Qual é a idade do usuário ${i}?`);
  const parsedValue = parseInt(value);
  if (parsedValue >= 18) {
    counter++;
  }
}
console.log("Pessoas maiores de idade:", counter);
