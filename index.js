// document.getElementsByClassName('flex').onload = function() {
//     setTimer();
//     console.log('yes');
// };


// let myTimer = setInterval(startTimer, 1000);
var myTimer, flag = true;

// window.onload = function setTimer() {
//     if (localStorage.getItem("hasCodeRunBefore") === null) {
//         var myTimer = setInterval(startTimer, 1000);
//         console.log('ok'); 
//         localStorage.setItem("hasCodeRunBefore", true);
//     }
// }

// if(flag = true) {
//     setTimer();
//     flag = false;
//     console.log('if run')
// }

function setTimer() {
    myTimer = setInterval(startTimer, 1000);
    flag = false;
    console.log('settimer run');
    document.querySelectorAll('button')[1].style.display = "none";
    document.querySelectorAll('button')[0].style.display = "block";             
} 


myTimer = setInterval(startTimer, 1000);
function startTimer() {
    console.log('startTimer run')    
    let date = new Date();
    let p_tag = document.querySelectorAll('p')[0];
    p_tag.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();           
};
    
function clearTimer() {
    console.log('cleartimer run')
    clearInterval(myTimer);
    flag = false;
    // document.querySelectorAll('button')[0].innerHTML = 'Click Me To Start Timer'
    // document.querySelectorAll('button')[0].onclick = setTimer;
    // myTimer = setInterval(startTimer, 1000);
    document.querySelectorAll('button')[1].style.display = "block";
    document.querySelectorAll('button')[0].style.display = "none";
}

// window.onload = setTimer();