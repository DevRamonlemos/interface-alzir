function contagem(){
  document.write("informe a quantidade de numeors a serem avaliados"+<br>);
    var n = prompt();
    var cont  = 0;
    for(var i=0; i<N; i++){
      document.write("informe um numeor inteiro");
      var numero = prompt();
      if(numero >=0){
        cont = cont+1;
      }else{
        document.write("formato incorreto");
        break;
      }
  }
}

