//Utilize a estrutura de repetição for para imprimir no console conforme instruções:
//a) números de 1 a 50
//b) quando chegar no número 25 interrompa a instrução e pare o loop
//c) quando chegar no número 10 pule a instrução

//a) Numeros de 1 á 50

  for(let contador = 1; contador <=50; contador++) {
    console.log(`Fui na padaria ${contador}x`)  
  }


  //b)Quando chegar no número 25 imterrompa a instrução e pare o loop

  for(let contador = 1; contador <= 50; contador ++) {
    console.log(contador)

    if(contador === 25) {
      break
    }
  }

  console.log("Pare")


 //c) quando chegar no número 10 pule a instrução

 let contador = 0

 while(contador < 50) {
   contador += 1

   if(contador === 10) {
     console.log('CONTINUE')
     continue
   }

   console.log(+ contador)
 }
