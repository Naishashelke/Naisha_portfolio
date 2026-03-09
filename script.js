// script.js

// 1️⃣ Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2️⃣ Custom black-pink cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// 3️⃣ Reveal elements on scroll
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

// 4️⃣ Floating animation for images (like certificates, projects)
const floatImages = document.querySelectorAll('.float-img');
floatImages.forEach(img => {
    img.style.transition = 'transform 0.3s ease';
    img.addEventListener('mouseover', () => {
        img.style.transform = 'translateY(-10px) scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'translateY(0) scale(1)';
    });
});

// 5️⃣ Optional: Pink hearts animation on click for fun
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.pageX - 10 + 'px';
    heart.style.top = e.pageY - 10 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 800);
});
