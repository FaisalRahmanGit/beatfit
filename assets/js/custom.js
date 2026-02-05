//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.25,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1.25,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.25,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
//
// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("video");
//   if (!video) {
//     console.error("Video element not found");
//     return;
//   }

//   // Create play button
//   const playBtn = document.createElement("button");
//   playBtn.innerHTML = "&#9658;";
//   playBtn.setAttribute("aria-label", "Play video");
//   playBtn.style.position = "absolute";
//   playBtn.style.top = "50%";
//   playBtn.style.left = "50%";
//   playBtn.style.transform = "translate(-50%, -50%)";
//   playBtn.style.fontSize = "48px";
//   playBtn.style.background = "rgba(0,0,0,0.5)";
//   playBtn.style.color = "#fff";
//   playBtn.style.border = "none";
//   playBtn.style.borderRadius = "50%";
//   playBtn.style.width = "80px";
//   playBtn.style.height = "80px";
//   playBtn.style.cursor = "pointer";
//   playBtn.style.zIndex = "10";
//   playBtn.style.display = "block";

//   // Get video wrapper
//   const wrapper = document.querySelector(".video-wrapper");
//   if (!wrapper) {
//     console.error("Video wrapper not found");
//     return;
//   }
//   wrapper.appendChild(playBtn);

//   // Hide controls initially
//   video.controls = false;

//   // Show play button only if video is paused and poster is showing
//   function showPlayBtn() {
//     // Show play button only if video is paused and at beginning (poster showing)
//     if (video.paused && video.currentTime === 0) {
//       playBtn.style.display = "block";
//       video.controls = false;
//     }
//   }

//   // Hide play button and show controls when playing
//   function hidePlayBtn() {
//     playBtn.style.display = "none";
//     video.controls = true;
//   }

//   playBtn.addEventListener("click", function () {
//     video.play();
//   });

//   video.addEventListener("play", hidePlayBtn);
//   video.addEventListener("pause", showPlayBtn);

//   // When video ends, show play button again and hide controls
//   video.addEventListener("ended", function () {
//     video.currentTime = 0;
//     showPlayBtn();
//   });

//   // Initial state
//   showPlayBtn();
// });
