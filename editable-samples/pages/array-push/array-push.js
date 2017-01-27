

var init = "var exampleArray = ['pigs', 'goats', 'sheep']";

inputBox.value = init;
var event = new Event('change');
inputBox.dispatchEvent(event);
