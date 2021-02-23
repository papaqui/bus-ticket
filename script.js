'use strict';

// Single or round
const typeOfTripSingle = document.getElementById('single-trip');
const typeOfTripRound = document.getElementById('round-trip');
const returnDate = document.querySelector('.origin-hidden');
const bookingBtn = document.getElementById('booking');

// Seats container
const busSeats = document.getElementById('bus-seats-container');
const seat = document.querySelectorAll('.seat');
const bus = document.querySelector('.bus');

// Schedule for trip
const tripStartCity = document.getElementById('origin').value;
const tripStartDate = document.getElementById('trip-start').value;
const tripStartHour = document.getElementById('schedule-origin').value;
const tripDestinationCity = document.getElementById('destination').value;
const tripDestinationDate = document.getElementById('trip-start').value;
const tripDestinationHour = document.getElementById('schedule-origin').value;
const cityOrigin = document.getElementById('city-origin');
const dateOrigin = document.getElementById('date-origin');
const hourOrigin = document.getElementById('hour-origin');
const cityDestination = document.getElementById('city-destination');
const dateDestination = document.getElementById('date-destination');
const hourDestination = document.getElementById('hour-destination');
// const cancelTimer = document.getElementById('cancel-timer');
console.log(tripStartHour);
var timer;

// Single or round trip
typeOfTripRound.addEventListener('click', () => {
  returnDate.classList.add('show-flex');
});
typeOfTripSingle.addEventListener('click', () => {
  returnDate.classList.remove('show-flex');
});

// Remove anchor from URL
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}

// Smooth scroll

// Booking btn makes bus seat selection display
bookingBtn.addEventListener('click', () => {
  busSeats.classList.add('show');
  goToAnchor('bus-select');

  cityOrigin.innerText = tripStartCity;
  dateOrigin.innerText = tripStartDate;
  hourOrigin.innerText = tripStartHour;
  cityDestination.innerText = tripDestinationCity;
  dateDestination.innerText = tripDestinationDate;
  hourDestination.innerText = tripDestinationHour;
});

// function sendTacos() {
//   alert('QUIERO CARNE!');
// }

// Select a seat
bus.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    // timer = setTimeout(sendTacos, 3000);
  }
});

// function cancelTimeout() {
//   clearTimeout(timer);
// }

// cancelTimer.addEventListener('click', cancelTimeout);
