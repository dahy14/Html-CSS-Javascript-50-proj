const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const userName = document.getElementById("name");
const date = document.getElementById("date");

const card = [header, title, excerpt, profileImg, userName, date];
const data = [
  `<img src="header_bg.jpg" />`,
  `Chill`,
  `Nice cozy day to lie down to a huge capy!`,
  `<img src="profile_1.jpg" alt="" />`,
  `Sleepy Friend`,
  `July 27, 2022`,
];

// start of the DOM HTML-Insertion

setTimeout(insertThis, 1500);

function insertThis() {
  card.forEach((card, index) => {
    card.innerHTML = data[index];
  });
  removeTheLoading();
}

function removeTheLoading() {
  const animations = document.querySelectorAll(".animated-bg");
  animations.forEach((animation) => {
    animation.classList.remove("animated-bg");
  });
}
