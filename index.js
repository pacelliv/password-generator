import characters from "./characters.js"

document.addEventListener("click", (e) => {
    if (e.target.id === "generate-btn") {
        getPasswords()
    } else if (e.target.id === "field-text-one") {
        copyPassword(e.target.textContent, "pop-up-text-one")
    } else if (e.target.id === "field-text-two") {
        copyPassword(e.target.textContent, "pop-up-text-two")
    }
})

function getPasswords() {
    document.getElementById("field-text-one").textContent = generatePasswords()
    document.getElementById("field-text-two").textContent = generatePasswords()
}

// generatePasswords() creates the ramdon passwords
function generatePasswords() {
    let password = ""
    const passwordLength = 15
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

// copyPassword() saves the passwords to the clipboard
function copyPassword(textContent, id) {
    const elem = document.createElement("textarea")
    elem.value = textContent
    document.body.appendChild(elem)
    elem.select()
    document.execCommand("copy")
    elem.remove()
    document.getElementById(id).classList.toggle("show")
}
