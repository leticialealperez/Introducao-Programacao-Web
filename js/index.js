// --------------------- REPETIÇÕES -------------------------

// WHILE (ENQUANTO) - TESTE LÓGICO SEMPRE NO INICIO DA EXECUÇÃO 
/* 

let repete = confirm("Voce deseja repetir a operação?")
let contador = '';

while(repete){
    contador = contador + 1
    
    console.log(`Repetiu ${contador} vezes`)
    
    repete = confirm("Voce deseja repetir novamente a operação?")
    
    console.log(repete)
}

console.log(`Repetiu ${contador} vezes`) 

*/


// DO WHILE ( FAÇA ENQUANTO(true) ) - executa primeiro e testa depois - VAI EXECUTAR AO MENOS UMA VEZ O BLOCO
/* 

let repete = confirm("Voce deseja repetir a operação?")
let contador = 0

do{
    contador++
    console.log(`Repetiu ${contador} vezes`)

    repete = confirm("Voce deseja repetir novamente a operação?")
    
    console.log(repete)

} while(repete) 

console.log(`Repetiu ${contador} vezes`) 

*/



// FOR 
// parametro 1 - declaração da variavel contadora que vai ficar responsavel por dizer quantas vezes irá repetir
// parametro 2 - teste lógico para que o bloco se repetida - SÓ REPETE SE O RESULTADO FOR TRUE
// parametro 3 - qual é a regra de mudança do valor da variavel contadora
// valida e executa - ao final incrementa/modifica o valor de count
/* 

for(let count = 0; count < 10; count++){
    console.log(count)
} 

*/

// ------------------- VARIAVEIS ---------------
// VARIAVEIS PRIMITIVAS 
// string, number, boolean, any, undefined



// VARIAVEIS COMPOSTAS
// ARRAYS - listas - vetores -> listas de valores -> composta por INDICE e VALOR

// lista de string
//let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'MASSA']
// length(tamanho) == 5
// qual a ultima posição da lista? 4
// OBS -> LENGTH !== ULTIMO INDICE

// lista de number
// let jogoLoteria = [ 6, 34, 27, 45, 8, 17, 1.8 ]

// lista de boolean
// let acertosProva = [ true, true, false, true, false, false, false ]

// listas mistas - armazena tipos de dados diversos (sim, isso também pode!)
// let dadosDiversos = [ 'Joana', true, 159, 147, false, false, 'Marcelo', 'teste@teste.com', true ]


// NOTA: um array ele sempre será formado de VALOR e INDICE

// Como acessar o valor de um array? ATRAVÉS DE SEU INDICE
// ex:
/* 

    let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'MASSA']

    listaMercado[0] // valor será 'ARROZ'
    listaMercado[1] // valor será 'FEIJÃO'
    listaMercado[2] // valor será 'CARNE'
    listaMercado[3] // valor será 'BATATA'
    listaMercado[4] // valor será 'MASSA'


 */

// Como achar um indice do dado através do valor armazenado? 
// (antigamente os egipcios faziam assim 👇)
// ex:
/* 

    let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'MASSA']

    for(let indice = 0; indice < listaMercado.length;  indice++){
        
        //console.log(listaMercado[indice])

        if(listaMercado[indice] === 'BATATA'){
            console.log(`achei a batata na posição ${indice}`)
        }
    }

*/

// Como ADICIONAR um registro em um array dinamicamente? 
// push() -> adiciona o novo valor sempre ao FINAL da lista e retorna o novo tamanho do array
// unshift() -> adiciona o novo valor sempre no INICIO da lista e retorna o novo tamanho do array
// ex:
/* 
    let listaMercado = []

    for(let count = 1; count <= 5; count++){
        let produto = prompt('Digite o produto a ser adicionado no carrinho: ')

        // adicionar AO FINAL DO ARRAY - push()
        //console.log(listaMercado.push(produto.toUpperCase())) // valor logado -> length 5

        // adicionar NO COMEÇO DO ARRAY - unshift
        //listaMercado.unshift(produto.toUpperCase());
    } 

 */

// Como REMOVER um registro em um array dinamicamente? 
// pop() -> remove um valor do FINAL da lista (sempre a ultima posição) e retorna o valor removido do array
// shift() -> remove um novo valor do INICIO da lista (sempre a primeira posição) e retorna o valor removido do array
// ex:

/* 
    let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'MASSA']
    
    //REMOVER DO FINAL DA LISTA - pop()
    //let itemRemovidoPop = listaMercado.pop()
    //console.log(listaMercado)
    //console.log(itemRemovidoPop)

    //REMOVER DO INICIO DA LISTA - shift()
    //let itemRemovidoShift = listaMercado.shift()
    //console.log(listaMercado)
    //console.log(itemRemovidoShift)

 */


// Como COPIAR valores de um array para um outro array?
// SLICE - retorna uma nova lista com uma cópia dos valores desejados de uma outra lista
// START - está pedindo o indice inicial (de onde vai começar a copiar)
// END - pedindo quando vai parar (qual o indice em que irá parar a cópia)
//ex:
/* 

    let listaMercadoOriginal = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'MASSA']
    
    const novaListaCopia = listaMercadoOriginal.slice(1, 3)
    
    console.log(novaListaCopia) // o que será mostrado no console -> ['FEIJÃO', 'CARNE']



 */


// Como REMOVER valores de um array?
// SPLICE - remove valores de qualquer posição da lista e retorna os elementos removidos
// START - indice inicial para delete (começa a excluir do indice informado aqui)
// DELETECOUNT - quantidade de registros a ser deletado (sempre do indice informado pra frente)
// ex:
/* 

    let listaMercadoOriginal = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'MASSA']

    let novaListaDelete = listaMercadoOriginal.splice(1, 1)
    console.log(novaListaDelete) // valor a ser mostrado -> ['FEIJÃO', 'CARNE']
    console.log(listaMercadoOriginal)    // valor a ser mostrado -> ['ARROZ', 'BATATA', 'MASSA']



 */

