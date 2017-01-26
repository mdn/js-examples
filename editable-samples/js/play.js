
function writeLines(lines, callback) {

  function writeLine(lineContent) {
    var inputs = document.querySelectorAll("input");
    var currentInput = inputs[inputs.length-1];

    function writeChar() {
      if (i < lineContent.length) {
        currentInput.value += lineContent[i];
        setTimeout(writeChar, 100);
        i++;
      } else {
        setTimeout(() => {
          var event = new Event('change');
          currentInput.dispatchEvent(event);
          writeLineDelayed(500);
        }, 200);
      }
    }
    
    var i = 0;
    writeChar();
  }

  function writeLineDelayed(delay) {
    setTimeout(() => {
      if (l < lines.length) {
        writeLine(lines[l]);
        l++;
      } else {
        console.log("done!")
        callback();
      }
    });
 
  }

  var l = 0;
  writeLineDelayed(0);
}
