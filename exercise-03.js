/*
3. Fácil - 
Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por ll. produzam resto igual a 2.

*/
for (let i = 1000; i <= 2000; i++) {
  const result = i % 11;
  if (result === 2) {
    console.log(i);
  }
}

/*
Antes de chegar no resultado:
for (let i = 1000; i <= 2000; i++) {
  const result = i % 11;
  if (result === 2) {
    const output = `${i} % 11 = ${result}`;
    console.log(output);
  }
}
*/
