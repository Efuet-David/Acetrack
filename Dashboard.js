
    
        // Hamburger Menu
        document.querySelector('.hamburger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const nav = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            if (!nav.contains(e.target) && !hamburger.contains(e.target) && !e.target.closest('.nav-container')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
        