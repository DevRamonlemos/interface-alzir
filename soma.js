function soma(){
  var soma=0
  document.write("informe a quantidade de numeros a somar")
  var j = prompt();
  for(var i=0; i<j; i++){
    document.write("informe o numero a somar")
    var dados = prompt()
    soma = soma+dados;
  }
  document.write("resultado da soma = "+soma)
}

