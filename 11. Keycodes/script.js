const insert = document.getElementById("insert");

window.addEventListener("keydown", (press) => {
  insert.innerHTML = `
    <div class="key">
    ${press.key === " " ? "Space" : press.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${press.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${press.code}
    <small>event.code</small>
  </div>
    `;
});
