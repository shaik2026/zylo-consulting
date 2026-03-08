// =============================================
// SITE.JS — Zylo Consulting
// =============================================

// All functions are on window so Blazor can call them safely
window.siteInit = function () { /* no-op - init runs automatically */ };
window.scrollRevealInit = _doScrollReveal;
window.toggleMobileMenu = _doToggle;
window.closeMobileMenu = _doClose;

// Self-initializing — no Blazor interop needed on startup
document.addEventListener('DOMContentLoaded', _init);
// Also run on Blazor navigation (in case DOM was updated)
document.addEventListener('blazor:navigated', _doScrollReveal);

function _init() {
    // Navbar scroll
    try {
        const nav = document.getElementById('navbar');
        if (nav) {
            window.addEventListener('scroll', function () {
                nav.classList.toggle('scrolled', window.pageYOffset > 60);
            });
        }
    } catch (e) {}
    _doScrollReveal();
}

function _doScrollReveal() {
    try {
        document.querySelectorAll('.reveal').forEach(function (el) {
            if (!el._revealObserved) {
                el._revealObserved = true;
                var obs = new IntersectionObserver(function (entries) {
                    entries.forEach(function (e) {
                        if (e.isIntersecting) {
                            e.target.classList.add('visible');
                            obs.unobserve(e.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
                obs.observe(el);
            }
        });
    } catch (e) {}
}

function _doToggle() {
    try {
        var menu = document.getElementById('mobileMenu');
        var toggle = document.getElementById('mobileToggle');
        if (!menu) return;
        menu.classList.toggle('open');
        if (toggle) toggle.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    } catch (e) {}
}

function _doClose() {
    try {
        var menu = document.getElementById('mobileMenu');
        var toggle = document.getElementById('mobileToggle');
        if (!menu) return;
        menu.classList.remove('open');
        if (toggle) toggle.classList.remove('active');
        document.body.style.overflow = '';
    } catch (e) {}
}
