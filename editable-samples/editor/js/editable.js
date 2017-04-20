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
  showCursorWhenSelecting: true
}

var cmEditor = CodeMirror(editor, cmOptions);
cmEditor.setSize("100%", 150);
cmEditor.doc.setValue(cmInitContent);

CodeMirror.hint.javascript = function(cm) {
  var inner = {from: cm.getCursor(), to: cm.getCursor(), list: []};
  
  var currentPos = cm.getCursor();
  var preceding = cm.getRange({line: currentPos.line, ch: 0}, currentPos);
  if (preceding == cmMatchToShowCompletions) {
    inner.list = cmCompletionChoices;
  }
  return inner;
};

function applyCode() {

  var code = cmEditor.doc.getValue();

  try {
    var result = eval(code);
  } catch(e) {
    var result = 'Error: ' + e.message;
}
output.textContent = result;
}

reset.addEventListener("click", function() {
  cmEditor.doc.setValue(cmInitContent);
  applyCode();
  reset.classList.add("hidden");
  edit.classList.remove("hidden");
});

execute.addEventListener("click", function() {
  applyCode();
});

function selectValue() {  
  var line = cmEditor.doc.getLine(cmSelectLine);

  var endCh = line.length - 1;
  if ((line.length > 0) && (line[endCh-1] === ";")) {
    endCh--;
  }

  var start = {line: cmSelectLine, ch: cmSelectChStart};
  var end = {line: cmSelectLine, ch: endCh};

  cmEditor.doc.setSelection(start, end);
}
/*
edit.addEventListener("click", function() {
  cmEditor.focus();
  selectValue();
  output.textContent = "";
  edit.classList.add("hidden");
  reset.classList.remove("hidden");
});
*/
window.addEventListener("load", applyCode);

function showCompletions(cm, event) {
  var popupKeyCodes = {
      "9": "tab",
      "13": "enter",
      "27": "escape",
      "33": "pageup",
      "34": "pagedown",
      "35": "end",
      "36": "home",
      "38": "up",
      "40": "down"
  }

  if(!popupKeyCodes[(event.keyCode || event.which).toString()]) {
    CodeMirror.showHint(cm, CodeMirror.hint.javascript, {completeSingle: false, closeOnUnfocus:false});
  }
  if (cmEditor.state.completionActive) {
    var picky = cmEditor.state.completionActive.pick.bind(cmEditor.state.completionActive);
    cmEditor.state.completionActive.pick = function(data, i) {
      picky(data, i);
      applyCode();
    }
  }
}

cmEditor.on("keyup", showCompletions);
