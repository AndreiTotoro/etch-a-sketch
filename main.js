//Get elements from dom
const grid = document.querySelector(`#grid`);
const changeButton = document.querySelector(`#change-grid`)

const addListeners = (group) => {
	group.forEach((element) => {
		element.addEventListener('click', () => {
			
				element.classList.toggle("clicked")
			
		})
	})
}
//Change the size of the current grid
const makeGrid = (size) => {

	if(size < 2 || size > 100){
		alert("Please set a size between 2 and 100!")
		return
	} 
	


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
const newGrid = document.querySelectorAll('.square')

addListeners(newGrid)

}
//Update the grid with the value the user gives

changeButton.addEventListener('click', () => {
	makeGrid(prompt("What size grid do you want?"))
})

makeGrid(16)