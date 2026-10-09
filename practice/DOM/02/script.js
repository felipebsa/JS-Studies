const themebtn = document.querySelector("#theme-btn")
themebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        themebtn.textContent = "Light Mode"
    } else {
        themebtn.textContent = "Dark Mode"
    }
})

const btn = document.querySelector("#add-btn")
const input = document.querySelector("#title-input")
btn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        return
    }
    console.log(input.value.trim())
    input.value = ""
    
})
