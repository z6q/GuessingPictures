const schaetzInput = document.getElementById("wieAlt")
const schaetzBtn = document.getElementById("submitBtn")
const nextBild = document.getElementById("nextPct")
const schaetzBild = document.getElementById("imgContainer")
const person = document.getElementById("person")
const berufPerson = document.getElementById("berufPerson")
const schaetzErg = document.getElementById("ergebnis")
const differenz = document.getElementById("unterschied")
const lightMode = document.getElementById("lightBtn")
const darkMode = document.getElementById("darkBtn")
const body = document.querySelector("body")
const ergText = document.querySelector(".txt")
const lightDark = document.querySelector(".lightDark")
let portraits
let letztBild

function nxtBld() {
  letztBild = Math.round(Math.random() * portraits.length)
  schaetzBild.innerHTML = `<img
    src="${portraits[letztBild].bildlink}"
    alt="ak"
    class="bild"
  />`
  person.innerHTML = ""
  berufPerson.innerHTML = ""
  schaetzErg.innerHTML = ""
  differenz.innerHTML = ""
  schaetzInput.value = ""
}

function schaetzvergleich() {
  let zwischen
  zwischen = Math.abs(portraits[letztBild].jahr - schaetzInput.value)
  person.innerHTML = "Auf dem Bild ist: " +portraits[letztBild].name
  berufPerson.innerHTML = "Diese Person war " +portraits[letztBild].job
  schaetzErg.innerHTML = "Richtig wäre: ca." +portraits[letztBild].jahr
  differenz.innerHTML = "Differenz: " +zwischen+ " Jahre"
}

function dark() {
  body.style.backgroundColor = "#222f3e"
  ergText.style.color = "#1dd1a1"
  schaetzBtn.style.backgroundColor = "#1dd1a1" // Submit
  schaetzBtn.style.color = "#222f3e"
  nextBild.style.backgroundColor = "#1dd1a1"
  nextBild.style.color = "#222f3e"


  schaetzInput.style.backgroundColor = "#1dd1a1"
  schaetzInput.className = "einfg darkInputPlaceholder"
  lightDark.style.backgroundColor = "#1dd1a1"
  lightDark.style.color = "#222f3e"
}

function light() {
  body.style.backgroundColor = "#1dd1a1"
  ergText.style.color = "#000"
  schaetzBtn.style.backgroundColor = "#222f3e"
  nextBild.style.backgroundColor = "#222f3e"
  schaetzBtn.style.color = "#fff"
  nextBild.style.color = "#fff"
  schaetzInput.style.backgroundColor = "#222f3e"
  schaetzInput.className = "einfg lightModePlaceholder"
  lightDark.style.backgroundColor = "#222f3e"
  lightDark.style.color = "#fff"
}

fetch("./portraits.json").then((so) => so.json()).then((yas) => {
  portraits = yas
  schaetzBtn.addEventListener("click", schaetzvergleich)
  nextBild.addEventListener("click", nxtBld)
  darkMode.addEventListener("click", dark)
  lightMode.addEventListener("click", light)
  nxtBld()
})