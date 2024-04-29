// funcionalidade de revelar os atributos da página
window.revelar = ScrollReveal({ reset: true });

// topo do site (first section)
revelar.reveal(".efeito-txt-topo", {
  duration: 1200, // sempre colocar segundos * 1000
  distance: '8rem'
});

// revelar.reveal(".efeito-sobre", {
//   duration: 1200, // sempre colocar segundos * 1000
//   distance: '8rem'
// });



// efeito máquina de escrever
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() =>
      elemento.innerHTML += letra, 200 * i);
  });
}

const nome = document.querySelector(".nome");
typeWriter(nome);



//barra de rolagem 
window.addEventListener("scroll", function () {
  var header = document.querySelector('#header');
  header.classList.toggle('scrolling', window.scrollY > 0);
});