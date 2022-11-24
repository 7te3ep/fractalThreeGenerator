//Canvas.js
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
addEventListener("resize", (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
export {c, ctx};
