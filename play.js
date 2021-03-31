
const schere = document.getElementById("Schere")
const stein = document.getElementById("Stein")
const papier = document.getElementById("Papier")
const game2 = [schere, stein, papier]

//Zufallsprinzip
const min = 1
const max = 4
//const zufall = Math.floor (Math.random() * (max - min +1 )) +min

schere.addEventListener('click', () => {
  stein.checked = false
  papier.checked = false
})

stein.addEventListener('click', () => {
  schere.checked = false
  papier.checked = false
})

papier.addEventListener('click', () => {
  schere.checked = false
  stein.checked = false
})

const playbutton = document.getElementById('playbutton')
let wincounter = 0
let losecounter = 0
const wins = document.getElementById('wincounter')
const loses = document.getElementById('losecounter')
playbutton.addEventListener('click', () => {

}
