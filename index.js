
const layer = document.querySelector('.layer');

window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;
    
    
    layer.style.left = `${scrollPosition * 2}px`; 
});
