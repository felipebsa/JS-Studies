// selecting and modifying elements
document.querySelector("#title").textContent = "I love You"
document.querySelector("#text").innerHTML = "<strong>content</strong>"

// event listener
let button = document.querySelector("#btn")
function buttonclick() {
    document.querySelector("#title").innerHTML = "I Hate You"
}
button.addEventListener("click", buttonclick)