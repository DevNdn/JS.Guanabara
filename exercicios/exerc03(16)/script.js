function verificar() {
  // DOM -----
    var inicio = document.querySelector('#numInicio');

    var fim = document.querySelector('#numFim');

    var passoCont = document.querySelector('#passo');

    var resultadoDiv = document.querySelector('.resultado');
    
    var contador = (inicio + passoCont);

  if (inicio == 0 || fim == 0 || passoCont == 0) {
    alert('Dados incorretos, preencha corretamente.')
  } else {
    resultadoDiv.innerHTML = 'Contando...';
      
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passoCont.value);

      if (p === 0) {
        p = 1;
      }

    if (i<f){
      for (c=i; c<=f; c+=p){
        resultadoDiv.innerHTML += `${c} \u{1F449}`; 
      }
    } else {
      for (c=i ; c>=f; c-=p){
        resultadoDiv.innerHTML += `${c} \u{1F449}`;
      }
    } 
    resultadoDiv.innerHTML += `\u{1F3C1}`;
  }
  

}