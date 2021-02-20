'use strict';

const seat = document.querySelectorAll('.seat');
const bus = document.querySelector('.bus');

bus.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }
});
