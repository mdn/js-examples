var commandHistory = [];
var commandHistoryIndex = commandHistory.length;

var reset = document.querySelector("#reset");
reset.addEventListener('click', (e) => {
  document.location.reload();
});

var geval = eval;

var instructions = document.querySelector('#instructions');
var repl = document.querySelector('#repl');
var state = document.querySelector('#state');


var that = Object.keys(this);

function listNewThings(things) {

  while (state.firstChild) {
    state.removeChild(state.firstChild);
  }

  let intro = document.createElement("p");
  intro.textContent = "Variables:";
  state.appendChild(intro);

  function thisIsInThat(thisThing) {
    for (let thatThing of that) {
      if (thisThing == thatThing) {
        return true;
      }
    }
    return false;
  }
  
  for (let thing of things) {
    if (!thisIsInThat(thing)) {
      let thingDescription = document.createElement("p");
      thingDescription.textContent = `${thing}: ${this[thing]}`;
      thingDescription.classList.add("subitem");
      state.appendChild(thingDescription);
    }
  }
  
}

function createInput(init) {
  var inputDiv = document.createElement('div');
  var inputPara = document.createElement('p');
  var inputForm = document.createElement('input');

  inputDiv.setAttribute('class','input');
  inputPara.textContent = '>';
  inputDiv.appendChild(inputPara);
  inputDiv.appendChild(inputForm);
  repl.appendChild(inputDiv);
  inputForm.focus();

  inputForm.addEventListener('change', (e) => {
    executeCode(e.target.value);
    e.target.disabled = true;
    e.target.parentNode.style.opacity = '0.5';
  });

  inputForm.addEventListener('keyup', (event) => {
    if ((event.key === "Enter") && (event.target.value)) {
      executeCode(event.target.value);
      event.target.disabled = true;
      event.target.parentNode.style.opacity = '0.5';
    } else if ((event.key === "ArrowUp")) {
      if (commandHistoryIndex > 0) {
        commandHistoryIndex--;
      }
      event.target.value = commandHistory[commandHistoryIndex];
    } else if ((event.key === "ArrowDown")) {
      if (commandHistoryIndex < commandHistory.length-1) {
        commandHistoryIndex++;
      }
      if (commandHistoryIndex < commandHistory.length) {
        event.target.value = commandHistory[commandHistoryIndex];
      }
    }
  });
      
  if (init) {
    inputForm.value = init;
    var event = new Event('change');
    inputForm.dispatchEvent(event);
  }
}

function executeCode(code) {
  try {
    var result = geval(code);
  } catch(e) {
    var result = 'Error: ' + e.message;
  }

  listNewThings(Object.keys(this));

  var outputDiv = document.createElement('div');
  var outputPara = document.createElement('p');

  outputDiv.setAttribute('class','output');
  outputPara.textContent = result;
  outputDiv.appendChild(outputPara);
  repl.appendChild(outputDiv);

  commandHistory.push(code);
  commandHistoryIndex = commandHistory.length;

  createInput();
}

createInput("var exampleArray = ['pigs', 'goats', 'sheep']");
