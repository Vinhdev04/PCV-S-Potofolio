// ===== FIXED LOADING SCREEN LOGIC =====
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progressBar');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const mainContent = document.getElementById('mainContent');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Ẩn content ban đầu
    if (mainContent) mainContent.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    let progress = 0;
    const minLoadingTime = 1500; // Giảm xuống 1.5s để load nhanh hơn
    const startTime = Date.now();

    // Simulate loading với progress bar
    const loadingInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        
        // ✅ FIX: Tính progress dựa trên thời gian thực tế
        if (elapsedTime >= minLoadingTime) {
            progress = 100;
        } else {
            // Tăng progress tuyến tính theo thời gian
            progress = (elapsedTime / minLoadingTime) * 100;
        }

        // Cập nhật UI
        progressBar.style.width = progress + '%';
        loadingPercentage.textContent = Math.floor(progress) + '%';

        // ✅ Hoàn thành loading khi đạt 100%
        if (progress >= 100) {
            clearInterval(loadingInterval);
            completeLoading();
        }
    }, 50); // Update mỗi 50ms để mượt hơn

    function completeLoading() {
        // Set progress về 100%
        progressBar.style.width = '100%';
        loadingPercentage.textContent = '100%';

        // Fade out preloader sau 300ms
        setTimeout(() => {
            preloader.classList.add('fade-out');

            // Show main content và initialize AOS sau khi fade out
            setTimeout(() => {
                preloader.style.display = 'none';
                
                // Hiển thị nội dung
                if (mainContent) mainContent.style.display = 'block';
                if (header) header.style.display = 'block';
                if (footer) footer.style.display = 'block';

                // Re-initialize AOS animations
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }

                // Add loaded class to body
                document.body.classList.add('loaded');

                // Trigger custom event khi loading xong
                document.dispatchEvent(new Event('loadingComplete'));
            }, 500);
        }, 300);
    }
});

// ===== LOADING COMPLETE EVENT LISTENER =====
document.addEventListener('loadingComplete', function() {
    console.log('✅ Loading complete! Website is ready.');
});

// ===== PREVENT FLASH OF UNSTYLED CONTENT (FOUC) =====
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const preloader = document.getElementById('preloader');
    
    // Đảm bảo preloader hiển thị
    if (preloader) {
        preloader.style.display = 'flex';
        preloader.style.visibility = 'visible';
        preloader.style.opacity = '1';
    }
    
    // Đảm bảo content bị ẩn cho đến khi loading xong
    if (mainContent) mainContent.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
});