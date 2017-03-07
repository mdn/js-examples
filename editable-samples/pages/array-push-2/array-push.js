var cmInitContent = 
`// create an array
var exampleArray = ['pigs', 'goats', 'sheep']

// add one or more elements
exampleArray.push('cows');

// evaluate the result
exampleArray;`;

var cmMatchToShowCompletions = "exampleArray.";

var cmCompletionChoices = [
  "push('cows')",
  "push('fish', 'frogs')"
];

var cmSelectLine = 4;
var cmSelectChStart = 13;
