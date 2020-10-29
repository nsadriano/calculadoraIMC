
function calcIMC (){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        let calcular = (peso / (altura * altura)).toFixed(1);

        let info = '';

        if (calcular < 18.5){
            info = 'você está abaixo do peso.'
        }else if(calcular < 24.9){
            info = 'você está com peso normal.'
        }else if (calcular == 25 || calcular <= 29.9){
            info = 'você está com sobrepeso.'
        }else if(calcular == 30 || calcular <= 34.9){
            info = 'você está com obesidade grau 1.'
        }else if(calcular == 35 || calcular <= 39.9){
            info = 'você está com obesidade grau 2.'
        }else if(calcular >= 40){
            info = 'você está com obesidade grau 3.'
        }

        resultado.textContent = `Olá ${nome} seu IMC é ${calcular} e ${info}!`
        
    } else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}

let botao = document.getElementById('calcular').addEventListener('click', calcIMC);