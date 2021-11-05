function calcular() {
  let largura;
  let altura;

  largura = document.getElementById("idtLargura").value;
  altura = document.getElementById("edtAltura").value;

  if (largura > 0 && altura > 0) {
    let resp = largura * altura;
    let apresentacao = document.getElementById("areaRespCalculo");
    let textoresp = document.createElement("p");
    textoresp.append("O valor em m2 é: " + resp);
    apresentacao.appendChild(textoresp);

    limparcampos();
  } else {
    alert("FAVOR INFORMAR 2 VALORES NUMÉRICOS MAIORES QUE ZERO.");
  }
}

function limparcampos() {
  document.getElementById("idtLargura").value = null;
  document.getElementById("edtAltura").value = null;
}
