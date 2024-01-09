const yesBtn = document.querySelector('#yesBtn');
const showSpotifyBtn = document.querySelector('#showSpotifyBtn');
const spotifyLink = document.querySelector('#spotifyLink');
const mensajePersonalizado = document.querySelector('#mensajePersonalizado');

yesBtn.addEventListener('click', function() {

    document.querySelector('p').style.display = 'none';
    yesBtn.style.display = 'none';
    document.querySelector('#noBtn').style.display = 'none';


    mensajePersonalizado.textContent = '♡ Te adoro nena ♡';

    mensajePersonalizado.style.display = 'block';


    showSpotifyBtn.style.display = 'inline';
});

showSpotifyBtn.addEventListener('click', function() {

    mensajePersonalizado.style.display = 'none';
    showSpotifyBtn.style.display = 'none';

    // Mostramos el enlace a Spotify
    spotifyLink.style.display = 'inline';
});

document.querySelector('#noBtn').addEventListener('click', function() {
    document.querySelector('p').style.display = 'block';
    yesBtn.style.display = 'inline';
    document.querySelector('#noBtn').style.display = 'inline';


    mensajePersonalizado.style.display = 'none';
    showSpotifyBtn.style.display = 'none';


    spotifyLink.style.display = 'none';
});

const noBtn = document.querySelector('#noBtn');
const contenedor = document.querySelector('.contenedor');

noBtn.addEventListener('mouseover', function() {
    const margin = 100;

    const maxX = contenedor.clientWidth - noBtn.clientWidth - margin;
    const maxY = contenedor.clientHeight - noBtn.clientHeight - margin;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.setProperty('left', randomX + 'px');
    noBtn.style.setProperty('top', randomY + 'px');
});