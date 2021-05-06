var myTimer, flag = true;

// fuction to set a timer again
function setTimer() {
    myTimer = setInterval(startTimer, 1000);
    document.querySelectorAll('.btn')[0].innerHTML = 'Click Me To Stop Timer'
    document.querySelectorAll('.btn')[0].onclick = clearTimer;
}

// function to display time
function startTimer() {
    let date = new Date();
    let dateHMS = [date.getHours(), date.getMinutes(), date.getSeconds(), 
        date.getDate(), date.getDay(), date.getFullYear()];
    // for loop to make single digit to double digits
    let i;
    for (i = 0; i <= 2; i++) {
        dateHMS[i] = dateHMS[i].toLocaleString('an-us', {
        minimumIntegerDigits: 2,
        })       
    }
    let p_tag_1, p_tag; 
    p_tag_1 = document.querySelectorAll('.jumbotron .lead')[0];
    p_tag_1.innerHTML = dateHMS[3] + '/' + dateHMS[4] + '/' + dateHMS[5]; 
    p_tag = document.querySelectorAll('.lead')[1];
    p_tag.innerHTML = dateHMS[0] + ':' + dateHMS[1] + ':' + dateHMS[2];
};
 
// function to clear timer
function clearTimer() {
    clearInterval(myTimer);
    document.querySelectorAll('.btn')[0].innerHTML = 'Click Me To Start Timer'
    document.querySelectorAll('.btn')[0].onclick = setTimer;
}

// sets time interval to run a specified function
myTimer = setInterval(startTimer, 1000);
