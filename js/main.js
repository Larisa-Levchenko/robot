'use strict';

const robot = document.querySelector('.robot');
const mainBtn = document.querySelector('.btn');
const reset = document.querySelector('.reset');

let defaultRun = true;
let newLeft = 0;
let animation = 0;
robot.style.left = 0;


const robotRun = () => {
    const runRight = () => {
        newLeft += 2;
        if (newLeft > screen.width - robot.width) {
            defaultRun = false;
            robot.style.transform = 'scale(-1, 1)';
        }
    };
    const runLeft = () => {
        newLeft -= 2;
        if (newLeft < 0) {
            defaultRun = true;
            robot.style.transform = '';
        }
    };

    if (defaultRun) {
        runRight();
    } else {
        runLeft();
    }
    robot.style.left = `${newLeft}px`;
    animation = window.requestAnimationFrame(robotRun);
};

mainBtn.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('start')) {
        robotRun();
        robot.src = 'img/robot.gif';
    }
    if (target.classList.contains('stop')) {
        cancelAnimationFrame(animation);
        robot.src = 'img/robot.jpg';
    }
    mainBtn.classList.toggle('start');
    mainBtn.classList.toggle('stop');

});

reset.addEventListener('click', () => {
    if (mainBtn.classList.contains('start')) {
        robot.src = 'img/robot.gif';
    }

    defaultRun = true;
    newLeft = 0;
    robot.style.transform = '';
    mainBtn.classList.remove('start');
    mainBtn.classList.add('stop');
    cancelAnimationFrame(animation);
    robotRun();
});

robotRun();