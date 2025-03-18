const wraper = document.getElementById('wraper');

const config = [
    { config: 1, radius: 0 },
    { config: 1, radius: 1 },
    { config: 1, radius: 2 },
    { config: 2, radius: 2 },
    { config: 2, radius: 1 },
    { config: 3, radius: 1 }
]

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * config.length);
    wraper.dataset.config = config[randomIndex].config;
    wraper.dataset.radius = config[randomIndex].radius;
}, 3000)