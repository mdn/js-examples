var commandHistory = [];
var commandHistoryIndex = commandHistory.length;

var reset = document.querySelector("#reset");
reset.addEventListener('click', (e) => {
  document.location.reload();
});

var geval = eval;
var gConsole = console;

var console = {
  log: function(loggedItem) {
    if (typeof(loggedItem) === "string") {
      return loggedItem;
    } else {
      return eval(loggedItem);
    }
  }
}

var inputBox = document.querySelector("#input>input");

inputBox.addEventListener('change', (e) => {
  executeCode(e.target.value);
});

inputBox.addEventListener('keyup', (event) => {
  if ((event.key === "Enter") && (event.target.value)) {
    executeCode(event.target.value);
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

function executeCode(code) {
  try {
    var result = geval(code);
  } catch(e) {
    var result = 'Error: ' + e.message;
  }

  var lastCommand = document.createElement('div');
  lastCommand.setAttribute('class','history-line');
  lastCommand.setAttribute('class','history-input');
  lastCommand.textContent = `> ${code}`;
  
  var lastResult = document.createElement('div');
  lastResult.setAttribute('class','history-line');
  lastResult.setAttribute('class','history-output');
  lastResult.textContent = result;

  var history = document.querySelector("#history");
  history.appendChild(lastCommand);
  history.appendChild(lastResult);

  inputBox.value = "";
  inputBox.focus();

  document.querySelector("#repl").scrollTop = inputBox.offsetTop;

  commandHistory.push(code);
  commandHistoryIndex = commandHistory.length;
}

document.body.addEventListener("click", (event) => {
  if (event.originalTarget === document.querySelector("#repl")) {
    inputBox.focus();
  }
});
