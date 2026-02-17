

        // Toggle Password Visibility
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        const eyeIcon = document.getElementById('eyeIcon');

        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            if (type === 'text') {
                eyeIcon.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                `;
            } else {
                eyeIcon.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                `;
            }
        });

        // Form Submission
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Demo validation - in production, this would be an API call
            if (email && password) {
                // Simulate successful login
                console.log('Login successful!');
                window.location.href = 'dashboard.html';
            } else {
                // Show error
                errorMessage.classList.add('show');
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 3000);
            }
        });

        // Social Login Functions
        function loginWithGoogle() {
            console.log('Login with Google');
            // Simulate successful login
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 500);
        }

        function loginWithMicrosoft() {
            console.log('Login with Microsoft');
            // Simulate successful login
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 500);
        }

        // Remove error message when user starts typing
        document.getElementById('email').addEventListener('input', () => {
            errorMessage.classList.remove('show');
        });

        document.getElementById('password').addEventListener('input', () => {
            errorMessage.classList.remove('show');
        });
    