let canvas = document.querySelector(".canvas")


// create 16 rows
for (let i = 0; i <= 15; i++) {
    let row = document.createElement("div")
    row.classList.toggle("row")
    row.style.cssText = "display: flex;"
    canvas.appendChild(row)
}

// create 16 squares in each row
let rows = document.querySelectorAll(".row")
rows.forEach((row) => {
    for (let i = 0; i <= 15; i++) {
        let square = document.createElement("div")
        square.classList.toggle("square")
        square.style.cssText = "height : 25px; width : 25px; border: solid black 1px;"
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
