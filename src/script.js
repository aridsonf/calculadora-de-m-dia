//Calculadora de media
//Criacao da funcao que vai ser passada no parametro onClick no HTML, dentro de um Input com a tag button
function calcmed(nomeAluno, nota1, nota2, nota3) {
  //Calculo da media
  var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
  var mediaArredondada = media.toFixed(1);

  //Comparativo para mostrar se a aluna ou aluno foi aprovada(o) ou não
  if (mediaArredondada >= 7) {
    //Enviar para estrutura de id="notas" a o seguinte codigo em HTML
    document.getElementById("notas").innerHTML =
      '<p class="aprovado">Aluno ' +
      nomeAluno +
      " aprovado com media: " +
      mediaArredondada +
      "</p>";
  } else {
    document.getElementById("notas").innerHTML =
      '<p class="reprovado">Aluno ' +
      nomeAluno +
      " reprovado com media: " +
      mediaArredondada +
      "</p>";
  }
}
