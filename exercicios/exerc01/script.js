//criar variavel para armazenar hora atual do sistema
var date = new Date();
var hora = date.getHours();
var minutos = date.getMinutes();

// --- DOM ---
  // variável para armazenar o body (finalidade: alterar cor de fundo de acordo com a hora do cliente)
  var corpo = document.body;

  // variavel para div que mostra as horas
  var mostra = document.querySelector('.mostra');
  
  // variavel para manipulação de imagem
  var imagem = document.querySelector('#img');
  

// --- CONDICIONAL TEMPO ---
if (hora>0&&hora<=12) {
  
// 1) Manhã -------
  mostra.innerHTML = `Bom dia. <br>`
  mostra.innerHTML += `Agora são ${hora}:${minutos}`;
  
  corpo.style.background = '#f49e12';

  imagem.setAttribute('src', 'img/nascer-sol.jpg');

} else if (hora<18) {
  
// 2) Tarde -------
  mostra.innerHTML = `Boa tarde. <br>`;
  mostra.innerHTML += `Agora são ${hora}:${minutos}`;
  
  corpo.style.background = '#f4a16e';

  imagem.setAttribute('src', 'img/tarde.jpg');

} else {

// 3) Noite -------
  mostra.innerHTML = `Boa noite. <br>`;
  mostra.innerHTML += `Agora são ${hora}:${minutos}`;
  
  corpo.style.background = '#191970';
  corpo.style.color = 'white';
  
  mostra.style.color = 'white';

  imagem.setAttribute('src', 'img/noite.jpg');

}
