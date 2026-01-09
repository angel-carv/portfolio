// Smooth scroll for navigation links (backup for browsers without CSS scroll-behavior)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Highlight active navigation link based on scroll position
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
}

// Add scroll event listener for active nav highlighting
window.addEventListener('scroll', highlightActiveNav);

// Add hover effect to project cards with tilt
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Add animation to skill items on hover
document.querySelectorAll('.skill-category li').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });

    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add copy email functionality
document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.querySelector('.contact-links li:first-child');
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email';

        emailElement.addEventListener('click', () => {
            const email = 'angelcarvajal323@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailElement.innerHTML;
                emailElement.innerHTML = '<strong>Email:</strong> Copied to clipboard!';
                emailElement.style.color = '#27ae60';

                setTimeout(() => {
                    emailElement.innerHTML = originalText;
                    emailElement.style.color = '';
                }, 2000);
            });
        });
    }
});

// Log initialization
console.log('Portfolio initialized successfully!');
console.log('Angel Carvajal - Cybersecurity Portfolio');
