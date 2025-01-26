// Toggle Glow Effect
const glowToggle = document.getElementById('glow-toggle');
const glowBox = document.getElementById('glow-box');

glowToggle.addEventListener('click', () => {
  glowBox.classList.toggle('active');
});