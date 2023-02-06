const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
const j = document.querySelector(".j");
const audio = new Audio("omg hanni.mp3");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      playSound();
      times.innerHTML = timesClicked;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  timesClicked++;
  times.innerHtml = timesClicked;
  console.log(timesClicked);

  setTimeout(() => {
    heart.remove();
  }, 1000);
};

const playSound = () => {
  //fade audio at 1430
  audio.play();
  audio.volume = 1;
  //   console.log(audio.currentTime, audio.volume);

  const fadeAudio = setInterval(() => {
    const fadePoint = audio.duration - 2000;
    if (audio.currentTime > fadePoint && audio.volume !== 0) {
      audio.volume -= 0.1;
    }

    if (audio.volume < 0.01) {
      audio.volume = 0;
      clearInterval(fadeAudio);
      audio.pause();
      audio.currentTime = 0;
    }
  }, 200);
};
