import characters from "./utils/characters.js"
import toggler from "./utils/light-dark-mode.js"

document.addEventListener("click", (e) => {
    if (e.target.id === "generate-btn") {
        getPasswords()
    } else if (e.target.textContent && e.target.previousElementSibling.id) {
        copyPassword(e.target.textContent, e.target.previousElementSibling.id)
    } else if (
        e.target.id === "toggler--slider" ||
        e.target.id === "toggler--slider--circle"
    ) {
        toggler()
    }
})

/* getPasswords() takes the passwords returned by generatePasswords() and
set them as the values for the text fields */
function getPasswords() {
    document.getElementById("field-text-one").textContent = generatePasswords()
    document.getElementById("field-text-two").textContent = generatePasswords()
}

/* generatePasswords() use the random index returned by generateRandomIndex,
to create the passwords */
function generatePasswords() {
    let password = ""
    const passwordLength = 15
    for (let i = 0; i < passwordLength; i++) {
        password += generateRandomIndex()
    }
    return password
}

/* getRandomCharacter() generates a random index */
function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

/* copyPassword() saves the passwords to the clipboard */
function copyPassword(textContent, id) {
    const elem = document.createElement("textarea")
    elem.value = textContent
    document.body.appendChild(elem)
    elem.select()
    document.execCommand("copy")
    elem.remove()
    document.getElementById(id).classList.toggle("show")
}
