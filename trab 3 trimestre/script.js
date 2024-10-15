function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Converte de cm para metros
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}