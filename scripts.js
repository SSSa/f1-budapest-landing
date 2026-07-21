// ===== Tab Switching =====
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Initialize directions widget placeholder
    initDirectionsWidget();
});

// ===== Directions Widget =====
function initDirectionsWidget() {
    const directionsMap = document.getElementById('directions-map');
    if (!directionsMap) return;

    // Create a simple directions form as a placeholder
    const formHTML = `
        <div style="width: 100%; padding: 1rem;">
            <input type="text" id="origin" placeholder="Enter your starting location"
                   style="width: 100%; padding: 0.8rem; margin-bottom: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
            <button id="getDirections" style="width: 100%; padding: 0.8rem; background: #dc0000; color: white;
                    border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">Get Directions</button>
            <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
                Popular starting points:<br>
                • Budapest Ferenc Liszt Airport<br>
                • Budapest Keleti Station<br>
                • Budapest City Center
            </p>
        </div>
    `;

    directionsMap.innerHTML = formHTML;

    // Handle directions button click
    document.getElementById('getDirections').addEventListener('click', function() {
        const origin = document.getElementById('origin').value || 'Budapest, Hungary';
        const destination = 'Hungaroring, Mogyoród, Hungary';

        // Open Google Maps directions in new tab
        const mapsURL = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
        window.open(mapsURL, '_blank');
    });

    // Allow Enter key to trigger directions
    document.getElementById('origin').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('getDirections').click();
        }
    });
}

// ===== Smooth Scroll Enhancement =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Scroll to Active Section =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition) {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// ===== Animate Elements on Scroll =====
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.session, .option').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

if ('IntersectionObserver' in window) {
    observeElements();
}

// ===== Analytics Tracking (Optional) =====
function trackEvent(eventName, eventData) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log('Event:', eventName, eventData);
}

// Track tab clicks
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('tab_click', { tab: this.getAttribute('data-tab') });
    });
});

// Track CTA button clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('cta_click', { link: this.href });
    });
});