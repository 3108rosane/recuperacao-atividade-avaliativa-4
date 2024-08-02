import leia from "readline-sync";



function preencherVetor(tamanhoVetor, menor, maior) {
    var vetor = [];
    for (var i = 1; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (maior - menor)) 
    }
    return vetor;
}

var listaa = preencherVetor(menor || maior)
console.log("media")