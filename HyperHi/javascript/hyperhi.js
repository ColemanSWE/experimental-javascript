const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")

// when I click, make the cursor bigger 
const growCursor = () => {
    cursor.classList.add("is-down")
}

// when I let off of click make it small again
const shrinkCursor = () => {
    cursor.classList.remove("is-down")
}

// move the cursor based on coordinates. 
const moveCursor = (x, y) => {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

// set up a canvas 
const setup = (canvas) => {
    const w = window.innerWidth
    const h = window.innerHeight
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
}

setupCanvas(canvasTag)




document.addEventListener("mousedown", () => {
    growCursor()
})

document.addEventListener("mouseup", () => {
    shrinkCursor()
})

document.addEventListener("mousemove", (event) => {
    console.log(event)
    // event pageX -> Where we are on x axis. 
    // event pageY -> where we are on y axis. 
    moveCursor(event.pageX, event.pageY)
})