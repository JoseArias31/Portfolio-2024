function showImage(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

const text = "Full Stack Web Developer";
let index = 0;
let isDeleting = false; // Bandera para saber si estamos borrando el texto
const speed = 100; // Velocidad de escritura en milisegundos
const pauseBetweenLoops = 1000; // Tiempo de espera entre la eliminación y el inicio del nuevo ciclo

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter");
  
  if (!isDeleting && index < text.length) {
    // Si no estamos eliminando y el índice es menor que el texto, escribir letra por letra
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && index > 0) {
    // Si estamos eliminando, borramos letra por letra
    typewriterElement.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeWriter, speed / 2); // La eliminación puede ser más rápida
  } else if (index === text.length && !isDeleting) {
    // Cuando hemos terminado de escribir, esperamos antes de comenzar a borrar
    isDeleting = true;
    setTimeout(typeWriter, pauseBetweenLoops); 
  } else if (isDeleting && index === 0) {
    // Cuando hemos terminado de borrar, volvemos a comenzar el ciclo de escritura
    isDeleting = false;
    setTimeout(typeWriter, speed);
  }
}

// Iniciar la función
typeWriter();


  console.log("Hello, Jose")


  document.getElementById('hireMe').addEventListener('click', function() {
    var email = 'gojosearias@gmail.com';
    var subject = 'Let\'s Work Together!';
    var message = 'Hello,\n\nI came across your contact information and I am interested in discussing potential opportunities with you. I have attached my idea-proposal for your review.\n\nLooking forward to hearing from you soon!\n\nBest regards,\n[Your Name]\n[Phone Number]';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);

    window.open(mailtoLink);
  });
  
  
  
  
  
  