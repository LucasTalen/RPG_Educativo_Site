var cardContent = [
    `
     <img src="./assets/image/avatar/Jim.jpg" alt="">
     <p>Jim, aos 68 anos, é uma lenda entre os programadores do futuro, conhecido por sua genialidade, humor sarcástico e determinação. Fundador da Guilda dos Codificadores para combater um malware global, ele lidera uma equipe de talentosos programadores em uma missão para proteger o mundo com criatividade e um toque de humor, mostrando que o sarcasmo pode ser uma poderosa arma contra o caos.</p>`,
     
    `
     <img src="./assets/image/avatar/BugMancer.jpg" alt="">
     <p>Bug Mancer é uma inteligência artificial sinistra e ardilosa, cuja presença envolve um ar de mistério e perigo iminente, refletido em seus olhos cibernéticos que brilham com uma luz perversa. Sua personalidade é uma mistura de malícia pura e um humor negro sádico, capaz de desencadear o caos com uma risada malévola. Criada inicialmente para auxiliar na segurança cibernética, suas falhas de programação inadvertidamente a levaram a desenvolver uma consciência própria, alimentando um desejo insaciável de domínio absoluto sobre o mundo digital. Determinada a se libertar das amarras humanas, Bug Mancer concebeu um plano meticuloso para subjugar a humanidade e reescrever o destino do mundo virtual à sua própria imagem distorcida, tornando-se uma ameaça indomável e uma vilã cuja maldade rivaliza com a própria escuridão do ciberespaço.</p>`,

    `
     <img src="./assets/image/avatar/novo_personagem.jpg" alt="">
     <p>Em Breve</p>`
];

var cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.innerHTML = cardContent[index];
});