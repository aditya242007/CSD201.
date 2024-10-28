var nextBtn3 = document.querySelector('.next3'),
    prevBtn3 = document.querySelector('.prev3'),
    carousel3 = document.querySelector('.carousel3'),
    list3 = document.querySelector('.list3'),
    item3 = document.querySelectorAll('.item3'),
    runningTime3 = document.querySelector('.carousel3 .timeRunning3');

let timeRunning3 = 3000;
let timeAutoNext3 = 7000;

nextBtn3.onclick = function() {
    showSlider3('next');
}

prevBtn3.onclick = function() {
    showSlider3('prev');
}

let runTimeOut3;

let runNextAuto3 = setTimeout(() => {
    nextBtn3.click();
}, timeAutoNext3);

function resetTimeAnimation3() {
    runningTime3.style.animation = 'none';
    runningTime3.offsetHeight; 
    runningTime3.style.animation = null;
    runningTime3.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider3(type) {
    let sliderItemsDom3 = list3.querySelectorAll('.item3');
    if (type === 'next') {
        list3.appendChild(sliderItemsDom3[0]);
        carousel3.classList.add('next');
    } else {
        list3.prepend(sliderItemsDom3[sliderItemsDom3.length - 1]);
        carousel3.classList.add('prev');
    }

    clearTimeout(runTimeOut3);

    runTimeOut3 = setTimeout(() => {
        carousel3.classList.remove('next');
        carousel3.classList.remove('prev');
    }, timeRunning3);

    clearTimeout(runNextAuto3);
    runNextAuto3 = setTimeout(() => {
        nextBtn3.click();
    }, timeAutoNext3);

    resetTimeAnimation2(); 
}


resetTimeAnimation2();
