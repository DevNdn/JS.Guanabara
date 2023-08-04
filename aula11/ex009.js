var velocidade = 81;

console.log(`A velocidade do seu carro é de ${velocidade}Km/h`);
console.log(`Ao dirigir, use o cinto de segurança!`);

if (velocidade > 80) {
  console.log(`Você foi multado!`);
  console.log(`Sua velocidade é de ${velocidade}Km/h`);
} else {
  console.log(`Dentro do limite de velocidade`);
}