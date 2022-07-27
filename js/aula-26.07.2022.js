// REDUCE - como parametro ele sempre terá o valorInicial e o próximo valor da lista
//                [0]   [1]   [2]   [3]  [4]    [5]   [6]   [7]
/* let numeros = [ 5,   10,   15,   20,   25,   30,   35,   40 ]

let soma = numeros.reduce( ( valorInicial, proximoValor ) => valorInicial - proximoValor, 0)

console.log(soma) */

let estoque = [
    // [0] - inicial
    {
        produto: 'Sabão',
        quantidade: 50
    },

    // [1] - proximo
    {
        produto: 'Detergente',
        quantidade: 20
    },

    // [2]
    {
        produto: 'Massa',
        quantidade: 100
    },

    // [3]
    {
        produto: 'Cerveja',
        quantidade: 200
    },

    // [4]
    {
        produto: 'Refri',
        quantidade: 5
    },
]

// [0], [1], [2] ...


let somaEstoque = estoque.reduce( (valorInicial, proximoValor) =>  {
    // ex: [0] = quantidade 50   <  [1] = quntidade 20 ?
    if(valorInicial.quantidade < proximoValor.quantidade){
        //executa aqui se a chave quantidade do proximoValor
        // for maior que a chave quantidade do valorInicial
        return proximoValor
    }

    if(valorInicial.quantidade > proximoValor.quantidade){
         //executa aqui se a chave quantidade do valorInicial
        // for maior que a chave quantidade do proximoValor
        return valorInicial
    }

    // esse retorno pode ser do proximoValor ou o valorInicial pois só cai aqui se 
    // nenhuma das condições acima forem atendidas
    return proximoValor

})
// depois do } pode ser passado como parametro o um initialValue para o reduce
// se passado initialValue o parametro valorInicial assume o tipo da info passada como initialValue
// se não for passado esse parametro o parametro valorInicial assume o tipo e valor do dado armazenado
// no primeiro indice do array [0]
console.log(somaEstoque)