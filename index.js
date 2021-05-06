var myTimer, flag = true;

function setTimer() {
    myTimer = setInterval(startTimer, 1000);
    document.querySelectorAll('button')[0].innerHTML = 'Click Me To Stop Timer'
    document.querySelectorAll('button')[0].onclick = clearTimer;
}

myTimer = setInterval(startTimer, 1000);
function startTimer() {
    let date = new Date();
    let dateHMS = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let i;
    for (i = 0; i <= 2; i++) {
        dateHMS[i] = dateHMS[i].toLocaleString('an-us', {
        minimumIntegerDigits: 2,
        })       
    }
    let p_tag = document.querySelectorAll('p')[0];
    p_tag.innerHTML = dateHMS[0] + ':' + dateHMS[1] + ':' + dateHMS[2];
};
    
function clearTimer() {
    clearInterval(myTimer);
    document.querySelectorAll('button')[0].innerHTML = 'Click Me To Start Timer'
    document.querySelectorAll('button')[0].onclick = setTimer;
}

