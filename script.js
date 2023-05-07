let playerSelector = document.getElementById("playerSelector");
let onePath = document.getElementById("onePlayer").querySelectorAll("path");
let twoPath = document.getElementById("twoPlayer").querySelectorAll("path");
let markerGroup = document.getElementById("markerGroup");
let difficultyGroup = document.getElementById("difficultyGroup");
document.addEventListener("DOMContentLoaded", function(){
    onePlayerActive();
    xActive();
    easyActive();
});
document.getElementById("onePlayer").addEventListener('click', function(){
    onePlayerActive();
    xActive();
    easyActive();
});
document.getElementById("twoPlayer").addEventListener('click', twoPlayerActive);

const buttonX = document.getElementById("x")
const xPath = document.getElementById("x").querySelector("path");
const buttonO = document.getElementById("o")
const oPath = document.getElementById("o").querySelector("path");
const markerSelector = document.getElementById("markerSelector");

buttonX.addEventListener("click", function() {
    xActive();
});

buttonO.addEventListener("click", function() {
    oActive();
});

function xActive() {
    console.log('x')
    markerSelector.style.left = "0%";
    xPath.style.stroke = xPath.style.fill = "var(--first-color)";
    oPath.style.stroke = oPath.style.fill = "var(--third-color)";
    if (startGame()) {
        console.log('fuck')
    }
};

function oActive() {
    console.log('o')
    markerSelector.style.left = "50%";
    xPath.style.stroke = xPath.style.fill = "var(--third-color)";
    oPath.style.stroke = oPath.style.fill = "var(--first-color)";
};


//difficulty selection//

document.getElementById("easy").addEventListener('click', easyActive);
document.getElementById("medium").addEventListener('click', mediumActive);
document.getElementById("hard").addEventListener('click', hardActive);

let difficultySelector = document.getElementById("difficultySelector");
let easyPaths = document.getElementById("easy").querySelectorAll("path");
let mediumPaths = document.getElementById("medium").querySelectorAll("path");
let hardPaths = document.getElementById("hard").querySelectorAll("path");

function easyActive() {
    difficultySelector.style.left = "0px"
    difficultySelector.style.borderRadius = "10px 0px 0px 10px"
    for (let i = 0; i < easyPaths.length; i++) {
        easyPaths[i].style.stroke = "var(--first-color)";
        easyPaths[i].style.fill = "var(--first-color)";
    }
    for (let i = 0; i < mediumPaths.length; i++) {
        mediumPaths[i].style.stroke = "var(--third-color)";
        mediumPaths[i].style.fill = "var(--third-color)";
    }
    for (let i = 0; i < hardPaths.length; i++) {
        hardPaths[i].style.stroke = "var(--third-color)";
        hardPaths[i].style.fill = "var(--third-color)";
    }
    console.log('easy mode')
};

function mediumActive() {
    difficultySelector.style.left = "100px";
    difficultySelector.style.borderRadius = "0px"
    for (let i = 0; i < easyPaths.length; i++) {
        easyPaths[i].style.stroke = "var(--third-color)";
        easyPaths[i].style.fill = "var(--third-color)";
    }
    for (let i = 0; i < mediumPaths.length; i++) {
        mediumPaths[i].style.stroke = "var(--first-color)";
        mediumPaths[i].style.fill = "var(--first-color)";
    }
    for (let i = 0; i < hardPaths.length; i++) {
        hardPaths[i].style.stroke = "var(--third-color)";
        hardPaths[i].style.fill = "var(--third-color)";
    }
    console.log('medium mode');
};

function hardActive() {
    difficultySelector.style.left = "200px";
    difficultySelector.style.borderRadius = "0px 10px 10px 0px";
    for (let i = 0; i < easyPaths.length; i++) {
        easyPaths[i].style.stroke = "var(--third-color)";
        easyPaths[i].style.fill = "var(--third-color)";
    }
    for (let i = 0; i < mediumPaths.length; i++) {
        mediumPaths[i].style.stroke = "var(--third-color)";
        mediumPaths[i].style.fill = "var(--third-color)";
    }
    for (let i = 0; i < hardPaths.length; i++) {
        hardPaths[i].style.stroke = "var(--first-color)";
        hardPaths[i].style.fill = "var(--first-color)";
    }
    console.log('hard mode');
};


function onePlayerActive() {
    playerSelector.style.left = "0%";
    playerSelector.style.borderRadius = "10px 0px 0px 10px"
    for (let i = 0; i < onePath.length; i++) {
        onePath[i].style.stroke = "var(--first-color)";
        onePath[i].style.fill = "var(--first-color)";
    }
    for (let i = 0; i < twoPath.length; i++) {
        twoPath[i].style.stroke = "var(--third-color)";
        twoPath[i].style.fill = "var(--third-color)";
    }
    markerGroup.style.display = "flex";
    difficultyGroup.style.display = "flex";
    console.log('single player')
};

