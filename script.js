let gameMode = '';
let marker = '';
let defaultState = '';
let difficulty = '';
let moveMade = false;
let firstMove = false;
let prio = false;
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Get references to HTML elements
const singlePlayerBtn = document.getElementById('singlePlayerBtn');
const twoPlayerBtn = document.getElementById('twoPlayerBtn');
const xMarkerBtn = document.getElementById('x');
const oMarkerBtn = document.getElementById('o');
const easyBtn = document.getElementById('easyBtn');
const mediumBtn = document.getElementById('mediumBtn');
const hardBtn = document.getElementById('hardBtn');
const startBtn = document.getElementById('startBtn');
const xMarker = document.getElementById('x').querySelector('path');
const oMarker = document.getElementById('o').querySelector('path');
const resetBtn = document.getElementById('resetButton');
const notArrow = document.getElementsByClassName('notArrow')[0];
const arrow = document.getElementsByClassName('arrow')[0];
const cells = document.querySelectorAll('.cell');
const announceWinner = document.createElement('div');

//variables to alter HTML elements//
const playerSelector = document.getElementById('playerSelector');
const markerSelector = document.getElementById('markerSelector');
const difficultySelector = document.getElementById('difficultySelector');
const easyStars = document.getElementById('easyBtn').querySelectorAll('path');
const mediumStars = document.getElementById('mediumBtn').querySelectorAll('path');
const hardStars = document.getElementById('hardBtn').querySelectorAll('path');
const onePlayerButtonSvg = document.getElementById('singlePlayerBtn').querySelectorAll('path');
const twoPlayerButtonSvg = document.getElementById('twoPlayerBtn').querySelectorAll('path');
const markerGroup = document.getElementById('markerGroup');
const difficultyGroup = document.getElementById('difficultyGroup');

//event listeners//
document.getElementById('easyBtn').addEventListener('click', easyActive);
document.getElementById('mediumBtn').addEventListener('click', mediumActive);
document.getElementById('hardBtn').addEventListener('click', hardActive);

// Add event listeners to buttons

resetBtn.addEventListener('click', () => {
  resetColors();
  resetGame();
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    resetColors();
    resetGame();
  }
});

function resetColors() {
  arrow.style.fill = 'var(--fourth-color)';
  arrow.style.stroke = 'var(--fourth-color)';
  notArrow.style.stroke = 'var(--fourth-color)';
  
  setTimeout(() => {
    arrow.style.fill = 'var(--third-color)';
    arrow.style.stroke = 'var(--third-color)';
    notArrow.style.stroke = 'var(--third-color)';
  }, 100);
}

singlePlayerBtn.addEventListener('click', () => {
  onePlayerActive();
  xActive();
  easyActive();
});

twoPlayerBtn.addEventListener('click', () => {
  multiPlayerActive();
  difficulty = '';
});

xMarkerBtn.addEventListener('click', () => {
  xActive();
});

oMarkerBtn.addEventListener('click', () => {
  oActive();
});

easyBtn.addEventListener('click', () => {
  easyActive();
});

mediumBtn.addEventListener('click', () => {
  mediumActive();
});

hardBtn.addEventListener('click', () => {
  hardActive();
});

startBtn.addEventListener('click', () => {
showBoard();
startGame(gameMode, marker, difficulty);
  if (gameMode === 'multi') {
    marker = 'X'
  };
});

document.addEventListener('DOMContentLoaded', function(){
  onePlayerActive();
});

function onePlayerActive() {
  playerSelector.style.left = '0%';
  playerSelector.style.borderRadius = '10px 0px 0px 10px'
  for (let i = 0; i < onePlayerButtonSvg.length; i++) {
    onePlayerButtonSvg[i].style.stroke = 'var(--first-color)';
    onePlayerButtonSvg[i].style.fill = 'var(--first-color)';
  }
  for (let i = 0; i < twoPlayerButtonSvg.length; i++) {
    twoPlayerButtonSvg[i].style.stroke = 'var(--third-color)';
    twoPlayerButtonSvg[i].style.fill = 'var(--third-color)';
  }
  markerGroup.style.display = 'flex';
  difficultyGroup.style.display = 'flex';
  gameMode = 'single';
  marker = 'X';
  defaultState = 'X';
  difficulty = 'easy';
};

