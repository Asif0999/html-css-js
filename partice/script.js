document.getElementById("btn").addEventListener("click", function () {
  const display = document.getElementById("text-input");
  const newElement = document.createElement("p");
  newElement.innerText = display.value;
  const parent = document.getElementById("div");
  parent.appendChild(newElement);
  display.value = "";
});
