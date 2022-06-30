const adviceNo = document.getElementById("advice-no")
const adviceText = document.getElementById("advice-text")
const dice = document.querySelector(".roll-dice")
const diceImg = document.querySelector(".click-dice")

function getQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            adviceNo.innerText = `Advice #${data.slip.id}`
            adviceText.innerText = `"${data.slip.advice}"`
            diceImg.classList.add('rotate')
        })
}
window.onload = getQuote
dice.addEventListener("click", getQuote)
dice.addEventListener("touchstart", getQuote)