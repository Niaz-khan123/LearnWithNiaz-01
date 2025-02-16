document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navbar = document.querySelector('nav'); // Assuming the navbar is the <nav> element

    let lastScrollTop = 0;

    // Smooth scrolling for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(targetSection);
            }

            // Close mobile menu after clicking a link
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Intersection Observer for section activation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target);
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Function to set active section
    function setActiveSection(section) {
        sections.forEach(s => s.classList.remove('active'));
        section.classList.add('active');
    }
    function toggleMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const currentColor = menuToggle.style.color;
    
        if (currentColor === 'pink') {
            menuToggle.style.color = 'green';
        } else {
            menuToggle.style.color = 'pink';
        }
    }
    




    // JavaScript to handle the "More" button click
    document.getElementById('toggleButton').addEventListener('click', function() {
        var moreInfo = document.getElementById('moreInfo');
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            this.textContent = 'Show Less';
        } else {
            moreInfo.classList.add('hidden');
            this.textContent = 'Show More';
        }
    });

    // Handle the "More" button click and open the link in a new tab
    document.getElementById('moreBtn').addEventListener('click', function() {
        window.open('https://wa.link/scmea6', '_blank');
    });

    // Form validation
    function validateForm() {
        const feedback = document.getElementById("form-feedback");
        feedback.textContent = '';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            feedback.textContent = "All fields are required.";
            feedback.className = "error";
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.className = "error";
            return false;
        }

        setTimeout(() => {
            feedback.textContent = "Thank you for contacting us! Your message has been sent.";
            feedback.className = "success";
            document.getElementById('contactForm').reset();
        }, 1000);

        return false; // Prevent form submission for demonstration
    }
});
