// variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnShow = document.querySelector("#btnShow")
const btnAgain = document.querySelector("#btnAgain")
const luckyText = document.querySelector("#luckyText")
const cookiePhrases = ["Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", "Defeitos e virtudes são apenas dois lados da mesma moeda.", "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.", "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.", "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..", "Acredite em milagres, mas não dependa deles.", "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.", "Quem quer colher rosas tem de estar preparado para suportar os espinhos.", "O conhecimento é a única virtude e a ignorância é o único vício.", "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."]
let randomPhrase = Math.round(Math.random() * cookiePhrases.length)
let newLuck = luckyText.innerHTML = cookiePhrases[randomPhrase]

// Eventos
btnShow.addEventListener('click', phraseLucky)
btnAgain.addEventListener('click', newPhrase)

// Funções
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function phraseLucky(event) {
  event.preventDefault()
  toggleScreen()
}

function newPhrase(event) {
  event.preventDefault()
  toggleScreen()
  randomPhrase = Math.round(Math.random() * cookiePhrases.length)
  newLuck = luckyText.innerHTML = cookiePhrases[randomPhrase]
}

