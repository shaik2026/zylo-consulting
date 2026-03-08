// =============================================
// SITE.JS — Zylo Consulting
// =============================================

window.siteInit = function () {
    try {
        const nav = document.getElementById('navbar');
        if (nav) {
            window.addEventListener('scroll', function () {
                nav.classList.toggle('scrolled', window.pageYOffset > 60);
            });
        }
        window.scrollRevealInit();
    } catch (e) {
        console.warn('siteInit error (non-fatal):', e);
    }
};

window.scrollRevealInit = function () {
    try {
        const reveals = document.querySelectorAll('.reveal');
        if (!reveals || !reveals.length) return;
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
        reveals.forEach(function (el) { observer.observe(el); });
    } catch (e) {
        console.warn('scrollRevealInit error (non-fatal):', e);
    }
};

window.toggleMobileMenu = function () {
    try {
        const menu = document.getElementById('mobileMenu');
        const toggle = document.getElementById('mobileToggle');
        if (!menu) return;
        menu.classList.toggle('open');
        if (toggle) toggle.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    } catch (e) {
        console.warn('toggleMobileMenu error (non-fatal):', e);
    }
};

window.closeMobileMenu = function () {
    try {
        const menu = document.getElementById('mobileMenu');
        const toggle = document.getElementById('mobileToggle');
        if (!menu) return;
        menu.classList.remove('open');
        if (toggle) toggle.classList.remove('active');
        document.body.style.overflow = '';
    } catch (e) {
        console.warn('closeMobileMenu error (non-fatal):', e);
    }
};

