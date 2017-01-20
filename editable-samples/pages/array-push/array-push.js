var commandHistory = [];
var commandHistoryIndex = commandHistory.length;

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
