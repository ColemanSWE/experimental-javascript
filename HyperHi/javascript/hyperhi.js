const cursor = document.querySelector("div.cursor")
const canvasIn = document.querySelector("canvas.in")
const canvasOut = document.querySelector("canvas.out")

let isMouseDown = false

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
const setupCanvas = (canvas) => {
    const bodyTag = document.querySelector("body")

    const w = window.innerWidth
    const h = bodyTag.offsetHeight
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    // context for canvas? 2d? 3d?
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    if (canvas.classList.contains("in")) {
        context.fillStyle = "#000000"
        context.strokeStyle = "#ffffff"
    } else {
        context.fillStyle = "#ffffff"
        context.strokeStyle = "#000000"
    }

    context.lineWidth = 80
    context.lineCap = "round"
    context.lineJoin = "round"

    context.shadowBlur = 10
    context.shadowColor = context.strokeStyle

    context.rect(0, 0, w, h)
    context.fill()
}

// starting to draw based on canvas, x, and y
const startDraw = (canvas, x, y) => {
    const context = canvas.getContext("2d")
    
    context.moveTo(x, y)
    context.beginPath()
}

// lets draw based on canvas, x, and y
const moveDraw = (canvas, x, y) => {
    const context = canvas.getContext("2d")
    
    if (isMouseDown) {
        context.lineTo(x, y)
        context.stroke()
    }
}




setupCanvas(canvasIn)
setupCanvas(canvasOut) 

document.addEventListener("mousedown", (event) => {
    isMouseDown = true
    growCursor()
    startDraw(canvasIn, event.pageX, event.pageY)
    startDraw(canvasOut, event.pageX, event.pageY)
})

document.addEventListener("mouseup", () => {
    isMouseDown = false
    shrinkCursor()
})

document.addEventListener("mousemove", (event) => {
    console.log(event)
    // event pageX -> Where we are on x axis. 
    // event pageY -> where we are on y axis. 
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)
})

window.addEventListener("resize", () => {
    setupCanvas(canvasIn)
    setupCanvas(canvasOut)
})