const menuBtn = document.getElementById("menu");
menuBtn.addEventListener('click', showMenu);
const close = document.getElementById("close");

function showMenu() {
    menuBtn.style.display = 'none';

    const listItems = ['Home', 'About', 'Residential', 'Commercial','Contact','Contact : 021 101 62 93'];
    const newList = document.createElement('ul');

    listItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container = document.querySelector('#opt-menu');
    container.appendChild(newList);

    close.style.display = 'block'; // Set display property to block
    container.style.display = 'block';
    
}
function removeList(){
    const container = document.querySelector('#opt-menu');
    container.innerHTML = '';
    container.style.display = 'none';
    menuBtn.style.display = 'block';
    close.style.display = 'none'; 
}



// Navigation Bar-Logo

// Get a reference to the logo element
const logo = document.querySelector('.nav_logo');

// Add a click event listener to the logo
logo.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    location.reload(); // Refresh the page
});




// Carousel-Script

let slider = document.querySelector('.carousel-slider .carousel-list');
let items = document.querySelectorAll('.carousel-slider .carousel-list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.carousel-slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.carousel-slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};