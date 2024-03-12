document.addEventListener("DOMContentLoaded", function () {
    const halfCircle = document.querySelector(".half-circle");
  
    function rotateHalfCircle() {
      let rotation = 0;
      let isHovered = false;
  
      halfCircle.addEventListener("mouseenter", () => {
        isHovered = true;
        rotate();
      });
  
      halfCircle.addEventListener("mouseleave", () => {
        isHovered = false;
      });
  
      function rotate() {
        if (isHovered) {
          rotation += 1;
          halfCircle.style.transform = `rotate(${rotation}deg)`;
          requestAnimationFrame(rotate);
        }
      }
    }
  
    rotateHalfCircle();
  });