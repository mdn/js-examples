// fetch request
const colors = fetch('/modules/top-level-await/data/colors.json')
	.then(response => response.json());

export default await colors;