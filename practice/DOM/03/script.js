const lanterns = [
    { title: "First day of school", votes: 12, theme: "medieval", isPrivate: false },
    { title: "My dog", votes: -3, theme: "space", isPrivate: true },
    { title: "2019 concert", votes: 30, theme: "cyberpunk", isPrivate: true },
    { title: "Beach trip", votes: 5, theme: "seasons", isPrivate: false },
    { title: "Grandma's cake", votes: 22, theme: "asian", isPrivate: false },
    { title: "Lost my phone", votes: -8, theme: "cyberpunk", isPrivate: false },
    { title: "Graduation day", votes: 41, theme: "medieval", isPrivate: true },
];
const btn = document.querySelector("#add-btn")
const input = document.querySelector("#title-input")
const themebtn = document.querySelector("#theme-btn")
const ul = document.querySelector("#table")
const cntLanterns = document.querySelector("#counter")

themebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        themebtn.textContent = "Light Mode"
    } else {
        themebtn.textContent = "Dark Mode"
    }
})


btn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        return
    }
    const newTitle = input.value.trim()
    const newLantern = {title: newTitle, votes: 0, theme: "asian", isPrivate: false}
    lanterns.push(newLantern)

    renderLantern(newLantern)
    countLanterns(lanterns)
    input.value = ""
})

function countLanterns(list) {
    cntLanterns.textContent = `${list.length} lanterns`;
}

function renderLantern(l) {
    const li = document.createElement("li")
    ul.append(li)
    li.textContent = `${l.title} - ${l.votes} votes`

}

lanterns.forEach((l) => renderLantern(l))
countLanterns(lanterns)
