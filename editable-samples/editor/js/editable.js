var editor = document.getElementById("editor");
var output = document.getElementById("output");

var execute = document.getElementById("execute");
var reset = document.getElementById("reset");

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

var cmOptions = {
  mode: "javascript",
  theme: "eclipse",
  lineNumbers: true,
  showCursorWhenSelecting: true,
  styleActiveLine: true
}

var cmEditor = CodeMirror(editor, cmOptions);
cmEditor.setSize("100%", 150);
cmEditor.doc.setValue(cmInitContent);
cmEditor.focus();
cmEditor.doc.setCursor({line: cmSelectLine, ch: cmSelectChStart});

function applyCode() {

  var code = cmEditor.doc.getValue();

  try {
    var result = eval(code);
  } catch(e) {
    var result = 'Error: ' + e.message;
}

  output.classList.add("fade-in");
  output.firstChild.textContent = result;

  output.firstChild.addEventListener("animationend", (e) => {
    e.target.parentNode.classList.remove("fade-in");
  });
}

reset.addEventListener("click", function() {
  cmEditor.doc.setValue(cmInitContent);
  cmEditor.focus();
  cmEditor.doc.setCursor({line: cmSelectLine, ch: cmSelectChStart});
  applyCode();
});

execute.addEventListener("click", function() {
  applyCode();
});

window.addEventListener("load", applyCode);
