function verificar() {
// --- DOM ---
  // paragrafo para saída de idade (.mensagem)
  var paragrafoResultado = document.querySelector('.mensagem');

  // variavel para armazenar o ano de nascimento inserido pelo cliente no input #anoNascimento
  var anoNascimento = document.querySelector('#anoNascimento').value;

  // variavel para ano atual
  var n1 = new Date();
  var anoAtual = n1.getFullYear();

  // imagem x sexo
  var sexo = document.getElementsByName('radsexo');
  var imagem = document.querySelector('#imagem');

  // var -> calculo de idade
  var idadeCliente = (anoAtual - anoNascimento);

// IDADE x IMAGEM ----------------------------------------------------******************

if (sexo[0].checked) { // MASCULINO ----------------------------------------------------

  paragrafoResultado.innerHTML = (`Você é homem e tem ${idadeCliente} anos de idade.`);
  paragrafoResultado.style.font = '15pt normal Arial';
  paragrafoResultado.style.background = 'lightgray';
  // masculino(); função ao final do código

  if (idadeCliente >= 0 && idadeCliente < 10) {

    imagem.src = './imgs/masc-crianca.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  } else if (idadeCliente < 21) {

    imagem.src = './imgs/masc-jovem.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  } else if (idadeCliente < 50) {

    imagem.src = './imgs/masc-adulto.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  } else {

    imagem.src = './imgs/masc-idoso.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  }

} else if (sexo[1].checked) { // FEMININO ----------------------------------------------------

  paragrafoResultado.innerHTML = (`Você é mulher e tem ${idadeCliente} anos de idade.`);
  paragrafoResultado.style.font = '15pt normal Arial';
  paragrafoResultado.style.background = 'lightgray';
  // feminino(); função ao final do código
  
  if (idadeCliente >= 0 && idadeCliente < 10) {

    imagem.src = './imgs/fem-crianca.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  } else if (idadeCliente < 21) {

    imagem.src = './imgs/fem-jovem.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  } else if (idadeCliente < 50) {

    imagem.src = './imgs/fem-adulta.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  } else  {

    imagem.src = './imgs/fem-idosa.jpg';

    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.boxShadow = '0 0 4px 2px black'
    imagem.style.display = 'block';
    imagem.style.margin = '0 auto';

  }


} 

  //  DADOS INCORRETOS ----------------------------------------------------
  if (anoNascimento.length == 0 || anoNascimento > anoAtual) {

    paragrafoResultado.innerHTML = 'Dados de nascimento incorretos';
    paragrafoResultado.style.background = 'red';
    paragrafoResultado.style.color = 'white';
    paragrafoResultado.style.padding = '15px';
    paragrafoResultado.style.borderRadius = '5px';

    imagem.src = '';
    imagem.style = 'none';
    
  }

}

/*

--------------------------------------------------------
function masculino() {
   var imagem = document.querySelector('#imagem');

   imagem.src = './imgs/masculino.jpg';
   imagem.style.width = '150px';
   imagem.style.height = '150px';
   imagem.style.boxShadow = '0 0 4px 2px black'
   imagem.style.display = 'block';
   imagem.style.margin = '0 auto';
}
--------------------------------------------------------function feminino() {
   var imagem = document.querySelector('#imagem');

   imagem.src = './imgs/feminino.jpg';
   imagem.style.width = '150px';
   imagem.style.height = '150px';
   imagem.style.boxShadow = '0 0 4px 2px black'
   imagem.style.display = 'block';
   imagem.style.margin = '0 auto';
      
}
--------------------------------------------------------

*/
 
// CRIAR PARAGRAFO
function criaParagrafo() {
 
  var divPai = document.querySelector('.resultado');
   
  var criaP = document.createElement('p');
  var textoDoParagrafo = document.createTextNode(`Escolha o gênero.`);
  criaP.appendChild(textoDoParagrafo);
  
  divPai.appendChild(criaP);
}
 
