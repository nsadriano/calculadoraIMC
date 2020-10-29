let valor = 151;
let notaCem = 0;
let notaCinquenta = 0;
let notaVinte = 0;
let notaDez = 0;
let notaCinco = 0;
let notaDois = 0;
let notaUm = 0;

 while (valor != 0) {

   if (valor >= 100) {

     valor -= 100;

     notaCem++;

   }else if (valor >= 50) {

     valor -= 50;

     notaCinquenta++;

   }else if (valor >= 20) {

     valor -= 20;

     notaVinte++;

   }else if (valor >= 10) {

     valor -= 10;

     notaDez++;

   }else if (valor >= 5) {

     valor -= 5;

     notaCinco++;

   }else if (valor >= 2) {

     valor -= 2;

     notaDois++;

   }else if (valor >= 1) {

     valor -= 1;

     notaUm++;

   }
}

console.log(notaCem + " nota(s) de R$ 100,00");
console.log(notaCinquenta + " nota(s) de R$ 50,00");
console.log(notaVinte + " nota(s) de R$ 20,00");
console.log(notaDez + " nota(s) de R$ 10,00");
console.log(notaCinco + " nota(s) de R$ 5,00");
console.log(notaDois + " nota(s) de R$ 2,00");
console.log(notaUm + " nota(s) de R$ 1,00");