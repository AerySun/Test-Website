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

function playGame () {
  const ownChoice = document.querySelector('input[name="abc"]:checked').id
  const computerChoice = _.sample(choices)
  console.log(ownChoice, computerChoice)
  if (ownChoice === computerChoice) {
    results.draws++
  } else if (outcomes[ownChoice] === computerChoice) {
    results.wins++
  } else {
    results.losses++
  }
  for (const [key, value] of Object.entries(results)) {
    document.querySelector(`#counter_${key}`).innerHTML = value
  }
}
