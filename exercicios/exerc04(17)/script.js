function tabuada() {
  // ---- DOM
    let num1 = Number(document.getElementById('numTabuada').value);

    let resultado = document.querySelector('#resultado');

    let selResult = document.getElementById('selecionar-resultado');

    let contador = 0;

    while (contador <= 10) {
    
      selResult.innerHTML += `<option>${num1} x ${contador} = ${num1*contador}</option><br>`;
      contador ++;

    }
    
}