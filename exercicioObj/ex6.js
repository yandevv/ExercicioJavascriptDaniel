//1. Faça um programa em JS que guarde em um vetor dados de 5 farmácias: Código, nome e endereço
// 1.1 Não é possível crias duas farmácias com o mesmo código

// 2.Em seguida, guarde em um vetor dados de 10 remédios: código da farmácia, nome do remédio, qtde em estoque e preço
// 2.1 Não é possível cadastrar um remédio de uma farmácia que não exista

// Ao final, efetive a compra de 5 remédios, e atualize o estoque

function calc() {
    let farmacias = [];
    let remedios = [];

    cadastraFarmacias(farmacias);
    cadastraRemedios(remedios, farmacias);
    venderRemedio(remedios);
}

const cadastraFarmacias = (farmacias) => {
    for (let i = 0; i < 5; i++) {
        let farmacia = {
            // cod: Number(prompt(`Informe o número de código da ${i + 1}ª farmácia: `)),
            cod: Math.floor(Math.random() * 999 + 1),
            nome: prompt(`Informe o nome da ${i + 1}ª farmácia: `),
            endereco: prompt(`Informe o endereço da ${i + 1}ª farmácia: `)
        }

        while (farmacias.findIndex((farmaciaAux) => farmaciaAux.cod == farmacia.cod) != -1) {
            alert('O valor de código digitado já pertence à outra farmácia. Digite outro código novamente.');
            farmacia.cod = Number(prompt(`Informe o número de código da ${i + 1}ª farmácia: `));
        }

        farmacias.push(farmacia);
    }

    console.log(farmacias);
}

const cadastraRemedios = (remedios, farmacias) => {
    for (let i = 0; i < 10; i++) {
        let remedio = {
            // cod: Number(prompt(`Informe o número do código do ${i + 1}º remédio: `)),
            cod: Math.floor(Math.random() * 999 + 1),
            // codFarmacia: Number(prompt(`Informe o número de código da farmácia do ${i + 1}º remédio: `)),
            codFarmacia: farmacias[Math.floor(Math.random() * 4)].cod,
            nome: prompt(`Informe o nome do ${i + 1}º remédio: `),
            // qtd: Number(prompt(`Informe a quantidade do ${i + 1}º remédio: `)),
            qtd: Math.floor(Math.random() * 999 + 1),
            // preco: Number(`Informe o preço do ${i + 1}º remédio: `)
            preco: (Math.random() * 770 + 30).toFixed(2)
        }

        while (farmacias.findIndex((farmacia) => farmacia.cod == remedio.codFarmacia) == -1) {
            alert('O valor do código da farmácia digitado não pertence à nenhuma farmácia. Digite outro código novamente.');
            remedio.codFarmacia = Number(prompt(`Informe o número de código da farmácia do ${i + 1}º remédio: `));
        }

        while (remedios.findIndex((remedioAux) => remedioAux.cod == remedio.cod) != -1) {
            alert('O valor do código do remédio já existe para outro remédio, por favor digite um código distinto!')
            remedio.cod = Number(prompt(`Informe o número do código do ${i + 1}º remédio: `));
        }

        remedios.push(remedio);
    }

    console.log(remedios);
}

const venderRemedio = (remedios) => {
    for (let i = 1; i <= 5; i++) {
        // let codRemedio = Number(prompt(`Informe o código do ${i}º remédio em que deseja comprar: `));
        let codRemedio = remedios[Math.floor(Math.random() * 9)].cod;

        let remedioIndex = remedios.findIndex((remedio) => remedio.cod == codRemedio);

        while (remedioIndex == -1) {
            alert("Número de código inválido, digite outro novamente!");
            codRemedio = Number(prompt(`Informe o código do ${i}º remédio em que deseja comprar: `));
            remedioIndex = remedios.findIndex((remedio) => remedio.cod == codRemedio);
        }

        let qtdeComprada = Number(prompt(`Digite a quantidade em que quer comprar do remédio de código ${codRemedio}`));
        while (qtdeComprada > remedios[remedioIndex].qtd) {
            alert(`A quantidade inserida é maior do que contém no estoque, por favor digite um valor compatível. (Valor em estoque: ${remedios[remedioIndex].qtd})`);
            qtdeComprada = Number(prompt(`Digite a quantidade em que quer comprar do remédio de código ${codRemedio}`));
        }

        remedios[remedioIndex].qtd = remedios[remedioIndex].qtd - qtdeComprada;
    }
}