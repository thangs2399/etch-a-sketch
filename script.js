//body
const body = document.createElement("div");
body.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between; align-items: center;")
body.setAttribute("id", "body");

const mainBody = document.getElementById("mainBody");
mainBody.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; background-color: lightblue;")

const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
title.setAttribute("style", "text-align: center;");

mainBody.appendChild(title);
mainBody.appendChild(body);

// add buttons

//reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.setAttribute("style", "border: 3px solid blue; background-color: grey;");
resetButton.setAttribute("id", "reset");

//create button
const createButton = document.createElement("button");
createButton.textContent = "Create";
createButton.setAttribute("style", "border: 3px solid blue; background-color: red;");
createButton.setAttribute("id", "create");

//append buttons
const buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "buttons");
buttonDiv.appendChild(resetButton);
buttonDiv.appendChild(createButton);



// main div
const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "mainDiv");
body.appendChild(mainDiv);

// append the buttons div to body
body.appendChild(buttonDiv);


//Variables
let row = 16;
let column = 16;

/*
    This function will create a num of columns
*/
function createColumn(column) {
    

    //main div to store 16 divs
    const divMain = document.createElement("div");
    divMain.setAttribute("style", "display: flex;") // set display of divMain to display
    divMain.setAttribute("id", "divMain");

    //iterate column times 
    for (let i = 0; i < column; i++) {

        //div
        const div = document.createElement("div");

        //attributes of div
        div.setAttribute("style", "border: 2.5px solid black; width: 30px; height: 30px; text-align: center; margin: 0; padding: 0; background-color: white");
        div.style.color = "red";
        div.classList.add("div");
        
        //append to the divMain
        divMain.appendChild(div);
    }

    //append divMain to the body
    mainDiv.appendChild(divMain);
}

// color the pad
function colorPad() {

    /* coloring the grids */

    const divs = document.querySelectorAll(".div");
    const buttons = document.querySelectorAll("button");

    // iterate the divs
    divs.forEach((div) => {

        //when hover
        div.addEventListener("mouseover", hover);

    });

    //iterate buttons
    buttons.forEach((button) => {

        button.addEventListener("click", clicked);
        
    })
}

function coo(event) {

    createPad(4,4);
}

// this will create a row * column grids of divs
function createPad(row , column) {

    for (let i = 0; i < row; i++) {

        createColumn(column);
    }
    
    colorPad();
}

// reset the pad
function clear() {

    while(mainDiv.hasChildNodes()) {

        mainDiv.removeChild(mainDiv.childNodes[0]);
    }

}

//change color when hovering
function hover(event) {

    //text color change to oragne while hovering
    let r = (Math.floor(Math.random() * 255));
    let g = (Math.floor(Math.random() * 255));
    let b = (Math.floor(Math.random() * 255));
    let randColor = new String("rgb(" + r + ", " + g + ", " + b + ")");
    event.target.style.backgroundColor = randColor;

    /*
    //reset color after delay
    setTimeout(function() {

        event.target.style.color = "red";
    }, 400);
    */
}

// change color when it is not hovering
function notHover(event) {

    //text color change to oragne while hovering
    event.target.style.backgroundColor = "";

    /*
    //reset color after delay
    setTimeout(function() {

        event.target.style.color = "red";
    }, 400);
    */
}

function clicked(event){

    if (event.target.id == "reset") {

        clear(); // clear the pad
        createPad(row, column);

    } else if (event.target.id == "create") {

        row = prompt("Enter number of rows (rows <= 100): ");
        column = prompt("Enter number of columns (columns <= 100): ");
        clear();

        if (row > 100) {

            row = 100;
        }

        if (column> 100) {

            column = 100;
        }

        createPad(row, column); // create a new pad according the inputs
    }
}

createPad(row,column); // initial pad





