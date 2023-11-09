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
function ex17(s, i, j) {
    let segmento = ''

    for(i; i <= j; i++) {
        segmento += s.split('')[i]
    }

    console.log(`Segmento: ${segmento}`)
}

// 18. Recebe  do  usua´rio  uma  string  S,  um  caractere  C,  e  uma posic¸a˜o I e devolve o ´ındice da primeira posic¸a˜o da string onde foi encontrado o caractere C. A procura deve comec¸ar a partir da posic¸a˜o I.
function ex18() {
    let s = prompt('Digite a frase desejada: ')
    let c = prompt('Digite o carácter que deseja procurar: ')
    let i = parseInt(prompt('Digite o valor do index: '))

    s = s.split('')
    for(i; i < s.length; i++) {
        if(s[i] == c) {
            console.log(`Index do carácter procurado: ${i}`)
            return
        }
    }
    console.log('Carácter não encontrado com as especificações.')
}

// 19. leia duas palavras e diga qual deles vem primeiro na ordem alfabe´tica. Dica: ‘a’ e´ menor do que ‘b’.
function ex19(palavra1, palavra2) {
    console.log(`A palavra que vem primeiro é a: ${[palavra1, palavra2].sort()[0]}`)
}

// 20. O co´digo de Ce´sar e´ uma das mais simples e conhecidas te´cnicas de criptografia. E´  um tipo de substituic¸a˜o na qual cada letra do texto e´ substitu´ıda por outra, que se apresenta no alfabeto abaixo dela um nu´mero fixo de vezes.  Por exemplo, com uma troca de treˆs posic¸o˜es, ‘A’ seria substitu´ıdo por ‘D’, ‘B’ se tornaria ‘E’, e assim por diante. Fac¸a uso desse Co´digo de Ce´sar (3 posic¸o˜es), entre com uma string e retorne a string codificada. Exemplo:
function ex20(text) {
    let dictCesar = {
        'a': 'd',
        'b': 'e',
        'c': 'f',
        'd': 'g',
        'e': 'h',
        'f': 'i',
        'g': 'j',
        'h': 'k',
        'i': 'l',
        'j': 'm',
        'k': 'n',
        'l': 'o',
        'm': 'p',
        'n': 'q',
        'o': 'r',
        'p': 's',
        'q': 't',
        'r': 'u',
        's': 'v',
        't': 'w',
        'u': 'x',
        'v': 'y',
        'w': 'z',
        'x': 'a',
        'y': 'b',
        'z': 'c'
    }
    
    let stringSeparada = text.split('')

    for(let i = 0; i < stringSeparada.length; i++) {
        if(/[A-Z]/i.test(stringSeparada[i])) {
            stringSeparada[i] = dictCesar[stringSeparada[i].toLowerCase()]
        }
    }

    console.log(`Frase transformada: ${stringSeparada.join('')}`)
}

// 21. Dada uma string, diga se ela e´  um pal´ındromo ou na˜o.  Lembrando que um pal´ındromo e´  uma palavra que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. 
function ex21(text) {
    let textSeparada = text.split(''), textSeparadaInv = text.split('').reverse()

    for(let i = 0; i < textSeparada.length; i++) {
        if(textSeparada[i] != textSeparadaInv[i]) {
            console.log('Não é um palíndromo.')
            return
        }
    }

    console.log('É um palíndromo.')
}

// 22.Leia duas strings fornecidas pelo usua´rio e verifique se a se- gunda string lida esta contida no final da primeira, retornando o resultado da verificac¸a˜o.
function ex22(string1, string2) {
    let string1sep = string1.trim().split(' ')
    let exp = `${string2}\\b`
    let re = new RegExp(exp, 'gi')
    console.log(re)
    if(re.test(string1sep[string1sep.length - 1])) {
        console.log('O segundo texto aparece no final do primeiro texto.')
        return
    }
    console.log('O final do primeiro texto não condiz com o segundo texto')
}

function ex23(str1, str2, n) {
    str2sep = str2.split('')
    for(let i = 0; i < n; i++) {
        str1 += str2[i]
    }
    str1 += '\\0'
    console.log(`Str1: ${str1}`)
}

function ex24(a, b) {
    let re = new RegExp(b, 'gi')
    let comb = [...a.matchAll(re)]
    console.log(`Quantidade de vezes que a string 'b' estava em 'a': ${comb.length}`)
}

// 25. Leia uma cadeia de caracteres no formato “DD/MM/AAAA” e copie o dia, meˆs e ano para 3 varia´veis inteiras. Antes disso, verifique se as barras esta˜o no lugar certo, e se DD, MM e AAAA sa˜o nume´ricos.
function ex25(date) {
    dateSplit = date.split('/')

    let re = /[^0-9]/
    if(re.test(dateSplit[0]) || re.test(dateSplit[1]) || re.test(dateSplit[2]) || date.split('')[2] != '/' || date.split('')[5] != '/') {
        console.log('Data inválida!')
        return
    }

    let dia = dateSplit[0], mes = dateSplit[1], ano = dateSplit[2]

    if(ano.split('').length != 4) {
        console.log('Data inválida!')
        return
    }

    console.log(`Dia: ${dia}\nMês: ${mes}\nAno: ${ano}`)
}