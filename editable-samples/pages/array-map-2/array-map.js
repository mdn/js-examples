var cmInitContent = 
`// create an array
var numbers = [1, 4, 9, 16];

// call map(), passing a function
var mapped = numbers.map(function(x) { return x * 2 });

// log the result
console.log(mapped);`;

var cmMatchToShowCompletions = "var mapped = numbers.";

var cmCompletionChoices = [
  "map(function(x) { return x * 2 })",
  "map(Math.sqrt)"
];

var cmSelectLine = 4;
var cmSelectChStart = 21;
