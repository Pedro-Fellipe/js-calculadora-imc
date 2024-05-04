const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const resultado = document.querySelector("#resultado");

const calcular = () => {
  if (altura.value !== "" && peso.value !== "") {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (imc < 25) {
      classificacao = "com peso ideal. Parabéns!";
    } else if (imc < 30) {
      classificacao = "levemente acima do peso.";
    } else if (imc < 35) {
      classificacao = "com obesidade grau I.";
    } else if (imc < 40) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III. Cuidado!";
    }
    resultado.innerHTML = `Seu IMC é ${imc} e você está ${classificacao}`;
  } else {
    resultado.innerHTML = "Preencha todos os campos!";
  }
};
