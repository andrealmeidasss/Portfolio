
const imgFlutuante = document.getElementById("img-flutuante");
let position = 0;

function animate() {
  position = (position + 0.1) % (2 * Math.PI); // Define a posição da imagem a ser flutuada em um ciclo de onda senoidal
  imgFlutuante.style.transform = `translate(-50%, ${Math.sin(position) * 6}px)`; // Define o movimento senoidal da imagem
  window.requestAnimationFrame(animate); // Chama a função animate a cada frame
}

animate();
