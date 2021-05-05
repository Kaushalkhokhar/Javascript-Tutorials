// document.getElementsByClassName('flex').onload = function() {
//     setTimer();
//     console.log('yes');
// };

function setTimer() {
   let myTimer = setInterval(startTimer, 1000);
   console.log('ok');   
};

// let myTimer = setInterval(startTimer, 1000);
function startTimer() {    
    let date = new Date();
    let p_tag = document.querySelectorAll('p')[0];
    p_tag.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();           
};
    
function clearTimer() {
    clearInterval(myTimer);
    document.querySelectorAll('button')[0].innerHTML = 'Click Me To Start Timer'
    document.querySelectorAll('button')[0].onclick = setTimer();
    // myTimer = setInterval(startTimer, 1000);
}

// window.onload = setTimer();