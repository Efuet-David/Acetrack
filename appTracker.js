
        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Filter Tabs
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const filterText = tab.textContent.trim().split('\n')[0].trim();
                console.log('Filtering by:', filterText);
                
                // Here you would implement actual filtering logic
                // For now, we just toggle the active state
            });
        });

        // Card Actions
        document.querySelectorAll('.btn-primary').forEach(btn => {
            if (!btn.classList.contains('btn-disabled')) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const card = btn.closest('.application-card');
                    const scholarshipName = card.querySelector('h3').textContent;
                    console.log('Continue application for:', scholarshipName);
                });
            }
        });

        document.querySelectorAll('.btn-secondary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = btn.closest('.application-card');
                const scholarshipName = card.querySelector('h3').textContent;
                console.log('View scholarship details for:', scholarshipName);
            });
        });

        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });

        // Animate progress bars on load
        window.addEventListener('load', () => {
            document.querySelectorAll('.progress-bar').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        });
    