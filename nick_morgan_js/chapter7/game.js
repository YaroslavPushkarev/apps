let words = [
	'programing',
	'languages',
	'football',
	'monkey'
]

let word = words[Math.floor(Math.random() * words.length)]

let answer = []
for(let i = 0;i < word.length;i++){
	answer[i] = '_'
}

let remainingLetters = word.length
let attempt = 5
while (remainingLetters > 0 && attempt > 0) {
	
	alert(answer.join (" "))

	let guess = prompt('Put a letter')
	guess = guess.toLowerCase()

	if (guess === null ){
		break;
	} else if (guess.length !== 1){
		alert('Please enter a single letter')
	}else{
		attempt--
		for(let j = 0;j < word.length;j++){
			if(word[j] === guess && answer[j] === '_'){		
				answer[j] = guess
				remainingLetters--;
			}
		}
	}
}

alert('The secret word is: ' + word)

