// --------------- CONTINUAÇÃO ARRAYS

// Como encontrar o índice de um elemento do array?
// indexOf -> passamos o valor buscado e retorna o primeiro índice em que o elemento 
// pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente

// strings

/* 
let arr = ['Maria', 'João', 'Pedro', 'Pedro']
console.log(arr.indexOf('Joao'))
console.log(arr.indexOf('Pedro'), 3) 

 */

// MANIPULAÇÃO DE STRING
/* let altura = Number(prompt("Digite sua altura: ").replace('çã', 'ca'))
console.log(altura)
 */

// number
/* let arr = [10, 154, 5, 13, 10]
let indiceEncontrado = arr.indexOf(10, 2)
console.log(arr.indexOf(9))
 */

// FOR IN - SEMPRE VAI TER O ACESSO A CADA INDICE DO ARRAY 
/* let usuariosEmail = ['joao@joao.com', 'maria@maria.com', 'pedro@pedro.com', 'joaquim@joaquim.com', 'joana@joana.com']

let usuariosSenha = ['senha123', 'senha456', 'senha789', 'blablabla@', 'senha0102']

for (const indice in usuarios) {
    console.log(`${indice} -> ${usuarios[indice]}`)
}


// FOR OF - SEM VAI TER O VALOR DE CADA POSIÇÃO DO ARRAY
for( const valor of usuarios ){
    console.log(valor)
} */

// VARIAVEIS COMPOSTAS
// Objetos - é composto de CHAVE e VALOR
// para acessar o valor é necessário acessar a chave

// chave e valor

/* const carro = {
    anoFabricacao: null,
    modelo: '',
    cor: ''
}

carro.anoFabricacao = 2022;
carro.modelo = 'Chevrolet'; 

carro.anoFabricacao

carro.placa = 'IPM1523'

const aluno = {} */







/* for(let count = 1; count <= 2; count++){
    let aluno = { 
        nome: '', 
        idade: null, 
        matricula: null, 
        ativo: true 
    }

    aluno.nome = prompt("Digite o nome do aluno: ") // Joao | 
    aluno.idade = Number(prompt("Digite sua idade")) // 38
    aluno.matricula = Number(prompt('Digite a matricula do aluno')) // 123
    aluno.ativo = confirm("Aluno está ativo no sistema? ") // false

    turma.push(aluno)

} */

//{ ... } // [0] - as infos do João
//{ ... } // [1] - as infos da Maria 

/* for (const aluno of turma){
    console.log(aluno.ativo)
} */

/* let turma = [
    // [0] - acesso através do indice
    { 
        nome: 'João', // objeto.propriedade
        idade: 28, 
        matricula: 123, 
        ativo: true 
    },

    // [1]
    { 
        nome: 'Maria', 
        idade: 28, 
        matricula: 456, 
        ativo: true 
    },
]

let alunoEncontrado = turma.find((valor, indice, array) => valor.nome === 'Maria' )

console.log(alunoEncontrado) */

//










