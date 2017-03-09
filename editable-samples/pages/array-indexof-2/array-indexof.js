var cmInitContent = 
`// create an array
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// call indexOf(), passing a value and optional start index
var index = beasts.indexOf('bison');

// log the result
console.log(index);`;

var cmMatchToShowCompletions = "var index = beasts.";

var cmCompletionChoices = [
  "indexOf('bison')",
  "indexOf('bison', 2)",
  "indexOf('bison', -2)",
  "indexOf('ant', 1)",
  "indexOf('duck')",
  "indexOf('aardvark')",
  "indexOf(2)"
];

var cmSelectLine = 4;
var cmSelectChStart = 19;
