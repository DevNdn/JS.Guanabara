function verificar() {
  // DOM -----
  let inicio = document.getElementById('numInicio');

  let fim = document.getElementById('numFim');

  let passo = document.querySelector('#passo');

  let resultado = document.querySelector('.resultado');

  if (inicio.value == 0 || fim.value==0 || passo.value == 0) {

    alert('Preencha os dados corretamente.');

  } else {
    
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    resultado.innerHTML = `Contando...`

    if (i<f) {

      resultado.innerHTML = 'Ordem crescente <br>';

      for (c=i;c<=f;c+=p) {
        resultado.innerHTML += `&#127947 ${c}... <br>`;
          
        // flag emoji end counting
          if (c>=f) {
            resultado.innerHTML += `&#127937`;
          }
      }

    } else {

      resultado.innerHTML = 'Ordem decrescente <br>';

      for (c=i; c>=f; c-=p){
        resultado.innerHTML += `&#127947 ${c}... <br>`;
        
      // flag emoji end counting
        if (c<=f) {
          resultado.innerHTML += `&#127937`;
        }
      }
      }
  }
}