document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const desktopToggle = document.querySelector('.sidebar-toggle');
    const lockCloseButton = document.querySelector('.sidebar-lock-close');
    const isMobile = () => window.innerWidth <= 800;

    function closeSidebar() {
        sidebar.classList.remove('active', 'locked');
        if (!isMobile()) {
            desktopToggle.style.display = 'block';
        }
    }

    function toggleMobileSidebar() {
        if (isMobile()) {
            sidebar.classList.toggle('active');
        }
    }

    function lockSidebar(event) {
        if (!isMobile()) {
            event.stopPropagation();
            sidebar.classList.add('locked');
            desktopToggle.style.display = 'none';
        }
    }

    function unlockSidebar(event) {
        if (!isMobile()) {
            event.stopPropagation();
            closeSidebar();
        }
    }

    // Mobile toggle
    mobileToggle?.addEventListener('click', toggleMobileSidebar);

    // Desktop toggle
    desktopToggle?.addEventListener('click', lockSidebar);
    lockCloseButton?.addEventListener('click', unlockSidebar);

    // Close sidebar when clicking a link (mobile only)
    sidebar?.addEventListener('click', (e) => {
        if (isMobile() && e.target.tagName === 'A') {
            closeSidebar();
        }
    });

    // Close mobile sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (
            isMobile() &&
            sidebar?.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !mobileToggle.contains(e.target)
        ) {
            closeSidebar();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (isMobile()) {
            sidebar.classList.remove('locked');
            desktopToggle.style.display = 'none';
        } else {
            if (!sidebar.classList.contains('locked')) {
                desktopToggle.style.display = 'block';
            }
        }
    });
});
