'use strict';

const typeOfTripSingle = document.getElementById('single-trip');
const typeOfTripRound = document.getElementById('round-trip');
const returnDate = document.querySelector('.origin-hidden');
const booking = document.getElementById('booking');
const busSeats = document.getElementById('bus-seats-container');
const seat = document.querySelectorAll('.seat');
const bus = document.querySelector('.bus');
const cancelTimer = document.getElementById('cancel-timer');

var timer;

// Single or round trip
typeOfTripRound.addEventListener('click', () => {
  returnDate.classList.add('show-flex');
});
typeOfTripSingle.addEventListener('click', () => {
  returnDate.classList.remove('show-flex');
});

// Booking btn makes bus seat selection display
booking.addEventListener('click', () => {
  busSeats.classList.add('show');
});

function sendTacos() {
  alert('QUIERO CARNE!');
}

bus.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    timer = setTimeout(sendTacos, 3000);
  }
});

function cancelTimeout() {
  clearTimeout(timer);
}

cancelTimer.addEventListener('click', cancelTimeout);
