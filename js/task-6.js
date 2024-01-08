function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function clearBoxesContainer() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

function createBoxes(amount) {
  clearBoxesContainer(); // Очищення попередніх елементів

  const boxesContainer = document.getElementById("boxes");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const input = document.querySelector("input");

  createButton.addEventListener("click", () => {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    }
  });

  destroyButton.addEventListener("click", () => {
    clearBoxesContainer();
  });
});
