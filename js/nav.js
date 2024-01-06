const navButtons = document.querySelectorAll('.navbar button');

function zoomButton(button) {
  button.style.transform = 'scale(1.1)';
  button.style.color = 'black';
}

function resetButton(button) {
  button.style.transform = 'scale(1)';
  button.style.color = 'rgb(185, 0, 0)';
}

navButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'white';
    button.style.fontSize = '4vh';
    zoomButton(button);
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'black';
    button.style.fontSize = '3.5vh';
    resetButton(button);
  });
});
