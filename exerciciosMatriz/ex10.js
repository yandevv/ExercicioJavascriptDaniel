function main() {
    let matriz = Array(5)
    let sumLinha4 = 0, sumCol2 = 0, sumDiagPrin = 0, sumDiagSec = 0; sumTotal = 0

    let aux = 4
    for(let i of [0, 1, 2, 3, 4]) {
        let row = Array(5)
        for(let j of [0, 1, 2, 3, 4]) {
            row[j] = parseInt(Number(prompt('Digite um número: ')))
            // row[j] = Math.floor(Math.random() * 20)

            sumTotal += row[j]

            if(i === 3) sumLinha4 += row[j]
            if(j === 1) sumCol2 += row[j]
            if(i === j) sumDiagPrin += row[j]
            if(j === aux) {
                sumDiagSec += row[j]
                aux--
            }
        }
        matriz[i] = row
    }

    matriz.forEach((row) => console.log(row.join(' ')))

    console.log(`\nSoma da 4ª linha: ${sumLinha4}`)
    console.log(`Soma da 2ª coluna: ${sumCol2}`)
    console.log(`Soma da diagonal principal: ${sumDiagPrin}`)
    console.log(`Soma da diagonal secundária: ${sumDiagSec}`)
    console.log(`Soma total da matriz: ${sumTotal}`)
}