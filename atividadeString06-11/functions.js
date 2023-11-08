// 1. Calcula o comprimento de uma string (na˜o use a func¸a˜o strlen).
function ex1(text) {
    text = text.split('')
    let count = 0
    for(let i in text) {
        count++;
    }
    return count;
}

// 2. Mostre com um nome e imprima o nome somente se a primeira letra do nome for ‘a’ (maiúscula ou minúscula).
function ex2(name) {
    if(name[0].toLowerCase() == 'a') {
        console.log(name)
    }
}

// 3. Leia um nome e imprima as 4 primeiras letras do nome.
function ex3(name) {
    console.log(name.substr(0, 4))
}

//4. Digite um nome, calcule e retorne quantas letras tem esse nome.
function ex4(name) {
    let count = 0
    const re = /[a-z]/i
    for(let char of name) {
        if(re.test(char)) {
            count++
        }
    }
    
    return count
}

// 5. Ler nome, sexo e idade. Se sexo for feminino e idade menor que 25, imprime o nome da pessoa e a palavra “ACEITA”, caso contra´rio imprimir “NA˜ O ACEITA”.
function ex5(name, gender, age) {
    if(gender.toLowerCase() == 'feminino' && age < 25) {
        console.log(`${name} ACEITA`)
    } else {
        console.log(`${name} NÃO ACEITA`)
    }
}

// 6. Compara duas strings (na˜o use a função strcmp).
function ex6(text1, text2) {
    for(let i = 0; i < text1.length; i++) {
        if(text1[i] != text2[i]) {
            console.log('Texto diferente do outro.')
            return
        }
    }

    console.log('Os textos são iguais.')
}

// 7. Conte o nu´mero de 1’s que aparecem em um string.  Exemplo: “0011001” -> 3
function ex7(text) {
    const re = /^[0-9]*$/
    if(re.test(text)) {
        let nums = text.split('')
        let qtdUm = 0
        for(num of nums) {
            if(num == 1) {
                qtdUm++
            }
        }
        console.log(`Quantidade de números um: ${qtdUm}`)
    } else {
        console.log('String digitada não pode ser considerada como número.')
    }
}

// 8. Substitui as ocorreˆncias de um caractere ‘0’ em uma string por outro caractere ‘1’.
function ex8(text) {
    console.log(text.replaceAll(/0/g, '1'))
}

// 9. Receba uma palavra e a imprima de tra´s-para-frente.
function ex9(word) {
    word = word.split('').reverse().join('')
    console.log(word)
}

// 10. Receba do usua´rio uma string. O programa imprime a string sem suas vogais.
function ex10(text) {
    console.log(text.replaceAll(/[aeiou]/gi, '').trim())
}

//11. Receba uma palavra e calcule quantas vogais (a, e, i, o, u) possui essa palavra. Entre com um caractere (vogal ou consoante) e substitua todas as vogais da palavra dada por esse caractere.
function ex11(text) {
    let qtdVogais = text.replaceAll(/[^aeiou]/gi, '').split('').length
    console.log(`Quantidade de vogais: ${qtdVogais}`)

    vogal = prompt('Digite um caractere para fazer a troca de todas as vogais: ').split('')[0]
    console.log(`Frase transformada: ${text.replaceAll(/[aeiou]/gi, vogal)}`)
}

// 12. Ler uma frase e contar quantos caracteres sa˜o espac¸os em brancos.
function ex12(text) {
    console.log(`Quantidade de espaços brancos: ${text.replaceAll(/\S/g, '').split('').length}`)
}

// 13. Leia um vetor contendo letras de uma frase inclusive os espac¸os em branco.  Retirar os espac¸os em branco do vetor e depois escrever o vetor resultante.
function ex13(text) {
    text = text.replaceAll(/\s/g, '')
    console.log(text)
}

// 14. Fac¸a um programa em que troque todas as ocorreˆncias de uma letra L1 pela letra L2 em uma string. A string e as letras L1 e L2 devem ser fornecidas pelo usua´rio.
function ex14() {
    let frase = prompt('Digite a frase: ')
    let l1 = prompt('Digite a primeira letra: ').split('')[0]
    let l2 = prompt('Digite a segunda letra: ').split('')[0]

    console.log(`Frase transformada: ${frase.replaceAll(l1, l2)}`)
}

// 15. Leia a idade e o primeiro nome de 10 pessoas. Seu programa deve terminar quando uma idade negativa for digitada. Ao terminar, seu programa deve escrever o nome e a idade das pessoas mais jovens e mais velhas.
function ex15() {
    pessoas = []
    for(let i = 0; i < 10; i++) {
        idade = parseInt(prompt(`Digite a idade da ${i+1}ª pessoa: `))

        if(idade < 0) break

        pessoas.push({
            idade: idade,
            nome: prompt(`Digite o nome da ${i+1}ª pessoa: `)
        })
    }

    pessoas.sort((a, b) => a.idade - b.idade)
    console.log(`Pessoa mais nova:\nIdade: ${pessoas[0].idade}\nNome: ${pessoas[0].nome}`)
    console.log(`Pessoa mais velha: \nIdade: ${pessoas[pessoas.length - 1].idade}\nNome: ${pessoas[pessoas.length - 1].nome}`)
}

// 16. Receba  duas  frases  distintas  e  imprima  de  maneira  invertida, trocando as letras A por *.
function ex16(text1, text2) {
    let tText1 = text1.replaceAll(/a/gi, '*')
    let tText2 = text2.replaceAll(/a/gi, '*')
    console.log(`${tText1.split('').reverse().join('')}${tText2.split('').reverse().join('')}`)
}

// 17. Recebe uma string S e inteiros na˜o-negativos I e J e imprima o segmento S[I..J].
function ex17() {
    
}