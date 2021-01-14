var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

document.getElementById('input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      calculate(document.getElementById("input").value)
      return false;
    }
  }
  
  function calculate(input) {
	var answer;
	var thing;
	if (input.includes("+")) {
    thing = input.split("+")
	while (thing.length > 1) {
	thing[0] = OmegaNum(thing[0]).plus(thing[1]).toString()
	thing.splice(1,1)
  }
	answer = thing;
	}
	if (input.includes("-")) {
    thing = input.split("-")
	while (thing.length > 1) {
	thing[0] = OmegaNum(thing[0]).minus(thing[1])
	thing.splice(1,1)
	}
	answer = thing;
	}
	if (input.includes("*") || input.includes("x") || input.includes("×")) {
    thing = input.includes("*") ? input.split("*") : input.includes("x") ? input.split("x") : input.includes("×") ? input.split("×") : input.split("die")
	while (thing.length > 1) {
	thing[0] = OmegaNum(thing[0]).mul(thing[1]).toString()
	thing.splice(1,1)
	}
	answer = thing;
	}
	if (input.includes("/") || input.includes("÷")) {
    thing = input.includes("÷") ? input.split("÷") : input.split("/")
	while (thing.length > 1) {
	thing[0] = OmegaNum(thing[0]).div(thing[1])
	thing.splice(1,1)
	}
	answer = thing;
	}
	document.getElementById("answer").innerHTML = answer == undefined ? "Error: Answer is undefined." : "Answer: " + answer
  }
  
  