function calc() {
    let partidos = [];

    cadastrarPartidos(partidos);

    let politicos = [];

    cadastrarPoliticos(politicos, partidos);

    for(let i = 1; i <= 10; i++) {
       let cod = Number(`Informe o código do ${i}º político para votar: `);

       while(politicos.find((politico) => politico.cod == cod) == undefined) {
            alert("O código do político não foi encontrado! Informe outro código de político para registrara o voto!");
            cod = Number(prompt(`Informe o código do ${i}º político para votar: `));
       }

       politicos = politicos.map((politico) => politico.cod == cod && politico.qtdVotos++);
    }

    console.log(politicos);
}

function cadastrarPoliticos(politicos, partidos) {
    for(let i = 0; i < 5; i++) {
        let politico = {
            cod: Number(prompt(`Informe o código do ${i+1}º político: `)),
            codPartido: Number(prompt(`Informe o código de partido do ${i+1}º político: `)),
            nome: prompt(`Informe o nome do ${i+1}º político: `),
            qtdVotos: 0,
            cargo: prompt(`Informe o cargo em que o ${i+1}º político ocupa: `)
        }

        while(partidos.find((partido) => partido.cod == politico.codPartido) == undefined) {
            alert("O código de partido não foi encontrado! Informe outro código de partido para esse candidato.");
            politico.codPartido = prompt(`Informe o código de partido para ${i+1}º político: `);
        }

        politicos.push(politico);
    }
}

function cadastrarPartidos(partidos) {
    for(let i = 0; i < 5; i++) {
        let partido = {
            cod: Number(prompt(`Informe o código do ${i+1}º partido: `)),
            nome: prompt(`Informe o nome do ${i+1}º partido: `),
            sigla: prompt(`Informe a sigla do ${i+1}º partido: `),
            presidente: prompt(`Informe o nome do presidente do ${i+1}º partido: `),
            numPoliticos: prompt(`Informe o número de políticos do ${i+1}º partido: `)
        }

        while(partidos.find((partidoAux) => partidoAux.cod == partido.cod) != undefined) {
            alert("Código de partido informado já existente! Informe outro código.");
            partido.cod = Number(prompt(`Informe o código do ${i+1}º partido: `));
        }

        partidos.push(partido);
    }
}