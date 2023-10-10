const CONFIG = {
  DEFAULT: false,
  VOICE: "Fred",
  SLOW_RATE: 0.6, // Nilai kurang dari 1.0 untuk membuat suara lebih lambat
};

const robot = document.querySelector(".robot");

let message = new SpeechSynthesisUtterance();

message.text = `sam, saya minta maaf yah. saya sayang kamu sam. i love you and i need you in my side sam, please forgive me, i'm sorry sam, . From Chairil Ali, cukurukuk cukurukuk cukurukuk cukurukuk aaaawwwwwww`;
message.rate = CONFIG.SLOW_RATE; // Set kecepatan suara

let voices = [];

speechSynthesis.addEventListener("voiceschanged", (event) => {
  voices = speechSynthesis.getVoices();
  if (!CONFIG.DEFAULT) {
    message.voice = voices.find((voice) => voice.name === CONFIG.VOICE);
  }
});

message.onend = function (event) {
  robot.classList.remove("robot_speaking");
};

robot.addEventListener("click", (event) => {
  if (speechSynthesis.speaking) {
    robot.classList.remove("robot_speaking");
    speechSynthesis.cancel();
  } else {
    robot.classList.add("robot_speaking");
    speechSynthesis.speak(message);
  }
});
