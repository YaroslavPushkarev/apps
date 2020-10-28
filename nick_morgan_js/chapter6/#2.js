let alphabet = 'abcdefghjklmnopqrstuvwxyz'
let randomString = ''

for (let i = 0; i < 6; i++) {
	randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomString)