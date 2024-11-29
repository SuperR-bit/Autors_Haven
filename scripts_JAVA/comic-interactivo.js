

let on_off = document.querySelector('.container .title');
let audio = document.querySelector('.musicon audio');

on_off.onclick = function() {
    audio.paused();
    audio.currentTime = 0;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));