document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.my-button');
    const question = document.querySelector('.question');
    const song = document.querySelector('#song');
    const gigante = document.querySelector('#Gigante');

    // Oculta a imagem inicialmente
    gigante.style.opacity = 0;

    // Defina o volume desejado, por exemplo, 0.5 para meio volume
    song.volume = 0.1;

    button.addEventListener('click', () => {
        question.style.opacity = 0;
        song.play();

        // Mostra a imagem
        gigante.style.opacity = 1;
    });
});