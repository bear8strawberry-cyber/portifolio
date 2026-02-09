function goProjetos() {
    window.location.href = "/projetos";
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

const star = document.getElementById("star");
const constellation = document.getElementById("constellation");

if (star) {
    star.addEventListener("click", () => {
        star.style.display = "none";
        constellation.classList.remove("hidden");

        setTimeout(() => {
            window.location.href = "/projetos";
        }, 2000);
    });
}

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.3
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
