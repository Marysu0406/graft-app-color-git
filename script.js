// Obtener los elementos del DOM
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const colorPicker = document.getElementById("colorPicker");

// Función para actualizar el color
function updateColor() {
    let red = parseInt(redRange.value);
    let green = parseInt(greenRange.value);
    let blue = parseInt(blueRange.value);

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    let hexColor = `#${Number(red).toString(16).padStart(2, '0')}${Number(green).toString(16).padStart(2, '0')}${Number(blue).toString(16).padStart(2, '0')}`.toUpperCase();

    colorBox.style.backgroundColor = rgbColor;
    colorBox.style.transition = "background 0.3s ease-in-out"; // Animación
    hexCode.textContent = hexColor;
    colorPicker.value = hexColor;

    // Sincronizar los inputs de número con los sliders
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
}

// Función para actualizar los sliders cuando se escriben valores en los inputs
function updateSliders() {
    let red = parseInt(redInput.value);
    let green = parseInt(greenInput.value);
    let blue = parseInt(blueInput.value);

    if (isNaN(red) || red < 0) red = 0;
    if (red > 255) red = 255;
    if (isNaN(green) || green < 0) green = 0;
    if (green > 255) green = 255;
    if (isNaN(blue) || blue < 0) blue = 0;
    if (blue > 255) blue = 255;

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    updateColor();
}

// Función para actualizar desde el color picker
function updateFromPicker() {
    let hex = colorPicker.value;
    
    let red = parseInt(hex.substring(1, 3), 16);
    let green = parseInt(hex.substring(3, 5), 16);
    let blue = parseInt(hex.substring(5, 7), 16);

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    updateColor();
}

// Event Listeners
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);
redInput.addEventListener("input", updateSliders);
greenInput.addEventListener("input", updateSliders);
blueInput.addEventListener("input", updateSliders);
colorPicker.addEventListener("input", updateFromPicker);

// Iniciar con color negro
updateColor();