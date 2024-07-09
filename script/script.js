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
let count = 0
btn.addEventListener("click", () => {
    // get an input
    let userInput = prompt("Enter a number between 16 and 100", 16)

    if (userInput < 17 || userInput > 80) {
        alert("Choose a number between 17 and 80")
        return;
    }

    // delete the new grid after the first change
    if (count >= 1) {
        let newRows = document.querySelectorAll(".newrow")
        newRows.forEach((newRow) => {
            canvas.removeChild(newRow)
        })
    }

    // delete the old grid
    if (count === 0) {
        ++count
        rows.forEach((row) => {
            canvas.removeChild(row)
        })
    }

    // create the new rows
    for (let i = 0; i < userInput; i++) {
        let newRow = document.createElement("div")
        newRow.classList.toggle("newrow")
        newRow.style.cssText = "display: flex"
        // newRow.style.minWidth = "100%"
        // newRow.style.minHeight = "6.25%"
        canvas.appendChild(newRow)
    }

    // calculate the number of new rows and the new height
    let newRows = document.querySelectorAll(".newrow")
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

// I WAS INCREMENTING TO THE COUNT BEFORE REACHING THE FUNCTION THAT REMOVES THE NEW ROWS.

// SO WHEN THE OLD ROWS GOT REMOVED IT ADDED 1 TO THE COUNT AND THAT TRIGGERED THE REMOVE NEW ROWS SO IT INSTANTLY GOT REMOVED AFTER BEING CREATED.

// ALSO THE COUNT VARIABLE NEEDED TO BE OUTSIDE THE EVENT LISTENER IDK WHY

// CHATGPT EXPLANATION: If count were declared inside the event listener, it would reset to 0 each time the button is clicked, defeating the purpose of keeping track of the number of clicks.

// ALSO: ANOTHER REASON WHY THE CODE BROKE WAS THAT I WAS TRYING TO ACCESS THE LIST OF THE NEW ROWS BEFORE I DECLARED IT. SO NOW WE HAVE TWO VARIABLES THAT CONTAIN THE SAME INFO.

// MY BIGGEST PROBLEM WAS WITH THE LOGIC FLOW