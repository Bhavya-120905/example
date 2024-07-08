// Get a reference to the logo image element
const logoImage = document.getElementById("logo");

// Add a click event listener to the logo image
logoImage.addEventListener("click", function() {
  // Redirect the user to "index.html" on click
  window.location.href = "index.html";
});


const coursesLink = document.getElementById('jump-courses');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');

coursesLink.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});


  function loadVideoFaster(videoId) {
      const videoElement = document.getElementById(videoId);

      // Preload essential video metadata (progressive download)
      videoElement.preload = 'metadata';

      // Leverage browser caching for repeated visits (optional)
      if (localStorage.getItem(videoId + '-loaded')) {
          videoElement.src = videoElement.dataset.src || videoElement.src; // Restore original source
      } else {
          videoElement.src = videoElement.dataset.src || videoElement.src; // Set source (avoid redundant setting)
          localStorage.setItem(videoId + '-loaded', true); // Mark video as loaded
      }

      videoElement.addEventListener('loadeddata', function() {
          // Any additional actions when video data is loaded
      });
  }

  // Usage:
  document.addEventListener('DOMContentLoaded', function() {
      loadVideoFaster('introVideo'); // Assuming video element has ID 'introVideo'
  });






  

  const ballContainer = document.getElementById('ball-container');

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = Math.random() * window.innerWidth + 'px';
  ball.style.top = Math.random() * window.innerHeight + 'px';
  ballContainer.appendChild(ball);
}

function animateBalls() {
  createBall(); // Create a new ball on each animation call
  requestAnimationFrame(animateBalls); // Schedule another animation frame
}

animateBalls(); // Start animation






const edhElement = document.getElementById('ed-h'); // Select the h1 with id "ed-h"

window.addEventListener('load', () => {
  // Animate opacity from 0 to 1 in 4 seconds
  const duration = 6000; // Adjust duration in milliseconds (1000ms = 1 second)

  let currentOpacity = 0;
  const animationInterval = setInterval(() => {
    currentOpacity += 0.025; // Adjust increment for smoother transition (smaller increments for finer control)
    edhElement.style.opacity = Math.min(currentOpacity, 1); // Ensure opacity doesn't exceed 1

    if (currentOpacity >= 1) {
      clearInterval(animationInterval); // Stop animation when opacity reaches 1
    }
  }, duration / 100); // Execute animation frames every (duration / 100) milliseconds
});







window.addEventListener('load', () => {
  const advhElement = document.getElementById('adv-h');
  setTimeout(() => {
    advhElement.classList.add('pop'); // Add pop class with delay
  }, 300); // Adjust delay in milliseconds
});





const secondpageheading = document.getElementById('htext2');

