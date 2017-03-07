var cmInitContent = 
`// create an array
var exampleArray = ['pigs', 'goats', 'sheep']

// add one or more elements
exampleArray.push('cows');

// log the result
console.log(exampleArray);`;

var cmMatchToShowCompletions = "exampleArray.";

var cmCompletionChoices = [
  "push('cows')",
  "push('fish', 'frogs')",
  "push('fish', 'frogs', 1, 2, 3, true)"
];

var cmSelectLine = 4;
var cmSelectChStart = 13;
