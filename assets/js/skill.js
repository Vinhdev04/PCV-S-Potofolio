
        /**
         * ===== SKILLS TAB FUNCTIONALITY =====
         * Mengelola tab switching antara Technical, Soft Skills, dan Tools
         */

        // ===== GET ALL TAB BUTTONS =====
        const tabButtons = document.querySelectorAll('.skills__tab');

        // ===== ADD CLICK EVENT TO EACH TAB =====
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                const tabName = this.getAttribute('data-tab');

                // ===== REMOVE ACTIVE CLASS FROM ALL TABS =====
                tabButtons.forEach(btn => {
                    btn.classList.remove('skills__tab--active');
                });

                // ===== ADD ACTIVE CLASS TO CLICKED TAB =====
                this.classList.add('skills__tab--active');

                // ===== HIDE ALL CONTENT =====
                const allContent = document.querySelectorAll('.skills__content');
                allContent.forEach(content => {
                    content.style.display = 'none';
                });

                // ===== SHOW SELECTED CONTENT =====
                const selectedContent = document.getElementById(`${tabName}-content`);
                if (selectedContent) {
                    selectedContent.style.display = 'block';

                    // ===== TRIGGER ANIMATION =====
                    selectedContent.style.animation = 'none';
                    setTimeout(() => {
                        selectedContent.style.animation = 'fadeIn 0.5s ease-out';
                    }, 10);
                }
            });
        });

        /**
         * ===== PROGRESS BAR ANIMATION =====
         * Animate progress bars ketika halaman di-load
         */
        window.addEventListener('load', function () {
            const progressBars = document.querySelectorAll('.skill-item__progress');

            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';

                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        });

        /**
         * ===== INTERSECTION OBSERVER =====
         * Trigger animations ketika element masuk ke viewport
         */
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // ===== OBSERVE ELEMENTS =====
        document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
        document.querySelectorAll('.soft-skill-card').forEach(el => observer.observe(el));
        document.querySelectorAll('.tools-category').forEach(el => observer.observe(el));
