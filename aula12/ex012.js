var agora = new Date()
var h = agora.getHours; // pega a hora atual do sistema que está rodando o programa

if (h > 0 && h <= 12) {
  console.log(`Bom dia.`);
} else if (h < 18) {
  console.log(`Boa tarde.`);
} else if (h>24){
  console.log(`Hora inválida`)
} else {
  console.log(`Boa noite.`);
}
