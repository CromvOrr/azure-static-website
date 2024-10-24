document.addEventListener("DOMContentLoaded", () => {
  const homeImg = document.querySelector(".photo img");

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const moveX = (clientX / windowWidth - 0.5) * 10; // left / right
    const moveY = (clientY / windowHeight - 0.5) * 10; // up / down

    homeImg.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
  });
});

const movementEffectStyle = document.createElement("style");
movementEffectStyle.innerHTML = `
    .photo {
      position: relative;
      perspective: 1000px;
    }
  
    .photo img {
      position: relative;
      transition: transform 0.1s ease;
    }
  `;
document.head.appendChild(movementEffectStyle);
