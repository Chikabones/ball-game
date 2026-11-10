const ball = document.getElementById("ball");
const score = document.getElementById("score");
let count = 0;

ball.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    ball.style.left = x + "px";
    ball.style.top = y + "px";

    count++;
    score.textContent = "Побегов: " + count;
});
