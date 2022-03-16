/*
6. Fácil
 - Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000).
Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.
*/
const storeB = 54000;

let storeA = 0;
for (let i = 1; i <= 5; i++) {
  const value = prompt(`Qual foi o valor da compra do cliente ${i}?`);
  storeA += Number(value);
}
console.log("Faturamento loja A", storeA);
console.log("Faturamento loja B", storeB);

if (storeA > storeB) {
  console.log("O faturamento da loja A foi maior que o faturamento da loja B");
} else {
  console.log(
    "O faturamento da loja A não foi maior que o faturamento da loja B"
  );
}
