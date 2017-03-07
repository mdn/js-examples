var cmInitContent = 
`// create an array
var a = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// call slice(), passing start and end indexes
var sliced = a.slice(2, 4);

// log the result
console.log(sliced);`;

var cmMatchToShowCompletions = "var sliced = a.";

var cmCompletionChoices = [
  "slice(2, 4)",
  "slice(1)",
  "slice(-1)",
  "slice(2, -2)",
  "slice()"
];

var cmSelectLine = 4;
var cmSelectChStart = 15;
