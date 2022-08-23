
const container = document.getElementById("container");
const btnInput = document.getElementById("input");
const btnReset = document.getElementById("reset");
let height = 16;
let width = 16;

function grid() {
    container.textContent = '';
    container.style.gridTemplateColumns = (`repeat(${height}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${width}, 1fr`);
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            const div = document.createElement("div")
            container.appendChild(div)
            div.addEventListener("mouseover",()=> div.setAttribute("id", "highlight"));
        }
    }
}

function gridReset(){
        container.textContent = '';
        container.style.gridTemplateColumns = (`repeat(${height}, 1fr`);
        container.style.gridTemplateRows = (`repeat(${width}, 1fr`);
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            const div = document.createElement("div")
            container.appendChild(div)
            div.addEventListener("mouseover",()=> div.setAttribute("id", "highlight")); 
        }
        }
    }

function size(){
    height = prompt("Please enter the height of the grid");
    width = prompt("Please enter the width of the grid");
    if(height <= 100 && width <= 100 && height >= 1 && width >= 1 ){
        container.textContent = '';
        container.style.gridTemplateColumns = (`repeat(${height}, 1fr`);
        container.style.gridTemplateRows = (`repeat(${width}, 1fr`);
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            const div = document.createElement("div")
            container.appendChild(div)
            div.addEventListener("mouseover",()=> div.setAttribute("id", "highlight"))
        }
        }
    }
    else alert("Choose size between 1 and 100")
}
    grid()
    btnInput.addEventListener("click", size)
    btnReset.addEventListener("click", gridReset)
    