// List marker characters to detect
const LIST_MARKERS = ['&', '@', '!', '~', '?', '^', '%', '$'];

function processListItems() {
    // Get all list items from both ordered and unordered lists
    const listItems = document.querySelectorAll('ul li, ol li');

    listItems.forEach((li) => {
        // Skip if already processed
        if (li.hasAttribute('data-processed')) return;

        const text = li.textContent.trim();

        // Check if the list item starts with any of our special markers
        LIST_MARKERS.forEach((marker) => {
            if (text.startsWith(marker)) {
                // Set the data-task attribute
                li.setAttribute('data-task', marker);

                // Remove the marker from the text content
                li.textContent = text.substring(1).trim();

                // Mark as processed
                li.setAttribute('data-processed', 'true');
            }
        });

        // Also check for pre-existing data-task attributes
        const existingTask = li.getAttribute('data-task');
        if (existingTask && LIST_MARKERS.includes(existingTask)) {
            li.setAttribute('data-processed', 'true');
        }
    });
}

// Run when the DOM is loaded
document.addEventListener('DOMContentLoaded', processListItems);

// Also run when new content might be loaded (for dynamic content)
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            processListItems();
        }
    });
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
