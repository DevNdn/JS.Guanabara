//criar variavel para armazenar hora e minuto atual do sistema
  var date = new Date();
  var hora = date.getHours();
  var minutos = ('0'+date.getMinutes()).slice(-2);

// --- DOM ---
  // variável para armazenar o body (finalidade: alterar cor de fundo de acordo com a hora do cliente)
  var corpo = document.body;
  var html1 = document.html;

  // container 
  var container = document.querySelector('#container');

  // h1
  var h1 = document.querySelector('.h1');

  // variavel para div que mostra as horas
  var mostra = document.querySelector('.mostra');
  
  // variavel para manipulação de imagem
  var imagem = document.querySelector('#img');
  

// --- CONDICIONAL TEMPO ---
if (hora>0&&hora<=12) {
  
// 1) Manhã -------
  mostra.innerHTML = `Bom dia. <br>`
  mostra.innerHTML += `Agora são ${hora}:${minutos}`;
  mostra.style.borderBottom = '2px solid red';
  mostra.style.color = '#fff';
  
  
  corpo.style.background = '#f49e12';
  corpo.style.backgroundImage = 'linear-gradient(170deg, rgba(47,6,96,0.8970982142857142) 1%, rgba(88,26,162,0.9) 10%, rgba(96,24,182,0.9) 14%, rgba(131,84,77,1) 21%, rgba(187,134,41,1) 28%, rgba(242,183,5,0.98) 35%, rgba(242,159,5,1) 55%, rgba(242,116,5,1) 86%, rgba(242,92,5,1) 100%)';

  container.style.background = 'rgb(47,6,96)';
  container.style.backgroundImage = 'linear-gradient(170deg, rgba(47,6,96,0.8970982142857142) 1%, rgba(96,24,182,0.9) 4%, rgba(88,26,162,0.9) 6%, rgba(131,84,77,1) 10%, rgba(187,134,41,1) 16%, rgba(242,183,5,1) 35%, rgba(242,159,5,1) 55%, rgba(242,116,5,1) 79%, rgba(242,92,5,1) 100%)';

  imagem.setAttribute('src', 'img/nascer-sol.jpg');
  imagem.style.boxShadow = '0 2px 4px 2px black';

  h1.style.color = '#fff';

} else if (hora<18) {
  
// 2) Tarde -------
  mostra.innerHTML = `Boa tarde. <br>`;
  mostra.innerHTML += `Agora são ${hora}:${minutos}`;
  mostra.style.borderBottom = '2px solid rgba(3, 3, 3, 0.419)';
  
  mostra.style.color = '#fff';
  corpo.style.background = 'rgb(70,27,99)';
  corpo.style.backgroundImage = 'linear-gradient(100deg, rgba(70,27,99,0.9628125) 18%, rgba(196,43,100,0.9056696428571429) 49%, rgba(253,29,29,0.8256696428571428) 66%, rgba(242,98,46,0.8970982142857142) 84%, rgba(252,176,69,0.8142410714285715) 100%)';


  container.style.background = '#F26B1D';
  container.style.backgroundImage = 'linear-gradient(100deg, rgba(70,27,99,0.9628125) 18%, rgba(196,43,100,0.9056696428571429) 49%, rgba(253,29,29,0.8256696428571428) 66%, rgba(242,98,46,0.8970982142857142) 84%, rgba(252,176,69,0.8142410714285715) 100%)';

  h1.style.color = '#fff';
  

  imagem.setAttribute('src', 'img/tarde.jpg');
  imagem.style.boxShadow = '0 2px 4px 2px black';

} else {

// 3) Noite -------
  mostra.innerHTML = `Boa noite. <br>`;
  mostra.innerHTML += `Agora são ${hora}:${minutos}`;
  
  mostra.style.color = 'white';
  
  corpo.style.background = '#0F1926';
  corpo.style.color = 'white';
  corpo.style.backgroundImage = 'linear-gradient(0deg, rgba(114,132,149,1) 6%, rgba(86,100,113,1) 17%, rgba(62,76,89,1) 26%, rgba(45,62,82,1) 34%, rgba(30,46,65,1) 44%, rgba(22,36,52,1) 54%, rgba(14,25,37,1) 64%)';

  container.style.background = 'rgb(114,132,149)';
  container.style.backgroundImage = 'linear-gradient(0deg, rgba(114,132,149,1) 15%, rgba(86,100,113,1) 37%, rgba(62,76,89,1) 59%, rgba(45,62,82,1) 81%)';
  

  imagem.setAttribute('src', 'img/noite.jpg');

}