function multiPlayerActive() {
  playerSelector.style.borderRadius = '0px 10px 10px 0px';
  playerSelector.style.left = '50%';
  for (let i = 0; i < onePlayerButtonSvg.length; i++) {
    onePlayerButtonSvg[i].style.stroke = 'var(--third-color)';
    onePlayerButtonSvg[i].style.fill = 'var(--third-color)';
  }
  for (let i = 0; i < twoPlayerButtonSvg.length; i++) {
    twoPlayerButtonSvg[i].style.stroke = 'var(--first-color)';
    twoPlayerButtonSvg[i].style.fill = 'var(--first-color)';
  }
  markerGroup.style.display = 'none';
  difficultyGroup.style.display = 'none';
  gameMode = 'multi';
};

function xActive() {
  markerSelector.style.left = '0%';
  xMarker.style.stroke = xMarker.style.fill = 'var(--first-color)';
  oMarker.style.stroke = oMarker.style.fill = 'var(--third-color)';
  marker = 'X';
  defaultState = 'X'
};

function oActive() {
  markerSelector.style.left = '50%';
  xMarker.style.stroke = xMarker.style.fill = 'var(--third-color)';
  oMarker.style.stroke = oMarker.style.fill = 'var(--first-color)';
  marker = 'O';
  defaultState = 'O'
  firstMove = true;
};


//difficulty selection//

function easyActive() {
  difficultySelector.style.left = '0px'
  difficultySelector.style.borderRadius = '10px 0px 0px 10px'
  for (let i = 0; i < easyStars.length; i++) {
    easyStars[i].style.stroke = 'var(--first-color)';
    easyStars[i].style.fill = 'var(--first-color)';
  }
  for (let i = 0; i < mediumStars.length; i++) {
    mediumStars[i].style.stroke = 'var(--third-color)';
    mediumStars[i].style.fill = 'var(--third-color)';
  }
  for (let i = 0; i < hardStars.length; i++) {
    hardStars[i].style.stroke = 'var(--third-color)';
    hardStars[i].style.fill = 'var(--third-color)';
  }
  difficulty = 'easy';
};

function mediumActive() {
    difficultySelector.style.left = '100px';
    difficultySelector.style.borderRadius = '0px'
    for (let i = 0; i < easyStars.length; i++) {
        easyStars[i].style.stroke = 'var(--third-color)';
        easyStars[i].style.fill = 'var(--third-color)';
    }
    for (let i = 0; i < mediumStars.length; i++) {
        mediumStars[i].style.stroke = 'var(--first-color)';
        mediumStars[i].style.fill = 'var(--first-color)';
    }
    for (let i = 0; i < hardStars.length; i++) {
        hardStars[i].style.stroke = 'var(--third-color)';
        hardStars[i].style.fill = 'var(--third-color)';
    }
    difficulty = 'medium';
};

function hardActive() {
  difficultySelector.style.left = '200px';
  difficultySelector.style.borderRadius = '0px 10px 10px 0px';
  for (let i = 0; i < easyStars.length; i++) {
    easyStars[i].style.stroke = 'var(--third-color)';
    easyStars[i].style.fill = 'var(--third-color)';
  }
  for (let i = 0; i < mediumStars.length; i++) {
    mediumStars[i].style.stroke = 'var(--third-color)';
    mediumStars[i].style.fill = 'var(--third-color)';
  }
  for (let i = 0; i < hardStars.length; i++) {
    hardStars[i].style.stroke = 'var(--first-color)';
    hardStars[i].style.fill = 'var(--first-color)';
  }
  difficulty = 'hard';
};

