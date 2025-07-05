// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.image-container');
    
    gsap.from(heroTitle.querySelectorAll('.title-word span'), {
        duration: 1,
        y: '100%',
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5
    });
    
    gsap.from(heroSubtitle, {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.2
    });
    
    gsap.from(heroButtons, {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.5
    });
    
    gsap.from(heroImage, {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
        delay: 1
    });
    
    // Floating Image Effect
    gsap.to(heroImage, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Section Animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionHeading = section.querySelector('.section-title');
        const sectionDivider = section.querySelector('.section-divider');
        const sectionContent = section.querySelectorAll('h3, p, .about-image, .project-card, .contact-info, .contact-form');
        
        if (sectionHeading) {
            gsap.from(sectionHeading, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        }
        
        if (sectionDivider) {
            gsap.from(sectionDivider, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                scaleX: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.3
            });
        }
        
        if (sectionContent) {
            gsap.from(sectionContent, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });
        }
    });
    
    // Project Card Hover Animations
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Navigation Logo Animation
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('mouseenter', () => {
        gsap.to('.logo::after', {
            width: '100%',
            duration: 0.5,
            ease: 'power3.out'
        });
    });
    
    logo.addEventListener('mouseleave', () => {
        gsap.to('.logo::after', {
            width: 0,
            duration: 0.5,
            ease: 'power3.out'
        });
    });
});