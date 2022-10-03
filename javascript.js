function createGrid() {
    // Create grid
    const gridSize = 16;
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

// Create grid
const container = document.querySelector(".container");
createGrid();

// Painting function
const divItems = container.querySelectorAll("div");
let color = "black";
divItems.forEach(item => item.addEventListener("mouseover", () => item.style.backgroundColor = color));

// Buttons
const resetBtn = document.getElementById("resetBtn");
const blackBtn = document.getElementById("blackBtn");
const rgbBtn = document.getElementById("rgbBtn");


resetBtn.addEventListener("click", () => resetGrid());
blackBtn.addEventListener("click", () => color = "black");
rgbBtn.addEventListener("click", () => {
    divItems.forEach(item => item.addEventListener("mouseover", () => item.style.backgroundColor = randomRgbColor()));
});


function resetGrid() {
    divItems.forEach(item => item.style.backgroundColor = "white");
}

function randomRgbColor() {
    const rgb_x = Math.floor(Math.random() * 256);
    const rgb_y = Math.floor(Math.random() * 256);
    const rgb_z = Math.floor(Math.random() * 256);
    color = `rgb(${rgb_x}, ${rgb_y}, ${rgb_z})`;
}