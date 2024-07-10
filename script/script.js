let canvas = document.querySelector(".canvas")
canvas.style.cssText = "width: 640px; height: 640px; margin: 40px auto"

// create 16 rows
for (let i = 0; i < 16; i++) {
    let defaultRow = document.createElement("div")
    defaultRow.classList.toggle("row")
    defaultRow.style.cssText = "display: flex"
    defaultRow.style.minWidth = "100%"
    defaultRow.style.minHeight = "6.25%"
    canvas.appendChild(defaultRow)
}

// create 16 squares in each row
let allDefaultRows = document.querySelectorAll(".row")
allDefaultRows.forEach((row) => {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div")
        square.classList.toggle("square")
        square.style.cssText = "border: solid black 1px; flex: 1"
        row.appendChild(square)
    }
})

let allSquares = document.querySelectorAll(".square")
let square = document.querySelector(".square")

// mouseover effect
allSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
    })
})

// change the grid button
let btn = document.querySelector(".btn")
btn.addEventListener("click", function createNewGrid() {
    // get an input
    let userInput = prompt("Enter a number between 17 and 80", 16)

    if (userInput < 17 || userInput > 80) {
        alert("Choose a number between 17 and 80")
        return;
    }

    // delete the existing grid
    let existingRows = document.querySelectorAll(".row")
    existingRows.forEach((row) => {
        canvas.removeChild(row)
    })

    // create the new rows
    for (let i = 0; i < userInput; i++) {
        let newRow = document.createElement("div")
        newRow.classList.toggle("row")
        newRow.style.cssText = "display: flex"
        canvas.appendChild(newRow)
    }

    // calculate the number of new rows and the new height
    let newRows = document.querySelectorAll(".row")
    let numberOfRows = newRows.length
    let newHeight = 100 / numberOfRows

    // change the new row's heights to the new height
    newRows.forEach((newRow) => {
        newRow.style.minWidth = "100%"
        newRow.style.minHeight = `${newHeight}%`
    })

    // create the new squares
    newRows.forEach((row) => {
        for (let i = 0; i < userInput; i++) {
            let square = document.createElement("div")
            square.classList.toggle("square")
            square.style.cssText = "border: solid black 1px; flex: 1"
            row.appendChild(square)
        }
    })

    // mouse hover for the new squares
    let newSquares = document.querySelectorAll(".square")
    newSquares.forEach((newSquare => {
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = "black"
        })
    }))
})


// NOTE TO SELF

// I changed the code so when it creates new rows the class is the same as the old ones
// so the function that deletes the default grid can delete the new ones as well.
// therefore there won't be need for two functions that delete the existing and new rows.