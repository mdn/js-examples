

var init = 'var a = ["zero", "one", "two", "three"];';

inputBox.value = init;
var event = new Event('change');
inputBox.dispatchEvent(event);
