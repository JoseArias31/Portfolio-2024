document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        duration: 1000 // personaliza la duración de la animación a tu gusto
      });
    });
  });


  console.log("Hello, Jose")


