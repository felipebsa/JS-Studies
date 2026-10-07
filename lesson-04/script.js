const area = document.querySelector("#area");

const IMAGEM = "lantern_jp.png";
const WIDTH = 160;
const HEIGHT = 270;
const SPACE = 30;
const MAX = 8;
const TIME_MIN = 8;
const TIME_MAX = 18;

const lanesfull = [];
let actives = 0;

function random_itens(min, max) {
    return min + Math.random() * (max - min);
}

function areawidth() {
    return area.clientWidth || window.innerWidth;
}

function areaheight() {
    return area.clientHeight || window.innerHeight;
}

function lanterncreate() {
    const board = WIDTH + SPACE;
    const lanestotal = Math.max(1, Math.floor(areawidth() / board));

    if (actives >= Math.min(MAX, lanestotal)) {
        return;
    }

    const free = [];
    for (let i = 0; i < lanestotal; i++) {
        if (!lanesfull[i]) {
            free.push(i);
        }
    }
    if (free.length === 0) {
        return;
    }

    const lane = free[Math.floor(Math.random() * free.length)];
    lanesfull[lane] = true;
    actives++;

    const leftover = areawidth() - lanestotal * board;
    const left = leftover / 2 + lane * board + random_itens(0, SPACE);

    const lantern = document.createElement("img");
    lantern.src = IMAGEM;
    lantern.alt = "";
    lantern.className = "lantern";
    lantern.style.width = WIDTH + "px";
    lantern.style.height = HEIGHT + "px";
    lantern.style.left = left + "px";
    lantern.style.bottom = -HEIGHT + "px";

    lantern.style.setProperty("--rising", -(areaheight() + HEIGHT) + "px");
    lantern.style.animationDuration = random_itens(TIME_MIN, TIME_MAX) + "s";

    lantern.addEventListener("animationend", function () {
        lantern.remove();
        lanesfull[lane] = false;
        actives--;
        setTimeout(lanterncreate, random_itens(200, 1200));
    });

    area.append(lantern);
}

for (let i = 0; i < MAX; i++) {
    setTimeout(lanterncreate, i * 800 + random_itens(0, 600));
}