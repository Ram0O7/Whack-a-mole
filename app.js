const squires = document.querySelectorAll(".squire")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result = 0
let hitPosition
let currentTime = 60;
let timerId = null;

function randomSquire() {
    squires.forEach(squire => {
        squire.classList.remove('mole')
    })

    let randomPosition = squires[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

squires.forEach(squire => {
    squire.addEventListener("click", () => {
        if (squire.id == hitPosition) {
            result++;
            score.textContent = result
            hitPosition = null
    }
})
})

function moveMole() {
    setInterval(randomSquire, 400);
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        if (confirm("GAME OVER! Your final score is " + result)) {
            window.location = 'index.html'
        }
        currentTime = 60;
    }
}

let countDownTimerId = setInterval(countDown, 1000);