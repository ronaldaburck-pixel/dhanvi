// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Scroll to top on page load/refresh - clean and smooth implementation
(function() {
    let scrolled = false;
    
    // Immediate scroll to top (synchronous)
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Prevent any scroll during page load
    const preventScroll = (e) => {
        if (!scrolled) {
            window.scrollTo(0, 0);
        }
    };
    
    // On DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.scrollTo(0, 0);
            scrolled = true;
        });
    } else {
        window.scrollTo(0, 0);
        scrolled = true;
    }
    
    // Final scroll after page fully loads
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        scrolled = true;
    }, { once: true });
})();

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
let lastScroll = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 1)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Enhanced animation observer with stagger effect
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Service cards with stagger
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in');
        staggerObserver.observe(card);
    });
    
    // Why items with stagger
    const whyItems = document.querySelectorAll('.why-item');
    whyItems.forEach((item, index) => {
        item.classList.add('fade-in');
        staggerObserver.observe(item);
    });
    
    // Testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.classList.add('fade-in');
        fadeInObserver.observe(card);
    });
    
    // Gallery items with stagger
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.classList.add('scale-in');
        staggerObserver.observe(item);
    });
    
    // About content - left and right
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    if (aboutText) {
        aboutText.classList.add('fade-in-left');
        fadeInObserver.observe(aboutText);
    }
    if (aboutImage) {
        aboutImage.classList.add('fade-in-right');
        fadeInObserver.observe(aboutImage);
    }
    
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('slide-up');
        fadeInObserver.observe(header);
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');
    if (contactForm) {
        contactForm.classList.add('fade-in-right');
        fadeInObserver.observe(contactForm);
    }
    if (contactInfo) {
        contactInfo.classList.add('fade-in-left');
        fadeInObserver.observe(contactInfo);
    }
    
    // Video section
    const videoWrapper = document.querySelector('.video-wrapper');
    if (videoWrapper) {
        videoWrapper.classList.add('fade-in');
        fadeInObserver.observe(videoWrapper);
    }
    
    // YouTube video error detection
    const youtubeIframe = document.getElementById('youtube-player');
    if (youtubeIframe) {
        youtubeIframe.addEventListener('load', function() {
            // Check if video loaded successfully
            setTimeout(() => {
                try {
                    // Try to access iframe content (will fail if video didn't load)
                    const iframeDoc = youtubeIframe.contentDocument || youtubeIframe.contentWindow.document;
                } catch (e) {
                    // If we can't access, check for error
                    const fallback = document.querySelector('.video-fallback');
                    if (fallback && youtubeIframe.src.includes('rv001lgzLGw')) {
                        // Video might have embedding disabled
                        console.log('Video may not allow embedding');
                    }
                }
            }, 2000);
        });
        
        youtubeIframe.addEventListener('error', function() {
            const fallback = document.querySelector('.video-fallback');
            if (fallback) {
                fallback.style.display = 'block';
            }
        });
    }
});

// Sticky Quote Button - Show/Hide on scroll
const stickyQuoteBtn = document.getElementById('stickyQuoteBtn');

if (stickyQuoteBtn) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const contactSection = document.getElementById('contact');
        
        if (contactSection) {
            const contactTop = contactSection.offsetTop;
            const contactHeight = contactSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Hide button when near or in contact section
            if (scrollY + windowHeight >= contactTop - 100) {
                stickyQuoteBtn.style.opacity = '0';
                stickyQuoteBtn.style.pointerEvents = 'none';
            } else {
                stickyQuoteBtn.style.opacity = '1';
                stickyQuoteBtn.style.pointerEvents = 'auto';
            }
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            projectDetails: document.getElementById('project-details').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your inquiry! We will get back to you soon to discuss your tunneling project.');
        
        // Reset form
        contactForm.reset();
    });
}

// Gallery lightbox functionality (optional enhancement)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // This could be enhanced with a lightbox library
        console.log('Gallery item clicked');
    });
});

// Smooth reveal animations for sections (simplified)
// Wait for page to be fully loaded before initializing animations
window.addEventListener('load', () => {
    setTimeout(() => {
        const revealSections = document.querySelectorAll('section:not(.hero)');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        revealSections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
    }, 200);
});
