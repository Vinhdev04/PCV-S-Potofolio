
        /**
         * ===== TAB SWITCHING FUNCTIONALITY =====
         * Mengelola tab switching antara Contact Form dan Contact Methods
         */

        // ===== GET TAB BUTTONS =====
        const contactTabs = document.querySelectorAll('.contact__tab');
        const formContent = document.getElementById('form-content');
        const methodsContent = document.getElementById('methods-content');

        // ===== ADD CLICK EVENT =====
        contactTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const tabName = this.getAttribute('data-tab');

                // ===== REMOVE ACTIVE CLASS =====
                contactTabs.forEach(btn => {
                    btn.classList.remove('contact__tab--active');
                });

                // ===== ADD ACTIVE CLASS =====
                this.classList.add('contact__tab--active');

                // ===== HIDE ALL CONTENT =====
                formContent.style.display = 'none';
                methodsContent.style.display = 'none';

                // ===== SHOW SELECTED CONTENT =====
                if (tabName === 'form') {
                    formContent.style.display = 'block';
                } else if (tabName === 'methods') {
                    methodsContent.style.display = 'block';
                    methodsContent.style.padding = '3rem';
                }
            });
        });

        /**
         * ===== FORM SUBMISSION =====
         */
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validate
            if (!data.name || !data.email || !data.subject || !data.message) {
                alert('Please fill in all fields');
                return;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email');
                return;
            }

            // Show success
            alert('Message sent successfully! Thank you for reaching out.');

            // Reset form
            contactForm.reset();

            console.log('Form Data:', data);

            // In production, send to backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
        });

        /**
         * ===== FORM FOCUS EFFECTS =====
         */
        const inputs = document.querySelectorAll('.form-input, .form-textarea');

        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.style.backgroundColor = '#fafbff';
            });

            input.addEventListener('blur', function () {
                this.style.backgroundColor = 'var(--white-bg)';
            });
        });
