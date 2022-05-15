// fetch request
const colors = fetch('https://raw.githubusercontent.com/mdn/js-examples/master/module-examples/top-level-await/data/colors.json')
	.then(response => response.json());

export default await colors;