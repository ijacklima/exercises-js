let lista = [1 , 3, 5 ];
let listaIncluir = [2, 4];

for(let i = 0; i < listaIncluir.length; i++){
  for(let j = 0; j < lista.length; j++){
    if(lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]);
      j++;
    }
  }
}

const listResult = [1, ...listaIncluir, 5];
console.log(listResult)
