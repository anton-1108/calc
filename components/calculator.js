//Slojenie
function add(a, b) {
  return a + b;
}
//Vichitanie
function subtract(a, b) {
  return a - b;
}
//Umnojenie
function multiply(a, b) {
  return a * b;
}
//delenie s proverkoi na 0
function divide(a, b) {
  if (b === 0) return "Osibka: delenie na 0!";
  return a / b;
}
const container = document.createElement("div");
container.className =
  "bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center";

//Zagolovok
const title = document.createElement("h1");
title.textContent = "Calculator";
title.className = "text-2xl font-bold mb-4 text-center";
container.appendChild(title);

//Polya vvoda chisel
const num1Input = document.createElement("input");
num1Input.type = "number"; //mun input - chislo
num1Input.placeholder = "Pervoe chislo"; // podskazka
num1Input.className =
  "w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

const num2Input = document.createElement("input");
num2Input.type = "number";
num2Input.placeholder = "Vtoroe chislo";
num2Input.className =
  "w-full p-2 border  rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ";

//Dobavlyaem polya vvoda v konteiner
container.appendChild(num1Input);
container.appendChild(num2Input);

//Sozdaem container dlya knopki
const buttonsContainer = document.createElement("div");
buttonsContainer.className = "flex justify-between mb-4 w-full";

//Massiv operatsii
const operations = ["+", "-", "*", "/"];

// sozdaem knopkii cherez tsikl
operations.forEach((op) => {
  const btn = document.createElement("button");
  btn.textContent = op;
  btn.className =
    "flex-1 mx-1 py-2 rounded text-white" +
    (op === "+"
      ? "bg-blue-500 hover:bg-blue-600"
      : op === "-"
      ? "bg-green-500 hover:bg-green-600"
      : op === "*"
      ? "bg-yellow-500 hover:bg-yellow-600"
      : "bg-red-500 hover: bg-red-600");
});

btn.addEventListener("click", () => {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);
  let result;

  //Vibiraem operatsiyu po tekstu knopkii
  switch (op) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      result = "Oshibka!";
  }

  //pokazivaem resultat
  resultDisplay.textContent = `Result: ${result}`;
});

//dobavlyaem knopku v kontainer
buttonsContainer.appendChild(btn);

//dobavlyaem container knopok v osnovnoi container
container.appendChild(buttonsContainer);

const resultDisplay = document.createElement("h2");
resultDisplay.className = "text-center text-xl font-semibold";
resultDisplay.textContent = "Resultat:";
container.appendChild(resultDisplay);

document.body.appendChild(container);
