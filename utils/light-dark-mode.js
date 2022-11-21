/* toggler() set the dark/light of the UI */

function toggler() {
    document.getElementById("toggler--light").classList.toggle("dark")
    document.getElementById("toggler--dark").classList.toggle("dark")
    document.getElementById("toggler--slider--circle").classList.toggle("dark")
    document.getElementById("toggler--slider").classList.toggle("dark")
    document.getElementById("container").classList.toggle("dark")
    document.getElementById("logo").classList.toggle("dark")
    document.getElementById("section-title").classList.toggle("dark")
    document.getElementById("instruction").classList.toggle("dark")
    document.getElementById("section-subtitle").classList.toggle("dark")
    document.getElementById("container-passwords").classList.toggle("dark")
    document.getElementById("pop-up-text-one").classList.toggle("dark")
    document.getElementById("pop-up-text-two").classList.toggle("dark")
}

export default toggler
