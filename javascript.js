function createGrid(gridSize) {
    // Delete previous grid
    container.replaceChildren();

    // Create grid
    for (let i = 0; i < gridSize ** 2; i++) {
        const childdiv = document.createElement("div");
        childdiv.classList.add("grid-item");
        container.appendChild(childdiv);
    }

    // Add border to the right most column
    const rightItems = document.querySelectorAll(`.grid-item:nth-child(${gridSize}n)`);
    for (let i = 0; i < rightItems.length; i++) {
        rightItems[i].classList.toggle('border-right');
    }

    // Add border to the bottom most row
    let gridItems = document.querySelectorAll('.grid-item');
    const lastItems = Array.from(gridItems).slice(-`${gridSize}`);
    for (let i = 0; i < lastItems.length; i++) {
      lastItems[i].classList.toggle('border-bottom');
    }
}

// Painting function
const container = document.querySelector(".container");
function paintGrid(color) {
    const divItems = container.querySelectorAll("div");
    divItems.forEach(item => item.addEventListener("mouseover", () => item.style.backgroundColor = color));
}

// Default values
createGrid(16);
paintGrid("black");

// Buttons
const resetBtn = document.getElementById("resetBtn");
const blackBtn = document.getElementById("blackBtn");
const rgbBtn = document.getElementById("rgbBtn");
const colorBtn = document.getElementById("colorPicked");
const sliderValue = document.getElementById("gridRange");

resetBtn.addEventListener("click", () => resetGrid());
blackBtn.addEventListener("click", () => paintGrid("black"));
rgbBtn.addEventListener("click", () => {
    const divItems = container.querySelectorAll("div");
    divItems.forEach(item => item.addEventListener("mouseover", () => item.style.backgroundColor = randomRgbColor()));
});
colorBtn.addEventListener("input", () => paintGrid(colorBtn.value));
sliderValue.addEventListener("input", () => {
    sliderValue.nextElementSibling.value = sliderValue.value;
    createGrid(sliderValue.value);
    container.setAttribute("style", `grid-template-columns: repeat(${sliderValue.value}, 2fr); grid-template-rows: repeat(${sliderValue.value}, 2fr)`);
    paintGrid("black");
});

function resetGrid() {
    const divItems = container.querySelectorAll("div");
    divItems.forEach(item => item.removeAttribute("style"));
}

function randomRgbColor() {
    const rgb_x = Math.floor(Math.random() * 256);
    const rgb_y = Math.floor(Math.random() * 256);
    const rgb_z = Math.floor(Math.random() * 256);
    return `rgb(${rgb_x}, ${rgb_y}, ${rgb_z})`;
}