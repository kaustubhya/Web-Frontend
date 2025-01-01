const clock = document.querySelector(".clock");

const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = +(date.getTime());

setInterval(() => {
    time += 1000;
    hours = new Date(time).getHours();
    minutes = new Date(time).getMinutes();
    seconds = new Date(time).getSeconds();
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
