/*1. Fácil - 
Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.
*/

const input = prompt("Insira um valor");
for (let i = 0; i <= 10; i++) {
  const result = input * i;
  const output = `${input} x ${i} = ${result}`;
  console.log(output);
}
