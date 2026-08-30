// Ayman Salama Helbawy Portfolio - Vanilla JavaScript

// Project Modal Data
const projectData = {
    codepilot: {
        title: 'CodePilot',
        subtitle: 'Multi-Tenant Project Management API',
        status: 'Active',
        date: 'Jun 2026 - Present',
        github: 'https://github.com/aymansalama48/CodePilot',
        description: 'A comprehensive project management API designed for multi-tenant environments. Built with enterprise-grade security and scalability in mind, featuring advanced authorization patterns and automated audit capabilities.',
        features: [
            'Designed feature modules using Vertical Slice Architecture with independent Commands, Queries, and Handlers',
            'Enforced multi-tenant isolation, permission-based authorization, and consistent API error handling through custom pipeline behaviors',
            'Implemented JWT authentication, OAuth integration, and a Result/Error pattern for robust API responses',
            'Automated audit trails, soft deletes, and a 9-template transactional email system via EF Core interceptors'
        ],
        tech: ['ASP.NET Core', 'Clean Architecture', 'CQRS', 'MediatR', 'EF Core', 'SQL Server', 'JWT Authentication', 'RBAC']
    },
    commerceos: {
        title: 'CommerceOs',
        subtitle: 'Multi-Tenant E-Commerce Platform',
        status: 'Completed',
        date: 'Jan 2026 - May 2026',
        github: 'https://github.com/aymansalama48/CommerceOs',
        description: 'A full-featured e-commerce platform built with multi-tenant architecture. Features a sophisticated order lifecycle management system and a modern React storefront with dynamic pricing capabilities.',
        features: [
            'Eliminated cross-tenant data leaks across 35+ tables using EF Core Global Query Filters',
            'Engineered a 10-state order lifecycle with RBAC-gated transitions, supported by dual JWT sessions across 7 roles and silent token refresh',
            'Delivered a React storefront with dynamic pricing, coupon logic, and real-time shipping calculation',
            'Comprehensive logging and monitoring with Serilog for production observability'
        ],
        tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'ASP.NET Core Identity', 'JWT', 'React 19', 'TypeScript', 'Serilog']
    }
};

// Modal functions in global scope for inline onclick handlers
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const data = projectData[projectId];
    
    if (!data) return;
    
    const statusClass = data.status === 'Active' ? 'active' : 'completed';
    
    modalBody.innerHTML = `
        <h2 class="modal-title" id="modalTitle">${data.title}</h2>
        <p class="modal-subtitle">${data.subtitle}</p>
        <div class="modal-meta">
            <span class="project-status ${statusClass}">${data.status}</span>
            <span class="project-date">${data.date}</span>
        </div>
        <p class="modal-description">${data.description}</p>
        <div class="modal-features">
            <h4>Key Features</h4>
            <ul>
                ${data.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-tech">
            <h4>Tech Stack</h4>
            <div class="project-tech">
                ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
        </div>
        <div class="modal-actions">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                <i class="fab fa-github"></i> View on GitHub
            </a>
            <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Expose to window object explicitly
window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener('DOMContentLoaded', function() {
    // Current Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
            }
        });
    }

    // Mobile Navigation
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Scroll to top button
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', function() {
        if (scrollTop) {
            if (window.scrollY > 500) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        }
    });
    
    if (scrollTop) {
        scrollTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Add revealed class styling via JS for elements in view on load
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('revealed');
            }
        });
    }, 100);

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});