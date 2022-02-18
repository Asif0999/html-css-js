// 1st event ***
function makeRed(params) {
  document.body.style.backgroundColor = "red";
}

// 2nd event

const green = document.getElementById("green");
green.onclick = makeGreen;
function makeGreen(params) {
  document.body.style.backgroundColor = "green";
}

// 4th event
const gray = document.getElementById("gray");
gray.onclick = function (params) {
  document.body.style.backgroundColor = "gray";
};
// 5th event and use addEventListener('value',listener)
const gold = document.getElementById("gold");
gold.addEventListener("click", makeGoldenRod);
function makeGoldenRod(params) {
  document.body.style.backgroundColor = "goldenrod";
}

// 6th event and use direct eventlistener ***
document.getElementById("pink").addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});

// last part
document.getElementById("submit").addEventListener("click", function () {
  const lastinput = document.getElementById("input");
  console.log(lastinput.value);
});

// .value hocce .innerText er moto input er bitore ki ace ta jante hole .value delei hobe
