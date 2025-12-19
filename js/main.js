// Main JavaScript for Cybersecurity Company Website

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isLightMode = savedTheme === 'light';
    
    // Apply theme on page load
    const body = document.body;
    if (isLightMode) {
        html.classList.add('light-mode');
        html.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        if (themeToggle) {
            updateThemeIcon(themeToggle, true);
        }
    } else {
        html.classList.add('dark-mode');
        html.classList.remove('light-mode');
        body.classList.add('dark-mode');
        if (themeToggle) {
            updateThemeIcon(themeToggle, false);
        }
    }
    
    // Toggle theme on button click
    const toggleTheme = function() {
        const body = document.body;
        const isCurrentlyLight = html.classList.contains('light-mode');
        
        if (isCurrentlyLight) {
            // Switch to dark mode
            html.classList.remove('light-mode');
            html.classList.add('dark-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon(themeToggle, false);
            const mobileToggle = document.getElementById('theme-toggle-mobile');
            if (mobileToggle) updateThemeIcon(mobileToggle, false);
        } else {
            // Switch to light mode
            html.classList.remove('dark-mode');
            html.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            updateThemeIcon(themeToggle, true);
            const mobileToggle = document.getElementById('theme-toggle-mobile');
            if (mobileToggle) updateThemeIcon(mobileToggle, true);
        }
    };
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile theme toggle
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    if (mobileThemeToggle) {
        // Sync mobile icon on load
        const isLightMode = html.classList.contains('light-mode');
        updateThemeIcon(mobileThemeToggle, isLightMode);
        
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
}

// Update theme toggle icon
function updateThemeIcon(button, isLightMode) {
    if (isLightMode) {
        // Show moon icon (switch to dark)
        button.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
        `;
        button.setAttribute('aria-label', 'Switch to dark mode');
    } else {
        // Show sun icon (switch to light)
        button.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        `;
        button.setAttribute('aria-label', 'Switch to light mode');
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    initThemeToggle();
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && 
            mobileMenuBtn && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
    
    // Animate on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    document.querySelectorAll('.card, .feature-card, .glass-card').forEach(el => {
        observer.observe(el);
    });
});

// Utility function for API calls (if needed)
async function apiCall(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { apiCall };
}



