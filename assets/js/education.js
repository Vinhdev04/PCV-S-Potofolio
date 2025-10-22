
        /**
         * ===== TAB SWITCHING =====
         */
        const educationTabs = document.querySelectorAll('.education__tab');
        const formalContent = document.getElementById('formal-content');
        const certificationsContent = document.getElementById('certifications-content');

        educationTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const tabName = this.getAttribute('data-tab');

                // Remove active class
                educationTabs.forEach(t => t.classList.remove('education__tab--active'));

                // Add active class
                this.classList.add('education__tab--active');

                // Hide all content
                formalContent.style.display = 'none';
                certificationsContent.style.display = 'none';

                // Show selected content
                if (tabName === 'formal') {
                    formalContent.style.display = 'block';
                } else if (tabName === 'certifications') {
                    certificationsContent.style.display = 'block';
                }
            });
        });

        /**
         * ===== DARK MODE TOGGLE =====
         */
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        }

        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
