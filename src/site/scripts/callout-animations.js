// Handle smooth callout animations
document.addEventListener('DOMContentLoaded', () => {
    const collapsibleCallouts = document.querySelectorAll(
        '.callout.is-collapsible'
    );

    // Set initial states
    collapsibleCallouts.forEach((callout) => {
        const content = callout.querySelector('.callout-content');
        if (content) {
            if (callout.classList.contains('is-collapsed')) {
                content.style.maxHeight = '0px';
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    });

    // Watch for class changes on callouts
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class'
            ) {
                const callout = mutation.target;
                const content = callout.querySelector('.callout-content');
                if (content) {
                    if (callout.classList.contains('is-collapsed')) {
                        // Closing animation
                        content.style.display = 'block'; // Ensure content is visible for animation
                        const startHeight = content.scrollHeight;
                        content.style.maxHeight = startHeight + 'px';
                        content.offsetHeight; // Force reflow

                        // Start collapse animation
                        requestAnimationFrame(() => {
                            content.style.maxHeight = '0px';

                            // Wait for animation to complete before hiding
                            content.addEventListener(
                                'transitionend',
                                function handler(e) {
                                    if (e.propertyName === 'max-height') {
                                        content.style.display = 'none';
                                        content.removeEventListener(
                                            'transitionend',
                                            handler
                                        );
                                    }
                                }
                            );
                        });
                    } else {
                        // Opening animation
                        content.style.display = 'block';
                        content.style.maxHeight = '0px';
                        content.offsetHeight; // Force reflow

                        // Get target height
                        const targetHeight = content.scrollHeight;

                        // Start expand animation
                        requestAnimationFrame(() => {
                            content.style.maxHeight = targetHeight + 'px';
                        });
                    }
                }
            }
        });
    });

    // Observe each callout for class changes
    collapsibleCallouts.forEach((callout) => {
        observer.observe(callout, {
            attributes: true,
            attributeFilter: ['class'],
        });
    });

    // Handle dynamic content changes
    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            const callout = entry.target.closest('.callout.is-collapsible');
            if (callout && !callout.classList.contains('is-collapsed')) {
                entry.target.style.maxHeight = entry.target.scrollHeight + 'px';
            }
        });
    });

    // Observe all callout contents for size changes
    collapsibleCallouts.forEach((callout) => {
        const content = callout.querySelector('.callout-content');
        if (content) {
            resizeObserver.observe(content);
        }
    });
});
