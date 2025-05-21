const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audioMap = {};

sounds.forEach(sound => {
  const audio = document.createElement("audio");
  audio.src = `./sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
  audioMap[sound] = audio;
});

function playSound(soundName) {
  stopAllSounds();
  audioMap[soundName].play();
}

function stopAllSounds() {
  for (let sound in audioMap) {
    audioMap[sound].pause();
    audioMap[sound].currentTime = 0;
  }
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    playSound(btn.textContent);
  });
});

document.querySelector(".stop").addEventListener("click", () => {
  stopAllSounds();
});
