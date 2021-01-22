// fetch request
const colors = fetch('../data/colors.json')
	.then(response => response.json());

export default await colors;