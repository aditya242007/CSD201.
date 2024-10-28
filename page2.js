var nextBtn2 = document.querySelector('.next2'),
    prevBtn2 = document.querySelector('.prev2'),
    carousel2 = document.querySelector('.carousel2'),
    list2 = document.querySelector('.list2'),
    item2 = document.querySelectorAll('.item2'),
    runningTime2 = document.querySelector('.carousel2 .timeRunning2');

let timeRunning2 = 3000;
let timeAutoNext2 = 7000;

nextBtn2.onclick = function() {
    showSlider2('next');
}

prevBtn2.onclick = function() {
    showSlider2('prev');
}

let runTimeOut2;

let runNextAuto2 = setTimeout(() => {
    nextBtn2.click();
}, timeAutoNext2);

function resetTimeAnimation2() {
    runningTime2.style.animation = 'none';
    runningTime2.offsetHeight; 
    runningTime2.style.animation = null;
    runningTime2.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider2(type) {
    let sliderItemsDom2 = list2.querySelectorAll('.item2');
    if (type === 'next') {
        list2.appendChild(sliderItemsDom2[0]);
        carousel2.classList.add('next');
    } else {
        list2.prepend(sliderItemsDom2[sliderItemsDom2.length - 1]);
        carousel2.classList.add('prev');
    }

    clearTimeout(runTimeOut2);

    runTimeOut2 = setTimeout(() => {
        carousel2.classList.remove('next');
        carousel2.classList.remove('prev');
    }, timeRunning2);

    clearTimeout(runNextAuto2);
    runNextAuto2 = setTimeout(() => {
        nextBtn2.click();
    }, timeAutoNext2);

    resetTimeAnimation2(); 
}


resetTimeAnimation2();
