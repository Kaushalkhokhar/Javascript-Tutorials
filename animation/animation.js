function animation1() {
    let slideIndex = 0;
    showSlides();
    let cont = document.querySelector('.container');
    
    // TO add and remove class of an element using js
    cont.classList.add('container1');
    cont.classList.remove('container');

    // Function for animation and slideshow.
    function showSlides() {
        console.log('running....')
        let i;
        let slides = document.querySelectorAll('.moving');
        console.log(slides.length)        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        // Repeats function showSlides after 3s.
        setTimeout(showSlides, 3000);
    }
}
animation1();

function animation2() {
    let i = 0, j = 2, ele, cont, eleWidth;
    ele = document.querySelectorAll('.moving');
    cont = document.querySelector('.container');
    eleWidth = ele[1].getBoundingClientRect().x -
        ele[0].getBoundingClientRect().x    

    // To set a timer to repeat a give function execution
    let timer;
    timer = setInterval(slideShow, 3000);
    
    // To add a class name to html element
    for (i = 0; i < ele.length; i++) {
        ele[i].classList.add('.animation');
    }
    
    // Function which runs a slideshow
    function slideShow() {
        if (j == 2) {            
            ele[0].style.transform = `translateX(${2 * eleWidth}px)`;
            ele[1].style.transform = `translateX(${-eleWidth}px)`;
            ele[2].style.transform = `translateX(${-eleWidth}px)`;

            j -= 1;
        } else if (j == 1) {
            ele[0].style.transform = `translateX(${eleWidth}px)`;
            ele[1].style.transform = `translateX(${eleWidth}px)`;
            ele[2].style.transform = `translateX(${-2*eleWidth}px)`;
            j -= 1;
        } else if (j == 0) {
            ele[0].style.transform = `translateX(${eleWidth-eleWidth}px)`;
            ele[1].style.transform = `translateX(${eleWidth-eleWidth}px)`;
            ele[2].style.transform = `translateX(${eleWidth-eleWidth}px)`;
            j = 2;
        }          
    }
}
// animation2();