// Como encontrar um VALOR em uma lista? 
// (os tech ninja fazem assim 👇)
// FIND - encontra
// Utilizado para procurar ou verificar em um array o primeiro elemento que satisfazer ao teste lógico implementado
// OBS: Sempre retorna o primeiro elemento encontrado
// VALOR - sempre vai disponibilizar para busca o valor dentro de cada indice
// INDICE - o proprio indice que esta sendo percorrido
// ARRAY - todos os valores dentro deste array

// ORDEM 1 - valor
// ORDEM 2 - indice
// ORDEM 3 - array

// sintaxe (sem "return") ->   let itemEncontrado = listaMercado.find((valor, indice, array) => valor === input )
// sintaxe (com "return") ->   let itemEncontrado = listaMercado.find((valor, indice, array) => { return valor === input })

// IMPORTANTE! Se usar os bigodes tem que usar "return"!
// ex1: (sem bigode)



    /* let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'CARNE']
    let input = prompt('Digite o produto a ser buscado: ').toUpperCase()

    let produtoEncontrado = listaMercado.find( (valor) =>  valor === input )
    console.log(produtoEncontrado)  */ // mostra o produto encontrado ou undefined quando não encontra nada que atenda à condição
    // teste com um produto que não existe no array!



// ex2: (sem bigode, sem retorno e utilizando o operador ternário )
/* 
    let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'CARNE']

    listaMercado.find((valor, indice, array) => valor === 'BATATA' ? console.log(valor) : console.log(`não deu bom no indice ${indice}`) ) 

 */

// ex3: (com bigode e com retorno)
/* 
    let listaMercado = ['ARROZ', 'FEIJÃO', 'CARNE', 'BATATA', 'CARNE']
    let input = prompt('Digite o produto a ser buscado: ').toUpperCase()

    let produtoEncontrado = listaMercado.find( (valor) => {
        if(valor === input){
            return valor
        }
    } )
    
    console.log(produtoEncontrado) */ // mostra o produto encontrado ou undefined quando não encontra nada que atenda à condição
    // teste com um produto que não existe no array!





// Como encontrar o INDICE de um valor em uma lista? 
// (os tech ninja fazem assim 👇)
// FINDINDEX - encontra o indice
// Vai procurar e retornar o indice do elemento que passar no teste implementado
// OBS: Sempre retorna o indice do primeiro elemento encontrado
// VALOR - sempre vai disponibilizar para busca o valor dentro de cada indice
// INDICE - o proprio indice que esta sendo percorrido
// ARRAY - todos os valores dentro deste array

// ORDEM 1 - valor
// ORDEM 2 - indice
// ORDEM 3 - array

// sintaxe (sem "return") ->   let indiceEncontrado = listaMercado.findIndex((valor, indice, array) => valor === <o que to procurando> )
// sintaxe (com "return") ->   let indiceEncontrado = listaMercado.findIndex((valor, indice, array) => { return valor === <o que to procurando> })

// IMPORTANTE! Se usar os bigodes tem que usar "return"!
// IMPORTANTE! O findIndex retorna o indice encontrado e quando não encontra retorna -1
// ex1: (sem bigode e com retorno )
/* 


    let usuarios = ['joao@joao.com', 'maria@maria.com', 'pedro@pedro.com', 'joaquim@joaquim.com', 'maria@maria.com']
    const inputEmail = prompt('Digite o e-mail a ser removido da lista: ')

    let indiceEncontrado = usuarios.findIndex((valor) =>  valor === inputEmail)

    if(indiceEncontrado === -1){

        // executa aqui se não encontrar o email digitado pelo usuário
        alert('E-mail não encontrado')
        
    }else {
        // remove o usuário encontrado da lista através do indice retornado
        let usuarioRemovido = usuarios.splice(indiceEncontrado, 1)
        console.log(`Usuário Removido: ${usuarioRemovido}, Indice: ${indiceEncontrado}`)
    }

 */

// ex2: (sem bigode, sem retorno e usando o operador ternário )
/* 

    let usuarios = ['joao@joao.com', 'maria@maria.com', 'pedro@pedro.com', 'joaquim@joaquim.com', 'maria@maria.com']
    const inputEmail = prompt('Digite o e-mail a ser removido da lista: ')

    usuarios.findIndex((valor, indice) =>  valor === inputEmail ? console.log(usuarios.splice(indice, 1)) : console.log(`No indice ${indice} não achei o dado buscado`))

*/


// ex3: (com bigode e com retorno)


    let usuarios = [
        'joao@joao.com', // 0
        'maria@maria.com', //1
        'pedro@pedro.com', //2
        'joaquim@joaquim.com', //3
        'maria@maria.com' //4
    ]
    const inputEmail = prompt('Digite o e-mail a ser removido da lista: ')

    let indiceEncontrado = usuarios.findIndex((valor, indice) =>  {
        if(valor === inputEmail){
            //return valor // aqui independente se for return de "valor"
            return indice  // ou se for return de "indice" -> SEMPRE IRÁ RETORNAR O INDICE
        }
    })

    if(indiceEncontrado === -1){

        // executa aqui se não encontrar o email digitado pelo usuário
        alert('E-mail não encontrado')
        
    }else {
        // remove o usuário encontrado da lista através do indice retornado
        let usuarioRemovido = usuarios.splice(indiceEncontrado, 1)
        console.log(`Usuário Removido: ${usuarioRemovido}, Indice: ${indiceEncontrado}`)
    }





