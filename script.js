function getInput(getInput) {
  const value = document.getElementById(getInput);
  const getValue = value.value;
  const floatValue = parseFloat(getValue);
  return floatValue;
}

function calculationTriangleArea() {
  const base = getInput("triangle_base");
  const height = getInput("triangle_height");
  const setArea = document.getElementById("triangleArea");
  if (base !== "number" || height !== "number") {
    setArea.innerText = "Input a Number";
  }
  const area = 0.5 * base * height;
  setArea.innerText = area;
  return area;
}

// rectangle

function calculationRectangleArea() {
  const width = getInput("rectWidth");
  const length = getInput("rectLength");
  const setArea = document.getElementById("rectanleArea");
  const area = width * length;
  setArea.innerText = area;
  return area;
}

// Parallelogram

function calculationParallelogramArea() {
  const base = getInput("parallelogramBase");
  const height = getInput("parallelogramHeight");
  const setArea = document.getElementById("parallelogramArea");
  const area = base * height;
  setArea.innerText = area;
  return area;
}

// Rhombus

function calculationRhombusArea() {
  const daimention1 = getInput("Daimention1");
  const daimention2 = getInput("Daimention2");
  const setArea = document.getElementById("area");
  const area = 0.5 * daimention1 * daimention2;
  setArea.innerText = area;
  return area;
}

// Pentagon
function calculationPentagonArea() {
  const input1 = getInput("input1");
  const input2 = getInput("input2");
  const setArea = document.getElementById("pentagonArea");
  const area = 0.5 * input1 * input2;
  setArea.innerText = area;
  return area;
}

// Ellipse
function calculationEllipseArea() {
  const pi = Math.PI;
  const major = getInput("major");
  const minor = getInput("minor");
  const setArea = document.getElementById("ellipseArea");
  const area = (pi * major * minor).toFixed(2);
  setArea.innerText = area;
  return area;
}
