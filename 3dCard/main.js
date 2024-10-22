document.addEventListener('DOMContentLoaded', () => {
    const cardBody = document.querySelector('.card-body');
    const cardItem = document.querySelector('.card-item');
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p');
  
    cardBody.addEventListener('mousemove', (e) => {
      const { width, height, left, top } = cardBody.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
  
      // Rotación de la tarjeta
      cardBody.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
      // Efecto de "salida" del texto
      heading.style.transform = `translateZ(50px)`;
      paragraph.style.transform = `translateZ(30px)`;
    });
  
    cardBody.addEventListener('mouseleave', () => {
      // Reseteo de la rotación
      cardBody.style.transform = `rotateY(0deg) rotateX(0deg)`;
  
      // Reseteo del efecto de profundidad del texto
      heading.style.transform = `translateZ(0px)`;
      paragraph.style.transform = `translateZ(0px)`;
    });
  });
  