var mes = 'novembro';

switch (mes){
  
  case 'janeiro':
  case 'fevereiro':
  case 'março':
    console.log(`Verão`);
    break                                 // break (OBRIGATÓRIO) -> encerra o looping do switch
  
  case 'abril':
  case 'maio':
  case 'junho':
    console.log(`Outono`);
    break
  
  case 'julho':
  case 'agosto':
  case 'setembro':
    console.log(`Inverno`);
    break
  
  case 'outubro':
  case 'novembro':
  case 'dezembro':
    console.log(`Primavera`);
    break
}

