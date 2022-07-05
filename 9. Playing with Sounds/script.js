const sounds = ["suisei", "pekora", "ina", "aqua", "fauna", "watame"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.id = sound;
  // btn.innerText = titleCase(sound);

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function titleCase(str) {
  str = str.toLowerCase();

  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    return str.join(" ");
  }
}
