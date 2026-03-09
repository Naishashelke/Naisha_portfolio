// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});

// Floating images hover
const floatImages = document.querySelectorAll('.float-img');
floatImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'translateY(-10px) scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'translateY(0) scale(1)';
    });
});

// Mouse trails
document.addEventListener('mousemove', e => {
    const dot = document.createElement('div');
    dot.className = 'floating-dot';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1000);
});

// Hearts on click
document.addEventListener('click', e => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.pageX - 10 + 'px';
    heart.style.top = e.pageY - 10 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
});
