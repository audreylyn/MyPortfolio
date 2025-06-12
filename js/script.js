// Add some interactive elements
document.addEventListener('DOMContentLoaded', function () {
  const typewriter = document.querySelector('.typewriter');

  // Restart animation on click
  typewriter.addEventListener('click', function () {
    this.style.animation = 'none';
    this.offsetHeight; // Trigger reflow
    this.style.animation =
      'typing 3s steps(12, end), blink-caret 1s step-end infinite';
  });
});
