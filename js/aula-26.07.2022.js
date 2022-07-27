// REDUCE - como parametro ele sempre terá o valorInicial e o próximo valor da lista
//             [0] [1] [2] ....
/* let numeros = [ 5, 10, 15, 20, 25, 30, 35, 40 ]

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
let algumacoisa = []
let outracoisa = []

let somaEstoque = estoque.reduce( (valorInicial, proximoValor) =>  {
    // [ 0 ] = quantidade 50   |  [1] = quntidade 20
    if(valorInicial.quantidade < proximoValor.quantidade){
        
        return proximoValor
    }

    if(valorInicial.quantidade > proximoValor.quantidade){
        
        return valorInicial
    }

    return proximoValor

})

(valor, indice, array)



console.log(somaEstoque)