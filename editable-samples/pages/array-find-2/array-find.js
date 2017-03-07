var cmInitContent = 
`// create an array
var numbers = [5, 12, 8, 130, 44];

// call find(), passing a function
var found = numbers.find(function(e) { return e > 10});

// log the result
console.log(found);`;

var cmMatchToShowCompletions = "var found = numbers.";

var cmCompletionChoices = [
  "find(function(e) { return e > 10})",
  "find(function(e) { return e > 15})",
  "find(function(e) { return e > 130})"
];

var cmSelectLine = 4;
var cmSelectChStart = 20;
