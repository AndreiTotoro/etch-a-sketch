//Style one square div
const grid = document.querySelector(`#grid`);

//Create a 16 x 16  grid of square divs

for (let i = 1; i <= 16 * 16; i++) {
	const square = document.createElement(`div`);
	square.classList.toggle('square');
	grid.appendChild(square);
}
