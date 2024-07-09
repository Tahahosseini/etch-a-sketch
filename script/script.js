let canvas = document.querySelector(".canvas")
canvas.style.cssText = "width: 640px; height: 640px; margin: 40px auto"

// create 16 rows
for (let i = 0; i <= 15; i++) {
    let row = document.createElement("div")
    row.classList.toggle("row")
    row.style.cssText = "display: flex"
    row.style.minWidth = "100%"
    row.style.minHeight = "6.25%"
    canvas.appendChild(row)
}

// create 16 squares in each row
let rows = document.querySelectorAll(".row")
rows.forEach((row) => {
    for (let i = 0; i <= 15; i++) {
        let square = document.createElement("div")
        square.classList.toggle("square")
        square.style.cssText = "border: solid black 1px; flex: 1"
        row.appendChild(square)
    }
})

let allSquares = document.querySelectorAll(".square")
let square = document.querySelector(".square")

allSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
    })
})


// button
let btn = document.querySelector(".btn")

btn.addEventListener("click", function input() {

    let userInput = prompt("Enter a number between 16 and 100", 16)

})

// 640px wide
function changeDimension() {




}

// TO DO (in the function)
// remove the Original Grid
// create a for loop that creates n rows based on user input
// create a for loop that creates n squares in each row based on user input