function twoPlayerActive() {
    playerSelector.style.borderRadius = "0px 10px 10px 0px";
    playerSelector.style.left = "50%";
    for (let i = 0; i < onePath.length; i++) {
        onePath[i].style.stroke = "var(--third-color)";
        onePath[i].style.fill = "var(--third-color)";
    }
    for (let i = 0; i < twoPath.length; i++) {
        twoPath[i].style.stroke = "var(--first-color)";
        twoPath[i].style.fill = "var(--first-color)";
    }
    markerGroup.style.display = "none";
    difficultyGroup.style.display = "none";

    cells.forEach(cell => {
        const xSvg = document.createElementNS ("http://www.w3.org/2000/svg", "svg");
        xSvg.setAttribute("viewBox", "0 0 100 100");
        xSvg.setAttribute("id", "xSvg");
        xSvg.setAttribute("class", "xPath");
        xSvg.innerHTML = `<path d="M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
        c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
        c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
        c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
        c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
        l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z"/>`;

        const xSvgHover = document.createElementNS ("http://www.w3.org/2000/svg", "svg");
        xSvgHover.setAttribute("viewBox", "0 0 100 100");
        xSvgHover.setAttribute("id", "xSvgHover");
        xSvgHover.innerHTML = `<path d="M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
        c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
        c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
        c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
        c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
        l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z"/>`;

        const oSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        oSvg.setAttribute("viewBox", "0 0 16 16");
        oSvg.setAttribute("id", "oSvg");
        oSvg.setAttribute("class", "oPath")
        oSvg.innerHTML = `<path d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Zm0,9.42857A3.42857,3.42857,0,1,1,11.42857,8,3.42857,3.42857,0,0,1,8,11.42857Z"/>`;
        
        const oSvgHover = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        oSvgHover.setAttribute("viewBox", "0 0 16 16");
        oSvgHover.setAttribute("id", "oSvgHover");
        oSvgHover.innerHTML = `<path d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Zm0,9.42857A3.42857,3.42857,0,1,1,11.42857,8,3.42857,3.42857,0,0,1,8,11.42857Z"/>`;
        
        cell.addEventListener('mouseover', () => {
            if (currentPlayer === 'X') {
                if(cell.contains(oSvgHover)) {
                    cell.removeChild(oSvgHover);
                }
                if (cell.childElementCount === 0) {
                    cell.appendChild(xSvgHover);
                }
                
            }
            if (currentPlayer === 'O') {
                if(cell.contains(xSvgHover)) {
                    cell.removeChild(xSvgHover);
                }
                if (cell.childElementCount === 0) {
                    cell.appendChild(oSvgHover);
                }
            }
        });

        cell.addEventListener('click', () => {
            if (currentPlayer === 'X') {
                if (cell.contains(xSvgHover)) {
                    cell.removeChild(xSvgHover);
                }
                if (cell.contains(oSvgHover)) {
                    cell.removeChild(oSvgHover);
                }
                if (cell.contains(oSvg)) {
                    return;
                }
                cell.appendChild(xSvg);
                currentPlayer = 'O';
                checkWinCondition(cells);
            }
            if (currentPlayer === 'O') {
                if (cell.contains(oSvgHover)) {
                    cell.removeChild(oSvgHover);
                }
                if (cell.contains(xSvgHover)) {
                    cell.removeChild(xSvgHover);
                }
                if (cell.contains(xSvg)) {
                    return;
                }
                cell.appendChild(oSvg);

                currentPlayer = 'X';
                checkWinCondition(cells);
            };

            function checkWinCondition(cells) {
                const winningCombinations = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];
                
                for (const combination of winningCombinations) {
                    const symbols = combination.map(index => cells[index].children[0]);
                    if (symbols.every(symbol => symbol?.classList.contains('xPath'))) {
                        currentPlayer = 'X';
                        declareWinner();
                        return;
                    } 
                    else if (symbols.every(symbol => symbol?.classList.contains('oPath'))) {
                        currentPlayer = 'O';
                        declareWinner();
                        return;
                    }
                    console.log(symbols)
                }                
                console.log('No winner yet!');
                }          
        });
    });
    console.log('two player')
};

function startGame() {
    let container = document.querySelector(".container");
    let board = document.querySelector(".board");
    board.style.display = "none";

    let startButton = document.querySelector('.startButton');
    startButton.addEventListener("animationend", removeSettings);
    function removeSettings() {
        container.style.display = "none";
        board.style.display = "flex";
    };
}; 

const cells = document.querySelectorAll('.cell');
const cellsHover = document.querySelectorAll('.cellHover');
let currentPlayer = 'X';

function declareWinner() {

    console.log(currentPlayer + " is the winner!")
    const announceWinner = document.createElement("div")
    announceWinner.setAttribute("class", "winner")
    announceWinner.innerHTML = currentPlayer + " IS THE WINNER!"
    document.querySelector(".content").appendChild(announceWinner);
}

