const containers = document.querySelectorAll(".ripple");

containers.forEach((container) => {
  container.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const containerTop = e.target.offsetTop;
    const containerLeft = e.target.offsetLeft;

    const xInside = x - containerTop;
    const yInside = y - containerLeft;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
