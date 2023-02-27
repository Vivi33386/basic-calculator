let output = document.getElementById("output");
let calculator = document.querySelector(".calculator");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "."];
let array2 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
  "addition",
  "subtraction",
  "multiplication",
  "division",
  "comma",
];

for (let i = 0; i < array.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.innerText = array[i];
  for (let y = 0; y < array2.length; y++) {
    if (i == y) {
      newDiv.classList.add(array2[y]);
      newDiv.classList.add("button");
      newDiv.name = newDiv.innerText;
      newDiv.onclick = function () {
        output.value += array[i];
      };
      calculator.appendChild(newDiv);
    }
  }
}

let newDivClear = document.createElement("div");
newDivClear.innerText = "Cl";
newDivClear.classList.add("clear");
newDivClear.classList.add("button");
newDivClear.name = newDivClear.innerText;
newDivClear.onclick = function () {
  output.value = "";
};
calculator.appendChild(newDivClear);

let newDivDelete = document.createElement("div");
newDivDelete.innerText = "Del";
newDivDelete.classList.add("delete");
newDivDelete.classList.add("button");
newDivDelete.name = newDivDelete.innerText;
newDivDelete.onclick = function () {
  output.value = output.value.slice(0, -1);
};
calculator.appendChild(newDivDelete);

let newDivEqual = document.createElement("div");
newDivEqual.innerText = "=";
newDivEqual.classList.add("equal");
newDivEqual.name = newDivEqual.innerText;
newDivEqual.onclick = function () {
  try {
    output.value = eval(output.value);
  } catch (err) {
    output.value = "Invalid";
  }
};
calculator.appendChild(newDivEqual);
