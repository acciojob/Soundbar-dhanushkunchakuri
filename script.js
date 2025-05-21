// your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let obj = {};

// Load audio files into the object
sounds.forEach((item) => {
  let audio = new Audio(`./sounds/${item}.mp3`);
  obj[item] = audio;
});

// Function to play selected sound
function playSound(soundName) {
  stopAllSounds();
  obj[soundName].play();
}

// Function to stop all sounds
function stopAllSounds() {
  for (let sound in obj) {
    obj[sound].pause();
    obj[sound].currentTime = 0;
  }
}

// Add click event listeners to sound buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    playSound(btn.textContent);
  });
});

// Stop button
document.querySelector(".stop").addEventListener("click", () => {
  stopAllSounds();
});
