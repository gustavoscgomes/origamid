const btnIniciar = document.querySelector('.iniciar')
const btnPausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')
let i = 0;
let timer;

btnIniciar.addEventListener('click', iniciar);
btnPausar.addEventListener('dblclick', zerar)
btnPausar.addEventListener('click', pausar);

function iniciar() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100)
  btnIniciar.setAttribute('disabled', '');
}

  function pausar() {
    clearInterval(timer);
    btnIniciar.removeAttribute('disabled');
}

function zerar() {
  tempo.innerText = 0;
  i = 0;
}

