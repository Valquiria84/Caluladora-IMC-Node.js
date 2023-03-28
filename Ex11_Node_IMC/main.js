const imc = require('readline');

const calcular = imc.createInterface({
  input: process.stdin,
  output: process.stdout
});

calcular.question('Qual é o seu peso em kg? ', (peso) => {
  calcular.question('Qual é a sua altura em metros? ', (altura) => {
    const imc = peso / (altura ** 2);
    console.log(`Seu IMC é ${imc.toFixed(2)}.`);
    calcular.close();
  });
});