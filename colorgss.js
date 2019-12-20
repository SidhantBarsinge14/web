var color = randomcolors(6);


var square = document.getElementsByClassName("square");
var ans = color[pickedc(6)];
var h1 = document.getElementById("Guess");
var res = document.getElementById("res");
var h = document.querySelector("h1")
var rbutton = document.querySelector("#rb")
var ebutton = document.querySelector("#easy")
var hbutton = document.querySelector("#hard")
var mode = 2;
check(6)

ebutton.addEventListener("click", function(params) {
    easym()

})
hbutton.addEventListener("click", function(params) {
    hardm()

})

rbutton.addEventListener("click", function name(params) { //reset button
    if (mode === 1) {
        easym();

    } else {
        hardm()
    }
    rbutton.textContent = "New Colors"
})

h1.textContent = ans; //to tell if you are correct or try again

function setColors(n) { //give colors to blocks
    for (var i = 0; i < color.length; i++) {
        square[i].style.background = color[i];
        square[i].style.display = "block";

    }

}
setColors(6);

function check(n) { //to check if you guessed
    for (var i = 0; i < n; i++) {

        square[i].addEventListener("click", function(params) {
            if (this.style.background == ans) {
                res.textContent = "Correct!"
                rbutton.textContent = "Play Again"
                for (var j = 0; j < square.length; j++) {
                    square[j].style.background = ans;
                }
                h.style.background = ans;
            } else {
                this.style.background = "black"
                clickc = this.style.background;
                res.textContent = "Try again!"
            }

        })

    }
}

function pickedc(n) { //To pick random color from list of colors
    num = n * Math.random();
    return Math.floor(num);

}

function randomcolors(n) { //To  create random list of colors
    var rc = []

    for (var i = 0; i < n; i++) {
        var r = Math.floor(256 * Math.random());
        var g = Math.floor(256 * Math.random());
        var b = Math.floor(256 * Math.random());
        rc[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return rc;
}

function reset(m) { //resets the game

    color = randomcolors(m)
    ans = color[pickedc(m)];
    setColors(m)
    check(m)

    h1.textContent = ans;
    h.style.backgroundColor = "steelblue"
    res.textContent = " "



}

function hardm(params) { //hardmode
    mode = 2;
    hbutton.classList.add("selected")
    ebutton.classList.remove("selected")
    reset(6)
}

function easym(params) { //easy mode
    ebutton.classList.add("selected")
    hbutton.classList.remove("selected")
    mode = 1;
    reset(3);
    for (var i = 3; i < 6; i++) {
        square[i].style.display = "none"
    }
}