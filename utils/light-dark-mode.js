/* toggler() set the dark/light of the UI */

function toggler() {
    const idArr = [
        "toggler--light",
        "toggler--dark",
        "toggler--slider--circle",
        "toggler--slider",
        "container",
        "logo",
        "section-title",
        "section-subtitle",
        "instruction",
        "container-passwords",
        "pop-up-text-one",
        "pop-up-text-two",
    ]

    idArr.forEach((id) => document.getElementById(id).classList.toggle("dark"))
}

export default toggler
