// =============================================
// SITE.JS — Zylo Consulting
// =============================================

// Navbar scroll effect
function siteInit() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.pageYOffset > 60);
    });
    scrollRevealInit();
}

// Scroll reveal
function scrollRevealInit() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => observer.observe(el));
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('mobileToggle');
    if (!menu) return;
    menu.classList.toggle('open');
    toggle && toggle.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('mobileToggle');
    if (!menu) return;
    menu.classList.remove('open');
    toggle && toggle.classList.remove('active');
    document.body.style.overflow = '';
}

