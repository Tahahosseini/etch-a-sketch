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
        square.textContent = "ABC"
        square.style.cssText = "height : 100px; width : 100px;"
        row.appendChild(square)
    }
})


