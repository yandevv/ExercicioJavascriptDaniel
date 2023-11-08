function main() {
    let matriz = [], count = 0;
    for(let i = 0; i < 3; i++) {
        matriz[i] = [];
        for(let j = 0; j < 5; j++) {
            matriz[i][j] = prompt('Digite um número inteiro: ');
            // matriz[i][j] = Math.floor(Math.random() * (30));
            if(matriz[i][j] <= 20 && matriz[i][j] >= 15) {
                count++;
            }
        }
    }

    console.log(`A quantidade de elementos entre 15 a 20 são: ${count}`);
}