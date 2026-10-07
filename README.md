# JS Studies

A personal repository to document my JavaScript learning journey, focused on DOM manipulation, animations and frontend integration with REST APIs.

---

## Goal

Learn enough JavaScript to manipulate the DOM, handle events, animate elements and make fetch requests to a backend API.

---

## Progress

| Lesson | Subject | Topics |
|--------|---------|--------|
| [lesson-01](lesson-01) | JavaScript fundamentals | `const` and `let`, data types, `typeof`, objects, functions, template literals, arrays, `push`, `for...of` |
| [lesson-02](lesson-02) | DOM manipulation | `querySelector`, `textContent`, `innerHTML`, `addEventListener` |
| [lesson-03](lesson-03) | Fetch API | `async`/`await`, consuming a REST API ([CVVJ](https://github.com/felipebsa/CVVJ)), rendering JSON to the DOM |
| [lesson-04](lesson-04) | Floating lanterns animation | `createElement`, `append`, `remove`, `setTimeout`, `Math.random`, CSS `@keyframes` with a custom property, `animationend` event |

### lesson-04: Floating lanterns

Lanterns rise from the bottom of the screen at random speeds. The screen is split into lanes so they never overlap, and each lantern is removed when its animation ends, freeing its lane for a new one.

---

## How to run

Each lesson is a standalone page. Open the lesson's `index.html` in the browser, or use the VS Code **Live Server** extension (configured on port `5502`).

- **lesson-01** prints everything to the console (F12 → Console).
- **lesson-03** needs the [CVVJ](https://github.com/felipebsa/CVVJ) API running at `http://localhost:8000`.

---

## Related Projects

| Project | Description |
|---------|-------------|
| [CVVJ](https://github.com/felipebsa/CVVJ) | REST API used in lesson-03 as the fetch target, built with FastAPI + SQLAlchemy |

---

## Stack

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)