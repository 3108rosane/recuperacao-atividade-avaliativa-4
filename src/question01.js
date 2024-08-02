import leia from "readline-sync";

for (var i = 0; i < 5; i++) {
    var nome = leia.question("INFORME O NOME: ");
    var idade = leia.questionInt("INFORME A IDADE: ");

    var obj = {
        nome: nome,
        idade: idade
    };
    pessoas.push(obj)
}
console.log(pessoas)