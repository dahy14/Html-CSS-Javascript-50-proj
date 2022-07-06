const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, clickedidx) => {
  cup.addEventListener("click", () => {
    highlightedCups(clickedidx);
  });
});

function highlightedCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  //click add ful;
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".full").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.opacity = "0";
    percentage.style.height = "0";
  } else {
    percentage.style.opacity = "1";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${Math.ceil((fullCups / totalCups) * 100)}%`;
  }

  if (fullCups === totalCups) {
    remained.style.opacity = "0";
    remained.style.height = "0";
  } else {
    remained.style.opacity = "1";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
