const produto ={
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto : 0.05
}

//Use spread
function clone(objeto){
    return {...objeto}
}

const novoProduto = clone(produto);
novoProduto.nome = 'Lapis Preto';
novoProduto.preco = 1.2;

console.log(produto, novoProduto);
