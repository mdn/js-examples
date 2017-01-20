var commandHistory = [];
var commandHistoryIndex = history.length;

document.body.addEventListener("keyup", (event) => {
  var inputForms = document.querySelectorAll(".input>input");
  if ((event.key != "ArrowUp") ||
      (!inputForms.length) ||
      (inputForms[inputForms.length-1] != document.activeElement)) {
    return;
  }
  if (commandHistoryIndex > 0) {
    commandHistoryIndex--;
  }
  inputForms[inputForms.length-1].value = commandHistory[commandHistoryIndex];
});

document.body.addEventListener("keydown", (event) => {
  var inputForms = document.querySelectorAll(".input>input");
  if ((event.key != "ArrowDown") ||
      (!inputForms.length) ||
      (inputForms[inputForms.length-1] != document.activeElement)) {
    return;
  }
  if (commandHistoryIndex < commandHistory.length-1) {
    commandHistoryIndex++;
  }
  inputForms[inputForms.length-1].value = commandHistory[commandHistoryIndex];
});

var reset = document.querySelector("#reset");
reset.addEventListener('click', (e) => {
  document.location.reload();
});

var geval = eval;

function createInput(init) {
  var inputDiv = document.createElement('div');
  var inputPara = document.createElement('p');
  var inputForm = document.createElement('input');

  inputDiv.setAttribute('class','input');
  inputPara.textContent = '>';
  inputDiv.appendChild(inputPara);
  inputDiv.appendChild(inputForm);
  document.body.appendChild(inputDiv);
  inputForm.focus();

  inputForm.addEventListener('change', (e) => {
    executeCode(e.target.value);
    e.target.disabled = true;
    e.target.parentNode.style.opacity = '0.5';
  });

  inputForm.addEventListener('keyup', (e) => {
    if ((e.key === "Enter") && (e.target.value)) {
      executeCode(e.target.value);
      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';
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
    geval(code);
    var result = '< ' + exampleArray;
  } catch(e) {
    var result = 'Error: ' + e.message;
  }

  var outputDiv = document.createElement('div');
  var outputPara = document.createElement('p');

  outputDiv.setAttribute('class','output');
  outputPara.textContent = result;
  outputDiv.appendChild(outputPara);
  document.body.appendChild(outputDiv);

  commandHistory.push(code);
  commandHistoryIndex = commandHistory.length;
  console.log(commandHistory)

  createInput();
}

createInput("var exampleArray = ['pigs', 'goats', 'sheep']");
