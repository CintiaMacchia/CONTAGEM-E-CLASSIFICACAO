window.alert("Calculo de média bimestral!");
var professor = window.prompt("Qual nome do professor?");
var materia = window.prompt("Qual a matéria?");
var aluno = window.prompt("Qual o nome do aluno?");


//variaveis
var nota1 = parseFloat(window.prompt("Digite o valor da nota do Primeiro Bimestre."));
var nota2 = parseFloat(window.prompt("Digite o valor da nota do Segundo Bimestre."));
var nota3 = parseFloat(window.prompt("Digite o valor da nota do Terceito Bimestre."));
var nota4 = parseFloat(window.prompt("Digite o valor da nota do Quarto Bimestre."));

var mediaAno = (nota1 + nota2 + nota3 + nota4)/ 4;

window.alert("A média é " + mediaAno);

if (mediaAno >= 6){
    alert(aluno +  " Aprovado na matéria de " +  materia + "  do professor(a) " +  professor);
} else{
    alert(aluno +  " Reprovado na matéria de " +  materia + "  do professor(a) " +  professor);
}
