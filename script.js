const avanza = document.querySelectorAll('.btn-proximo');

avanza.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.inicial');
        const nextStage = 'stage-' + this.getAttribute('data-proximo');

        atual.classList.remove('inicial');
        document.getElementById(nextStage).classList.add('inicial');
    })
})