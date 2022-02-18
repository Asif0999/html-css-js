document.getElementById("button").addEventListener("click", function () {
  const textArea = document.getElementById("text-input");
  let paragraph = document.createElement("p");
  paragraph.innerText = textArea.value;
  let callDiv = document.getElementById("first");
  callDiv.appendChild(paragraph);
  textArea.value = "";
});
