const titleElement = document.querySelector("#title")
titleElement.textContent = "Democrápsulas"

const lanterns = [
    { title: "First day of school", votes: 12, theme: "medieval", isPrivate: false },
    { title: "My dog", votes: -3, theme: "space", isPrivate: true },
    { title: "2019 concert", votes: 30, theme: "cyberpunk", isPrivate: true },
    { title: "Beach trip", votes: 5, theme: "seasons", isPrivate: false },
    { title: "Grandma's cake", votes: 22, theme: "asian", isPrivate: false },
    { title: "Lost my phone", votes: -8, theme: "cyberpunk", isPrivate: false },
    { title: "Graduation day", votes: 41, theme: "medieval", isPrivate: true },
];

function countLanterns(list) {
    const cntLanterns = document.querySelector("#counter")
    cntLanterns.textContent = `${list.length} lanterns`;
}
countLanterns(lanterns)

const btn = document.querySelector("#btn")

document.body.classList.toggle("dark")

btn.classList.add("highlight")
