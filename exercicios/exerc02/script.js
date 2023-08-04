function verificar() {
  // --- DOM ---
    // paragrafo para saída de idade (.mensagem)
    var paragrafoResultado = document.querySelector('.mensagem');
  
  // variavel para armazenar o ano de nascimento inserido pelo cliente no input #anoNascimento
  var anoNascimento = document.querySelector('#anoNascimento').value;
  
  // variavel para ano atual
  var n1 = new Date();
  var anoAtual = n1.getFullYear();

  // var -> calculo de idade
  var idadeCliente = (anoAtual - anoNascimento);

  // mostrar idade do cliente no HTML
  paragrafoResultado.innerHTML = (`Você tem ${idadeCliente} anos.`);
  paragrafoResultado.style.font = '15pt normal Arial';
  paragrafoResultado.style.background = 'lightgray';
 



  // imagem x sexo
  var sexo = document.getElementsByName('sexo');
  var imagem = document.querySelector('#imagem');
  


 if (sexo[0].checked) {
  masculino();
 } else if(sexo[1].checked) {
  feminino();
 } else {
  criaParagrafo();
 }

}



function masculino() {
  var imagem = document.querySelector('#imagem');

  imagem.src = './imgs/masculino.jpg';
  imagem.style.width = '150px';
  imagem.style.height = '150px';
  imagem.style.boxShadow = '0 0 4px 2px black'

}

function feminino() {
  var imagem = document.querySelector('#imagem');

  imagem.src = './imgs/feminino.jpg';
  imagem.style.width = '150px';
  imagem.style.height = '150px';
      
}


 // CRIAR PARAGRAFO
function criaParagrafo() {
 
  var divPai = document.querySelector('.resultado');
   
  var criaP = document.createElement('p');
  var textoDoParagrafo = document.createTextNode(`Escolha o gênero.`);
  criaP.appendChild(textoDoParagrafo);
  
  divPai.appendChild(criaP);
}
 
