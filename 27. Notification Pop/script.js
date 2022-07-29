const button = document.querySelector("#button");
const messages = document.querySelector("#message");

const response = [
  "Don't press the button!",
  "Don't press it Further",
  "Stop it!",
  "This serves as your last warning!",
  "I am not kidding now, kiddo!",
];

button.addEventListener("click", () => createNotification());
let pressed = 0;
function createNotification() {
  const notif = document.createElement("div");

  notif.classList.add("message");
  if (pressed === 0) {
    notif.innerHTML = notif.innerHTML = "That didn't took you so long.";
    pressed++;
  } else if (pressed < 5) {
    notif.innerHTML = getResponse();
    pressed++;
  } else {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    notif.destroy();
  }
  messages.appendChild(notif);
}
function getResponse() {
  return response[Math.floor(Math.random() * response.length)];
}
