function main() {
    let matrizNotas = new Array(5), alunos = new Array(15).fill({}), sumMedias = 0, mensagem = '';
    
    for(let i = 0; i < 15; i++) {
        // alunos[i].nome = prompt(`Digite o nome do ${i+1}º aluno: `);
        alunos[i].nome = i+1;
        matrizNotas[i] = new Array(5);
        let sumNotas = 0;
        for(let j = 0; j < 5; j++) {
            // matriz[i][j] = parseFloat(prompt(`Digite a nota da ${j+1}ª prova para o ${i+1}º aluno: `));
            matrizNotas[i][j] = Math.floor(Math.random() * 11);
            sumNotas += matrizNotas[i][j];
        }
        sumMedias += sumNotas / 5;
        alunos[i].media = sumNotas / 5;
        alunos[i].situacao = sumNotas / 5 >= 6 ? 'Aprovado' : 'Reprovado';
        mensagem += `${alunos[i].nome} / Média: ${alunos[i].media} / Situação: ${alunos[i].situacao}\n`;
    }

    let mediaClasse = sumMedias / 15;

    console.log(`${mensagem}\nMédia da Classe: ${mediaClasse.toFixed(2)}`)
}