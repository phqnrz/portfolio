function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// funcionalidade de revelar os atributos da página
window.revelar = ScrollReveal({ reset: true });

// topo do site (first section)
revelar.reveal(".efeito-txt-topo", {
  duration: 1200, // sempre colocar segundos * 1000
  distance: '8rem'
});

//  reveal sobre
revelar.reveal(".efeito-sobre", {
  duration: 2200, // sempre colocar segundos * 1000
  distance: '8rem',
  delay: 500
});

revelar.reveal(".github", {
  duration: 2200, // sempre colocar segundos * 1000
  distance: '8rem',
  delay: 500,
  origin: 'right'
});

revelar.reveal(".linkedin", {
  duration: 2200, // sempre colocar segundos * 1000
  distance: '8rem',
  delay: 1000,
  origin: 'right'
});





// reveal habilidades
revelar.reveal(".efeito-habilidades", {
  duration: 2500, // sempre colocar segundos * 1000
  distance: '8rem'
});

revelar.reveal(".html", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 500,
  origin: 'right'
});

revelar.reveal(".css", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1000,
  origin: 'right'
});

revelar.reveal(".bulma", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500,
  origin: 'right'
});

revelar.reveal(".bootstrap", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 2000,
  origin: 'right'
});

revelar.reveal(".javascript", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 2500,
  origin: 'right'
});

// em desenvolvimento
revelar.reveal(".efeito-habilidades", {
  duration: 2200, // sempre colocar segundos * 1000
  distance: '8rem',
  delay: 500
});


revelar.reveal(".typescript", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 500,
  origin: 'left'
});

revelar.reveal(".react", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1000,
  origin: 'left'
});

revelar.reveal(".node", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500,
  origin: 'left'
});

revelar.reveal(".java", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 2000,
  origin: 'left'
});

revelar.reveal(".mongodb", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 2500,
  origin: 'left'
});



// efeito revelar projetos
revelar.reveal(".efeito-projetos", {
  duration: 2200, // sempre colocar segundos * 1000
  distance: '4rem'
});

revelar.reveal(".port1", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 500,
  origin: 'right'
});

revelar.reveal(".port2", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1000,
  origin: 'right'
});

revelar.reveal(".port3", {
  duration: 2000, // sempre colocar segundos * 1000
  distance: '6rem',
  delay: 1500,
  origin: 'right'
});





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