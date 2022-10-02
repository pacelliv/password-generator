const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
]

const myPopUpOne = document.getElementById("myPopUpOne")
const firstPassword = document.getElementById("field-text-one")
const secondPassword = document.getElementById("field-text-two")
const passwordLength = 15

function getPasswords() {
	firstPassword.textContent = generatePasswords()
	secondPassword.textContent = generatePasswords()
}

// generatePasswords() creates the ramdon passwords
function generatePasswords() {
	let password = ""
	for (let i = 0; i < passwordLength; i++) {
		password += getRandomCharacter()
	}
	return password
}

// getRandomCharacter() generates a string of 15 random characters
function getRandomCharacter() {
	let randomIndex = Math.floor(Math.random() * characters.length)
	return characters[randomIndex]
}

// The functions copyOne() and copyTwo() copy the passwords
function copyOne(that) {
	const inputEl = document.createElement("input")
	inputEl.value = that.textContent
	document.body.appendChild(inputEl)
	inputEl.select()
	document.execCommand("copy", false)
	inputEl.remove()
	myPopUpOne.classList.toggle("show")
}

function copyTwo(that) {
	const inputEl = document.createElement("input")
	inputEl.value = that.textContent
	document.body.appendChild(inputEl)
	inputEl.select()
	document.execCommand("copy", false)
	inputEl.remove()
	myPopUpTwo.classList.toggle("show")
}
