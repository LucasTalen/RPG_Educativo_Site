function validaNome(nome) {
    const re = /^[a-zA-Z\s]*$/;
    return re.test(nome);
}


form = document.getElementById('newslatter');
nomeInput = document.getElementById('nome');


form.addEventListener('submit', (event) => {
    let temErro = false;

    if (nomeInput.value.trim() === '') {
        document.getElementById('nomeError').textContent = 'Por favor, preencha seu nome.';
        temErro = true;
    } else if (!validaNome(nomeInput.value.trim())) {
        document.getElementById('nomeError').textContent = ' o nome deve conter apenas letra.';
        temErro = true;
    } else {
        document.getElementById('nomeError').textContent = '';
    }


    if (temErro) {
        event.preventDefault();
    }
})