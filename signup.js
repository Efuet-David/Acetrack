
 
        // Toggle Password Visibility
        function setupPasswordToggle(toggleId, inputId, iconId) {
            const toggle = document.getElementById(toggleId);
            const input = document.getElementById(inputId);
            const icon = document.getElementById(iconId);

            toggle.addEventListener('click', () => {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                
                if (type === 'text') {
                    icon.innerHTML = `
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    `;
                } else {
                    icon.innerHTML = `
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    `;
                }
            });
        }

        setupPasswordToggle('togglePassword', 'password', 'eyeIcon');
        setupPasswordToggle('toggleConfirmPassword', 'confirmPassword', 'eyeIcon2');

        // Password Strength Checker
        const passwordInput = document.getElementById('password');
        const passwordStrength = document.getElementById('passwordStrength');
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');

        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;
            
            if (password.length === 0) {
                passwordStrength.style.display = 'none';
                return;
            }

            passwordStrength.style.display = 'block';
            
            let strength = 0;
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^a-zA-Z0-9]/)) strength++;

            strengthFill.className = 'strength-fill';
            
            if (strength <= 2) {
                strengthFill.classList.add('strength-weak');
                strengthText.textContent = 'Weak password';
            } else if (strength === 3) {
                strengthFill.classList.add('strength-medium');
                strengthText.textContent = 'Medium password';
            } else {
                strengthFill.classList.add('strength-strong');
                strengthText.textContent = 'Strong password';
            }
        });

        // Form Submission
        const signupForm = document.getElementById('signupForm');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const submitBtn = document.getElementById('submitBtn');

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const country = document.getElementById('country').value;
            const studyLevel = document.getElementById('studyLevel').value;
            const terms = document.getElementById('terms').checked;

            // Validation
            if (!firstName || !lastName || !email || !password || !country || !studyLevel || !terms) {
                errorMessage.textContent = 'Please fill in all required fields.';
                errorMessage.classList.add('show');
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 3000);
                return;
            }

            if (password !== confirmPassword) {
                errorMessage.textContent = 'Passwords do not match.';
                errorMessage.classList.add('show');
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 3000);
                return;
            }

            if (password.length < 8) {
                errorMessage.textContent = 'Password must be at least 8 characters long.';
                errorMessage.classList.add('show');
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 3000);
                return;
            }

            // Simulate successful signup
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
            
            setTimeout(() => {
                successMessage.classList.add('show');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            }, 1000);
        });

        // Social Signup Functions
        function signupWithGoogle() {
            console.log('Sign up with Google');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
            setTimeout(() => {
                successMessage.classList.add('show');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            }, 500);
        }

        function signupWithMicrosoft() {
            console.log('Sign up with Microsoft');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
            setTimeout(() => {
                successMessage.classList.add('show');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            }, 500);
        }

        // Remove error message when user starts typing
        const inputs = signupForm.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                errorMessage.classList.remove('show');
            });
        });
    