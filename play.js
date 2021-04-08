const results = {
  wins: 0,
  draws: 0,
  losses: 0
}

const outcomes = {
  Schere: 'Papier',
  Stein: 'Schere',
  Papier: 'Stein'
}

const choices = ['Schere', 'Stein', 'Papier']

function playGame() {
  //document.querySelector() returns the first Element within the document that matches the specific selector
  const ownChoice = document.querySelector('input[name="abc"]:checked').id
  //pick a random element from the choices array
  const computerChoice = _.sample(choices)
  console.log(ownChoice, computerChoice)
  if (ownChoice === computerChoice) {
    results.draws++
  } else if (outcomes[ownChoice] === computerChoice) {
    results.wins++
  } else {
    results.losses++
  }
  refreshScoreboard()
}

function refreshScoreboard() {
  for (const [key, value] of Object.entries(results)) {
    document.querySelector(`#counter_${key}`).innerHTML = value
  }
}

newgame.addEventListener('click', () => {
  results.wins = 0
  results.draws = 0
  results.losses = 0
  refreshScoreboard()
})
