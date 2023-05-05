//player selection toggle
(function markerToggle() {
    document.getElementById("x").addEventListener("click", xActive);
    document.getElementById("o").addEventListener("click", oActive);

    let markerSelector = document.getElementById("markerSelector");
    let oPath = document.getElementById("o").querySelector("path");
    let xPath = document.getElementById("x").querySelector("path");
    let reminder = document.getElementById("reminder");

    function xActive() {
        markerSelector.style.left = "0%";
        xPath.style.stroke = xPath.style.fill = "var(--first-color)";
        oPath.style.stroke = oPath.style.fill = "var(--third-color)";
        reminder.innerHTML = "X GOES FIRST"
    }

    function oActive() {
        markerSelector.style.left = "50%";
        xPath.style.stroke = xPath.style.fill = "var(--third-color)";
        oPath.style.stroke = oPath.style.fill = "var(--first-color)";
        reminder.innerHTML = "O GOES SECOND"
    }
})();

(function difficultyToggle() {
    document.getElementById("easy").addEventListener('click', easyActive);
    document.getElementById("medium").addEventListener('click', mediumActive);
    document.getElementById("hard").addEventListener('click', hardActive);

    let difficultySelector = document.getElementById("difficultySelector");
    let easyPaths = document.getElementById("easy").querySelectorAll("path");
    let mediumPaths = document.getElementById("medium").querySelectorAll("path");
    let hardPaths = document.getElementById("hard").querySelectorAll("path");

    function easyActive() {
        difficultySelector.style.left = "0%";
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
    }

    function mediumActive() {
        difficultySelector.style.borderRadius = "0px"
        difficultySelector.style.left = "100px";
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
    }

    function hardActive() {
        difficultySelector.style.borderRadius = "0px 10px 10px 0px";
        difficultySelector.style.left = "200px";
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
    }
})();


(function startGame() {
    let startButton = document.querySelector('.startButton');

    function startGame() {
        document.querySelector(".container").remove();
    }

    startButton.addEventListener("animationend", startGame);
})();
