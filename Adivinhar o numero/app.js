alert('Bem vindo ao site');
alert('Começando o jogo do número secreto');
let nome = prompt('Digite o seu nome');
alert(`olá ${nome}`)
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('O número secreto é: ', numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto) {
     chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    // se o chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
    
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    // if(tentativas > 1){
    //   alert(`Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativas.`);
    // } else {
    //   alert(`Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativa.`);
    // }