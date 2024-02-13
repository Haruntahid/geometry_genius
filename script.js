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
  const calculateShow = document.getElementById("calculate_result");
  let newLine = document.createElement("p");
  calculateShow.appendChild(newLine);

  if (isNaN(base) || isNaN(height)) {
    setArea.innerText = "Input a Number";
    newLine.innerHTML = "Input a Number";
    newLine.style.color = "red";
  } else {
    const area = 0.5 * base * height;
    setArea.innerText = area;
    newLine.innerHTML = "Area of Triangle is: " + area;
    newLine.style.color = "green";
  }
  return area;
}

// rectangle

function calculationRectangleArea() {
  const width = getInput("rectWidth");
  const length = getInput("rectLength");
  const setArea = document.getElementById("rectanleArea");
  const calculateShow = document.getElementById("calculate_result");
  let newLine = document.createElement("p");
  calculateShow.appendChild(newLine);

  if (isNaN(width) || isNaN(length)) {
    setArea.innerText = "Input a Number";
    newLine.innerHTML = "Input a Number";
    newLine.style.color = "red";
  } else {
    const area = width * length;
    setArea.innerText = area;
    newLine.innerHTML = "Area of Rectangle is: " + area;
    newLine.style.color = "green";
  }
  return area;
}

// Parallelogram

function calculationParallelogramArea() {
  const base = getInput("parallelogramBase");
  const height = getInput("parallelogramHeight");
  const setArea = document.getElementById("parallelogramArea");
  const calculateShow = document.getElementById("calculate_result");
  let newLine = document.createElement("p");
  calculateShow.appendChild(newLine);

  if (isNaN(base) || isNaN(height)) {
    setArea.innerText = "Input a Number";
    newLine.innerHTML = "Input a Number";
    newLine.style.color = "red";
  } else {
    const area = base * height;
    setArea.innerText = area;
    newLine.innerHTML = "Area of Parallelogram is: " + area;
    newLine.style.color = "green";
  }
  return area;
}

// Rhombus

function calculationRhombusArea() {
  const daimention1 = getInput("Daimention1");
  const daimention2 = getInput("Daimention2");
  const setArea = document.getElementById("area");
  const calculateShow = document.getElementById("calculate_result");
  let newLine = document.createElement("p");
  calculateShow.appendChild(newLine);

  if (isNaN(daimention1) || isNaN(daimention2)) {
    setArea.innerText = "Input a Number";
    newLine.innerHTML = "Input a Number";
    newLine.style.color = "red";
  } else {
    const area = 0.5 * daimention1 * daimention2;
    setArea.innerText = area;
    newLine.innerHTML = "Area of Rhombus is: " + area;
    newLine.style.color = "green";
  }

  return area;
}

// Pentagon
function calculationPentagonArea() {
  const input1 = getInput("input1");
  const input2 = getInput("input2");
  const setArea = document.getElementById("pentagonArea");
  const calculateShow = document.getElementById("calculate_result");
  let newLine = document.createElement("p");
  calculateShow.appendChild(newLine);

  if (isNaN(input1) || isNaN(input2)) {
    setArea.innerText = "Input a Number";
    newLine.innerHTML = "Input a Number";
    newLine.style.color = "red";
  } else {
    const area = 0.5 * input1 * input2;
    setArea.innerText = area;
    newLine.innerHTML = "Area of Pentagon is: " + area;
    newLine.style.color = "green";
  }
  return area;
}

// Ellipse
function calculationEllipseArea() {
  const pi = Math.PI;
  const major = getInput("major");
  const minor = getInput("minor");
  const setArea = document.getElementById("ellipseArea");
  const calculateShow = document.getElementById("calculate_result");
  let newLine = document.createElement("p");
  calculateShow.appendChild(newLine);

  if (isNaN(major) || isNaN(minor)) {
    setArea.innerText = "Input a Number";
    newLine.innerHTML = "Input a Number";
    newLine.style.color = "red";
  } else {
    const area = (pi * major * minor).toFixed(2);
    setArea.innerText = area;
    newLine.innerHTML = "Area of Ellipse is: " + area;
    newLine.style.color = "green";
  }
  return area;
}
