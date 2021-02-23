// fetch request
const colors = fetch('https://mdn.github.io/js-examples/modules/top-level-await/data/colors.json')
	.then(response => response.json());

export default await colors;