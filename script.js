// Get a reference to the logo image element
const logoImage = document.getElementById("logo");

// Add a click event listener to the logo image
logoImage.addEventListener("click", function() {
  // Redirect the user to "index.html" on click
  window.location.href = "index.html";
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