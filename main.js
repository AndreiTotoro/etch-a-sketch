//Get elements from dom
const grid = document.querySelector(`#grid`);
const changeButton = document.querySelector(`#change-grid`)


//Change the size of the current grid
const makeGrid = (size) => {

const oldgrid = document.querySelectorAll('.square')
oldgrid.forEach((div) => {
	div.remove()
})

for (let i = 1; i <= size * size; i++) {
	const square = document.createElement(`div`);
	square.classList.toggle('square');
	square.style.height = `${800.0 / size - 2}px`
	square.style.width = `${800.0 / size - 2}px`
	grid.appendChild(square);
}

}
//Update the grid with the value the user gives
const gridChanger = () => {
	makeGrid(prompt("What size grid do you want?"))
}

changeButton.addEventListener('click', gridChanger)

makeGrid(16)