function computerFirstMove() {
  if (gameMode === 'single' && marker === 'O') {
    const xSvg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
    xSvg.setAttribute('viewBox', '0 0 100 100');
    xSvg.setAttribute('id', 'xSvg');
    xSvg.setAttribute('class', 'xMarker');
    xSvg.innerHTML = `<path d='M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
    c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
    c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
    c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
    c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
    l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z'/>`;
    const emptyCells = Array.from(cells).filter(cell => !cell.children[0]);
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    if (difficulty !== 'hard') {
      randomCell.appendChild(xSvg);
    }
    else {
      const cornerCells = [cells[0], cells[2], cells[6], cells[8]]; 
      const emptyCorners = cornerCells.filter(cell => !cell.children[0]); 
      const randomCorner = emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
      randomCorner.appendChild(xSvg);
      console.log('I took a corner cell.'); 
    }
  };
};

//probably needs adjusted//
function showBoard() {
  let container = document.querySelector('.container');
  let board = document.querySelector('.board');
  let startButton = document.querySelector('.startButton');
  startButton.addEventListener('animationend', removeSettings);
  startButton.addEventListener('animationend', addResetButton);
  function removeSettings() {
    container.style.display = 'none';
    board.style.display = 'flex';
  };
  function addResetButton() {
    resetBtn.style.display = 'block';
  }
  if (firstMove === true) {
    computerFirstMove();
    firstMove = false;
  };
}; 

