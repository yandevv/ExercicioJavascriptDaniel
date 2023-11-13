function main() {
    let matrizA = Array(8)
    let matrizB = Array(8)
    let matrizSomada = Array(8)
    let matrizSub = Array(8)

    for(let i = 0; i < 8; i++) {
        let row = Array(3)
        for(let j = 0; j < 3; j++) {
            row[j] = Math.floor(Number(prompt('Digite um número: ')))
            // row[j] = Math.floor(Math.random() * 5)
        }
        matrizA[i] = row
    }

    for(let i = 0; i < 8; i++) {
        let row = Array(3)
        for(let j = 0; j < 3; j++) {
            row[j] = Math.floor(Number(prompt('Digite um número: ')))
            // row[j] = Math.floor(Math.random() * 5)
        }
        matrizB[i] = row
    }

    for(let i = 0; i < 8; i++) {
        let rowSum = Array(3), rowSub = Array(3)
        for(let j = 0; j < 3; j++) {
            rowSum[j] = matrizA[i][j] + matrizB[i][j]
            rowSub[j] = matrizA[i][j] - matrizB[i][j]
        }
        matrizSomada[i] = rowSum
        matrizSub[i] = rowSub
    }

    console.log(matrizA)
    console.log(matrizB)

    console.log('Matriz somada:')
    matrizSomada.forEach((value) => console.log(value.join(' ')))
    console.log('\nMatriz subtraída: ')
    matrizSub.forEach((value) => console.log(value.join(' ')))
}