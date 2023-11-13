function main() {
    let matrizM = Array(4)
    for(let i = 0; i < 4; i++) {
      matrizM[i] = Array(6)
    }

    let matrizN = Array(6)
    for(let i = 0; i < 6; i++) {
      matrizN[i] = Array(4)
    }

    let sumLinhas = [], sumCols = []

    for(let i = 0; i < 4; i++) {
        let sumLinha = 0

        for(let j = 0; j < 6; j++) {
            matrizM[i][j] = Number(prompt('Digite um número: '))
            // matrizM[i][j] = Math.floor(Math.random() * 10)
            sumLinha += matrizM[i][j]
        }

        sumLinhas.push(sumLinha)
    }

    for(let i = 0; i < 6; i++) {
        let sumCol = 0

        for(let j = 0; j < 4; j++) {
            matrizN[i][j] = Number(prompt('Digite um número: '))
            // matrizN[j][i] = Math.floor(Math.random() * 10)
            sumCol += matrizN[j][i]
        }

        sumCols.push(sumCol)
    }

    console.log('Soma das linhas (Matriz M): ')
    sumLinhas.forEach((linha, index) => console.log(`${index+1}ª Linha: ${linha}`))
    console.log('\nSoma das colunas (Matriz N): ')
    sumCols.forEach((col, index) => console.log(`${index+1}ª Coluna: ${col}`))
}