// Function to start game with current settings
function startGame() {
  cells.forEach(cell => {
    const xSvg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
    xSvg.setAttribute('viewBox', '0 0 100 100');
    xSvg.setAttribute('id', 'xSvg');
    xSvg.setAttribute('class', 'xMarker');
    xSvg.innerHTML = `<path d='M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
    c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
    c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
    c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
    c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
    l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z'/>`;

    const xSvgHover = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
    xSvgHover.setAttribute('viewBox', '0 0 100 100');
    xSvgHover.setAttribute('id', 'xSvgHover');
    xSvgHover.setAttribute('class', 'xSvgHover');
    xSvgHover.innerHTML = `<path d='M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
    c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
    c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
    c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
    c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
    l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z'/>`;

    const oSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    oSvg.setAttribute('viewBox', '0 0 16 16');
    oSvg.setAttribute('id', 'oSvg');
    oSvg.setAttribute('class', 'oMarker')
    oSvg.innerHTML = `<path d='M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Zm0,9.42857A3.42857,3.42857,0,1,1,11.42857,8,3.42857,3.42857,0,0,1,8,11.42857Z'/>`;
    
    const oSvgHover = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    oSvgHover.setAttribute('viewBox', '0 0 16 16');
    oSvgHover.setAttribute('id', 'oSvgHover');
    oSvgHover.setAttribute('class', 'oSvgHover');
    oSvgHover.innerHTML = `<path d='M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Zm0,9.42857A3.42857,3.42857,0,1,1,11.42857,8,3.42857,3.42857,0,0,1,8,11.42857Z'/>`;
    
    if (!moveMade) {
      cell.addEventListener('mouseover', () => {
        if (marker === 'X') {
          if(cell.contains(oSvgHover)) {
            cell.removeChild(oSvgHover);
          }
            if (cell.childElementCount === 0) {
            cell.appendChild(xSvgHover);
          }
        }
        else if (marker === 'O') {
          if (cell.contains(xSvgHover)) {
            cell.removeChild(xSvgHover);
          }
          if (cell.childElementCount === 0) {
            cell.appendChild(oSvgHover);
          }
        }
      });

      cell.addEventListener('click', () => {
        if (moveMade) {
          return;
        }
        else if (marker === 'X') {
          cells.forEach(otherCell => {
            const xSvgHovers = otherCell.querySelectorAll('.xSvgHover');
            const oSvgHovers = otherCell.querySelectorAll('.oSvgHover');
            xSvgHovers.forEach(xSvgHover => {
              otherCell.removeChild(xSvgHover);
            });
            oSvgHovers.forEach(oSvgHover => {
              otherCell.removeChild(oSvgHover);
            });
          });
          if (cell.querySelector('.xMarker') || cell.querySelector ('.oMarker')) {
            return;
          }
          if (gameMode === 'multi') {
            marker = 'O';
          }
          if (difficulty === 'easy') {
            setTimeout(computerTurnEasy, 300);
          }
          if (difficulty === 'medium') {
            setTimeout(computerTurnMedium, 300);
          }
          if (difficulty === 'hard') {
            setTimeout(computerTurnHard, 300);
          }
          cell.appendChild(xSvg);
          checkWinCondition(cells);
          console.log(prio)
          if (gameMode !== 'multi') {
            moveMade = true;
            prio = false;
            return;
          }
        }
        else if (marker === 'O') {
          cells.forEach(otherCell => {
            const xSvgHovers = otherCell.querySelectorAll('.xSvgHover');
            const oSvgHovers = otherCell.querySelectorAll('.oSvgHover');
            xSvgHovers.forEach(xSvgHover => {
              otherCell.removeChild(xSvgHover);
            });
            oSvgHovers.forEach(oSvgHover => {
              otherCell.removeChild(oSvgHover);
            });
          });
          if (cell.querySelector('.xMarker') || cell.querySelector ('.oMarker')) {
            return;
          }
          if (gameMode === 'multi') {
            marker = 'X';
          }
          if (difficulty === 'easy') {
            setTimeout(computerTurnEasy, 300);
          }
          if (difficulty === 'medium') {
            setTimeout(computerTurnMedium, 300);
          }
          if (difficulty === 'hard') {
            setTimeout(computerTurnHard, 300);
          }
          cell.appendChild(oSvg);
          checkWinCondition(cells);
          if (gameMode !== 'multi') {
            moveMade = true;
            prio = false;
            return;
          }
        };
    })};
    
    function computerTurnEasy() {
      if (moveMade) {
        const emptyCells = Array.from(cells).filter(cell => !cell.children[0]);
        if (emptyCells.length === 0) {
          return;
        }
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (marker === 'X') {
          randomCell.appendChild(oSvg);
        }
        if (marker === 'O') {
          randomCell.appendChild(xSvg);
        }
        moveMade = false;
        checkWinCondition(cells);
        console.log(moveMade)
      };
    };

    function computerTurnMedium() {
      const emptyCells = Array.from(cells).filter(cell => !cell.children[0]);

      if (emptyCells.length === 0) {
        return;
      }

      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

      if (moveMade) {
        if (marker === 'X') {
          for (const combination of winningCombinations) {
            const symbols = combination.map(index => cells[index].children[0]);
            const xMarkers = symbols.filter(symbol => symbol?.classList.contains('xMarker'));
            const oMarkers = symbols.filter(symbol => symbol?.classList.contains('oMarker'));

            if (xMarkers.length === 0 && oMarkers.length === 2) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(oSvg);
                checkWinCondition(cells);
                console.log('i made a move to win! Cell:', emptyCellIndex);
                console.log(symbols.every(symbol => symbol?.classList.contains('oMarker')));
                prio = true;
                break;
              }
              console.log(oMarkers.length + 'oMarker length')
            }

            if (xMarkers.length === 2 && oMarkers.length === 0) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(oSvg);
                checkWinCondition(cells);
                console.log('i made a move to defend! Cell:', emptyCellIndex);
                prio = true;
                break;
              }
              console.log(xMarkers.length + 'xMarker length')
            }
          }

          if (!prio) {
            randomCell.appendChild(oSvg);
            console.log('i made a random move!!!', randomCell);
            console.log('Cell:', randomCell.dataset.index); // Log the random move
            checkWinCondition(cells);
          }   
          moveMade = false;     
        }

        else if (marker === 'O') {
          for (const combination of winningCombinations) {
            const symbols = combination.map(index => cells[index].children[0]);
            const xMarkers = symbols.filter(symbol => symbol?.classList.contains('xMarker'));
            const oMarkers = symbols.filter(symbol => symbol?.classList.contains('oMarker'));    

            if (xMarkers.length === 0 && oMarkers.length === 2) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(xSvg);
                checkWinCondition(cells);
                console.log('i made a move to defend! Cell:', emptyCellIndex);
                prio = true;
                break;
              }
              console.log(xMarkers.length + 'xMarker length')
            } 

            if (xMarkers.length === 2 && oMarkers.length === 0 ) {
            const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(xSvg);
                checkWinCondition(cells);
                console.log('i made a move to win! Cell:', emptyCellIndex);
                console.log(symbols.every(symbol => symbol?.classList.contains('oMarker')));
                prio = true;
                break;
              }
            console.log(oMarkers.length + 'oMarker length')           
            }
          }
          if (!prio) {
            randomCell.appendChild(xSvg);
            console.log('i made a random move!!!', randomCell);
            console.log('Cell:', randomCell.dataset.index); // Log the random move
            checkWinCondition(cells);
          }
          moveMade = false;
        };
      };
    };

    function computerTurnHard() {
      const emptyCells = Array.from(cells).filter(cell => !cell.children[0]);
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

      if (emptyCells.length === 0) {
        return;
      }
    
      if (moveMade) {
        if (marker === 'X') {
          for (const combination of winningCombinations) {
            const symbols = combination.map(index => cells[index].children[0]);
            const xMarkers = symbols.filter(symbol => symbol?.classList.contains('xMarker'));
            const oMarkers = symbols.filter(symbol => symbol?.classList.contains('oMarker'));
        
            if (xMarkers.length === 0 && oMarkers.length === 2) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(oSvg);
                checkWinCondition(cells);
                console.log('I made a move to win! Cell:', emptyCellIndex);
                prio = true;
                break;
              }
            }

            if (xMarkers.length === 2 && oMarkers.length === 0) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(oSvg);
                checkWinCondition(cells);
                console.log('I made a move to block! Cell:', emptyCellIndex);
                prio = true;
                break;
              }
            }
          }

          if (!prio) {
            const centerCell = cells[4];
            if (!centerCell.children[0]) {
              centerCell.appendChild(oSvg);
              checkWinCondition(cells);
              console.log('I took the center cell.');
              prio = true;
            }
          }
        
          if (!prio) {
            const cornerCells = [cells[0], cells[2], cells[6], cells[8]];
            const cornerSymbols = cornerCells.map(corner => corner.children[0]);
            const playerCorners = cornerSymbols.filter(symbol => symbol?.classList.contains('xMarker'));
            if (playerCorners.length === 2 && cells[4].children[0] && !cells[4].children[0].classList.contains('xMarker')) {
              const nonCornerCells = [cells[1], cells[3], cells[5], cells[7]];
              const emptyNonCornerCells = nonCornerCells.filter(cell => !cell.children[0]);
              const randomNonCornerCell = emptyNonCornerCells[Math.floor(Math.random() * emptyNonCornerCells.length)];
              if (emptyNonCornerCells.length > 0) {
                randomNonCornerCell.appendChild(oSvg);
                checkWinCondition(cells);
                console.log('I took a non-corner cell!');
                console.log(emptyNonCornerCells)
                prio = true;
              }
            }
          }

          if (!prio) {
            const cornerCells = [cells[0], cells[2], cells[6], cells[8]]; 
            const emptyCorners = cornerCells.filter(cell => !cell.children[0]); 
            if (emptyCorners.length > 0) {
              const randomCorner = emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
              randomCorner.appendChild(oSvg);
              checkWinCondition(cells); 
              console.log('I took a corner cell.'); 
              prio = true; 
            } 
          }
          
          if (!prio) {
            const nonCornerCells = [cells[1], cells[3], cells[5], cells[7]];
            const emptyNonCornerCells = nonCornerCells.filter(cell => !cell.children[0]);
            const cornerCells = [cells[0], cells[2], cells[6], cells[8]]; 
            const emptyCorners = cornerCells.filter(cell => !cell.children[0]);
            if (!emptyNonCornerCells.length > 0 && emptyCorners.length > 0) {
              randomCell.appendChild(oSvg);
              console.log('i made a random move!!!', randomCell);
              console.log('Cell:', randomCell.dataset.index); // Log the random move
              checkWinCondition(cells);
            }
          }
          moveMade = false;
        }

        if (marker === 'O') {
          for (const combination of winningCombinations) {
            const symbols = combination.map(index => cells[index].children[0]);
            const xMarkers = symbols.filter(symbol => symbol?.classList.contains('xMarker'));
            const oMarkers = symbols.filter(symbol => symbol?.classList.contains('oMarker'));
            
            if (xMarkers.length === 2 && oMarkers.length === 0) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(xSvg);
                checkWinCondition(cells);
                console.log('I made a move to win! Cells:', emptyCellIndex);
                prio = true;
                break;
              }
            }

            if (xMarkers.length === 0 && oMarkers.length === 2) {
              const emptyCellIndex = combination.find(index => !cells[index].children[0]);
              if (emptyCellIndex !== undefined) {
                cells[emptyCellIndex].appendChild(xSvg);
                checkWinCondition(cells);
                console.log('I made a move to block! Cells:', emptyCellIndex);
                prio = true;
                break;
              }
            }
          }

          if (!prio) {
            const centerCell = cells[4];
            const cornerCells = [cells[0], cells[2], cells[6], cells[8]]; 
            const emptyCorners = cornerCells.filter(cell => !cell.children[0]); 
            if (emptyCorners.length > 0 && !centerCell.children[0]) {
              const randomCorner = emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
              randomCorner.appendChild(xSvg);
              checkWinCondition(cells); 
              console.log('I took a corner cell.'); 
              prio = true;
            } 
            if (!prio && emptyCorners.length === 3 && centerCell.children) {
              const computerFirstMoveIndex = Array.from(cells).findIndex(cell => cell.children[0] && cell.children[0].classList.contains('xMarker'));
              let oppositeCornerIndex;
              if (computerFirstMoveIndex === 0) {
                oppositeCornerIndex = 8;
              }
              else if (computerFirstMoveIndex === 2) {
                oppositeCornerIndex = 6;
              }
              else if (computerFirstMoveIndex === 6) {
                oppositeCornerIndex = 2;
              }
              else if (computerFirstMoveIndex === 8) {
                oppositeCornerIndex = 0;
              }

              if (!cells[oppositeCornerIndex].children[0]) {
                cells[oppositeCornerIndex].appendChild(xSvg);
                checkWinCondition(cells);
                console.log('I took the opposite corner');
              }
            }
          }
          moveMade = false;
        }
      }
    };
  
    function checkWinCondition(cells) {
      for (const combination of winningCombinations) {
        const symbols = combination.map(index => cells[index].children[0]);
        if (symbols.every(symbol => symbol?.classList.contains('xMarker'))) {
          marker = 'X';
          console.log('Winning combination: ', combination);
          declareWinner();
          return;
        } 
        if (symbols.every(symbol => symbol?.classList.contains('oMarker'))) {
          marker = 'O';
          console.log('Winning combination: ', combination);
          declareWinner();
          return;
        }
        
        if (Array.from(cells).every(cell => cell.children[0] && (cell.children[0].classList.contains('xMarker') || cell.children[0].classList.contains('oMarker')))) {
          announceWinner.setAttribute('class', 'winner');
          document.querySelector('.content').appendChild(announceWinner);
          announceWinner.innerHTML = 'TIE GAME!'
        };
      };
    };
  })
};

function declareWinner() {
  announceWinner.setAttribute('class', 'winner');
  document.querySelector('.content').appendChild(announceWinner);
  if (marker === ('X') || ('O')) {
    announceWinner.innerHTML = marker + ' IS THE WINNER!';
  }
  marker = '';
};

function resetGame() {
  cells.forEach(cell => {
    while (cell.firstChild) {
      cell.removeChild(cell.firstChild);
    }
  });
  marker = defaultState;
  announceWinner.innerHTML = '';
  moveMade = false;
  prio = false;
  if (marker === 'O') {
    computerFirstMove();
  };
};