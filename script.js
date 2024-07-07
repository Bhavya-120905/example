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
