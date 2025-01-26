document.addEventListener('DOMContentLoaded', () => {
    // Keep track of when elements got the referred class
    const referredTimestamps = new WeakMap();
    const MINIMUM_HIGHLIGHT_DURATION = 2000; // 2 seconds

    // Function to safely remove referred class after minimum duration
    const safelyRemoveReferred = (element) => {
        const timestamp = referredTimestamps.get(element);
        const now = Date.now();
        if (!timestamp) {
            referredTimestamps.set(element, now);
            return; // Don't remove on first observation
        }

        const timeElapsed = now - timestamp;
        if (timeElapsed >= MINIMUM_HIGHLIGHT_DURATION) {
            element.classList.remove('referred');
            referredTimestamps.delete(element);
        }
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (
                    !entry.isIntersecting &&
                    entry.target.classList.contains('referred')
                ) {
                    safelyRemoveReferred(entry.target);
                }
            });
        },
        {
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0,
        }
    );

    // Function to observe all headings
    const observeHeadings = () => {
        document
            .querySelectorAll('h1, h2, h3, h4, h5, h6')
            .forEach((heading) => {
                observer.observe(heading);
            });
    };

    // Initial observation
    observeHeadings();

    // Also handle scroll events as a backup
    let scrollTimeout;
    window.addEventListener(
        'scroll',
        () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const referredElements = document.querySelectorAll('.referred');
                referredElements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    if (rect.top < 0 || rect.bottom > windowHeight) {
                        safelyRemoveReferred(element);
                    }
                });
            }, 100);
        },
        { passive: true }
    );

    // Watch for DOM changes to observe new headings
    const observer2 = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class' &&
                mutation.target.classList.contains('referred')
            ) {
                observer.observe(mutation.target);
                // Reset timestamp when class is added
                referredTimestamps.set(mutation.target, Date.now());
            }
        });
    });

    // Observe the entire document for class changes
    observer2.observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ['class'],
    });
});
