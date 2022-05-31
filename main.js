//Style one square div
const grid = document.querySelector(`#grid`);
const changeButton = document.querySelector(`#change-grid`)

//Create a 16 x 16  grid of square divs
const makeGrid = (size) => {

const oldgrid = document.querySelectorAll('.square')
oldgrid.forEach((div) => {
	div.remove()
})

for (let i = 1; i <= size * size; i++) {
	const square = document.createElement(`div`);
	square.classList.toggle('square');
	square.style.height = `${100.0 / size}%`
	square.style.width = `${100.0 / size}%`
	grid.appendChild(square);
}

}

const gridChanger = () => {
	makeGrid(prompt("What size grid do you want?"))
}

changeButton.addEventListener('click', gridChanger)

makeGrid(16)