var lines = [
  "exampleArray.push('cows')",
  "exampleArray.push('fish', 'frogs')",
  "console.log(exampleArray)"
]

createInput("var exampleArray = ['pigs', 'goats', 'sheep']");

var playButton = document.querySelector("#play");
playButton.addEventListener("click", () => {
  playButton.disabled = true;
  writeLines(lines, () => {
    playButton.disabled = false;
  });
});
