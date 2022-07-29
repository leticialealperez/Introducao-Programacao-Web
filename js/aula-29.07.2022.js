// LISTA UTILIZADA NOS EXEMPLOS
/* 

let pizzas = [
    // [0]
    {
        sabor: 'mussarela',
        preco: 9.90,
        estoque: 10,
    },

    // [1]
    {
        sabor: 'calabresa',
        preco: 19.90,
        estoque: 0
    },

    // [2]
    {
        sabor: 'portuguesa',
        preco: 29.90,
        estoque: 10
    },

    // [3]
    {
        sabor: 'marguerita',
        preco: 49.90,
        estoque: 20
    },
] 

*/


// MAP  - SEMPRE RETORNA UM ARRAY DO MESMO TAMANHO QUE O ORIGINAL
// serve para percorrer um array e manipula-lo da forma que a gente quiser
// O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada.
// O método map não modifica o array original. No entanto, a função callback invocada por ele pode fazê-lo.
// OBS: o retorno sempre será um array do MESMO TAMANHO QUE O ORIGINAL
// SINTAXE      array.map(() =>  )

/* 

    let dobrarValorEstoque = pizzas.map( ( valor, indice, array )  =>  {
    
        return valor.estoque * 2

    })

    console.log(dobrarValorEstoque) 


*/

// OUTRO EXEMPLO DO MAP

/* 

const produtos = [
   {
       nome : "Smartphone 5' Android",
       preco : 1200
   },
   {
       nome : "Notebook 4GB Windows 10",
       preco : 2100
   },
   {
       nome : "SmartTV 50' LED",
       preco : 8700
   }
];

const produtosComReajuste = produtos.map((valor, indice, array) => {
   
   // vai percorrer cada item do array de produtos e criar um novo objeto
   // alterando apenas o preço do produto
    const novoProduto = {
        nome : valor.nome,
        preco : valor.preco * 1.15
   }

   // em cada execução (para cada item do array) retorna um novo produto 
   // desta forma monta um novo array apenas com o preço modificado em relação ao array original
   return novoProduto
}); 

*/




// SOME - ele vai percorrer o array e verificar se existe ALGUM (AO MENOS 1 ) registro que atenda à condição que a gente passar pra ele
// OBS: RETORNO É SEMPRE BOOLEANO ( true ou false )
// SINTAXE   array.some( () => )

/* 

    let encontrou = pizzas.some( ( valor, indice, array ) => {

        if(valor.sabor === 'misto' || valor.preco === 29.90 || valor.estoque === 0){
            return true
        }

        return false
    })

    if(encontro){

        alert("A verificação foi atentida, entrou no if")
    }else {

        alert("Não encontrou nenhum registro que corresponde à condição do if")
    } 

*/



// EVERY  -- só tem um tipo de retorno ( true ou false )
// só retorna TRUE se TODOS os registros atenderem a condição especificada para a função

/* 
    // retorna true se todas os registros atenderem a condição 

    let verificaPrecoTabela = pizzas.every( (valor, indice, array ) =>  {
        if(valor.preco === 19.90){
            return true
        }
    })

    console.log(verificaPrecoTabela) 

*/



// FILTER  - percorre o array e filtra os dados conforme a validação que passarmos para a função
// OBS - Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().
// OBS - retorna um novo array com os valores do array original que atenderam a condição passada

/* 

// cria um novo array somnete com as pizzas que tiverem o preço menor que 20.00
const pizzasPromocao = pizzas.filter( (valor, indice, array ) =>  valor.preco < 20.0)

console.log("Filter ", pizzasPromocao)


*/




// ForEach - PARA CADA item da lista, executa a lógica que a gente quiser
// OBS: modifica o array original!

/* 

pizzas.forEach( (valor) => (valor.sabor === 'marguerita') ? (valor.preco = 0) : (valor.preco = valor.preco));

console.log(pizzas)


for(const valor of pizzas){
    if(valor.sabor === 'marguerita'){
        valor.preco = 0;
    }
} 


*/






// FUNÇÕES - Javascript
// OBS: toda função precisa ser chamada para que a lógica dentro dela seja executada


// --- COM PARAMETRO E SEM RETORNO - tradicional

/* function somarValores(valorNumero1, valorNumero2){

    const soma = valorNumero1 + valorNumero2
    console.log(soma)

} 

somarValores(10, 30);
*/


// VARIAVEIS DE ESCOPO GLOBAL - livre de chaves {}
/* 

let numero1 = 10;
let numero2 = 40; 

*/

// --- SEM PARAMETRO E SEM RETORNO - tradicional
/* 

// essa função ira utilizar as varáveis globais
function somarValores(){

    const soma = numero1 + numero2
    console.log(soma)

}

somarValores(); 

*/

// -- COM PARAMETRO E COM RETORNO
/* 

function somarValores(valorNumero1, valorNumero2){

    const soma = valorNumero1 + valorNumero2
    
    
    // só retorna um valor por vez
    return soma
} 

const resultado = somarValores(10, 40)
 

*/


// let numero1 = 10
// let numero2 = 100

// ---- ARROW FUNCTIONS - POR PADRÃO SÃO FUNÇÕES ANÔNIMAS, NÃO TEM NOME
// Retorno: Não precisamos declarar explicitamente o retorno quando temos um bloco apenas de código, a última expressão realizada vai ser o retorno da arrow function.

const dividir1 = (numero1, numero2) => numero1 / numero2
console.log(dividir1(10, 2))


// o comando acima é equivalente ao seguinte:
/* 
    function dividir1(numero1, numero2){

        return numero1 / numero2
    }
 */


// REGRAS - se não tiver parametros é obrigatório o uso dos parenteses
// FUNCIONALIDADE - se tiver apenas 1 parametro, os parenteses podem ser omitidos
// Mais de um parametro não é possivel omitir os parenteses



















