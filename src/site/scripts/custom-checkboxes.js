document.addEventListener('DOMContentLoaded', () => {
    function processCheckboxes() {
        // Find all list items
        const listItems = document.querySelectorAll('li');

        listItems.forEach((li) => {
            // Get the text content
            const text = li.textContent.trim();

            // Check if this is a markdown checkbox by looking for [x] or [ ] pattern
            const checkboxMatch = text.match(/^\[(.)?\]/);
            if (!checkboxMatch) return;

            const checkboxChar = checkboxMatch[1] || ' '; // Get the character between brackets or space if empty

            // Only process if we haven't already converted this item
            if (!li.querySelector('input[type="checkbox"]')) {
                // Create checkbox input
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.disabled = true; // Disable the checkbox

                // Set checked state if it's not an empty checkbox
                if (checkboxChar !== ' ') {
                    checkbox.checked = true;
                }

                // Set data-task attribute on both checkbox and li if it's a special character
                if (
                    checkboxChar !== ' ' &&
                    checkboxChar !== 'x' &&
                    checkboxChar !== 'X'
                ) {
                    checkbox.setAttribute('data-task', checkboxChar);
                    li.setAttribute('data-task', checkboxChar);
                }

                // Add a class to the li for styling
                li.classList.add('custom-checkbox-item');

                // Add class to parent ul/ol if it exists
                const parentList = li.closest('ul, ol');
                if (parentList) {
                    parentList.classList.add('custom-checkbox-list');
                }

                // Replace the [x] or [ ] text with the checkbox
                const newText = text.replace(/^\[(.)?\]/, '').trim();
                li.innerHTML = '';
                li.appendChild(checkbox);
                li.appendChild(document.createTextNode(' ' + newText));
            }
        });
    }

    // Run initially
    processCheckboxes();

    // Set up a MutationObserver to handle dynamically added content
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                processCheckboxes();
            }
        });
    });

    // Start observing the document for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Add the required CSS
    const style = document.createElement('style');
    style.textContent = `
        .custom-checkbox-list {
            padding-left: 0;
            margin-left: 0;
        }
        .custom-checkbox-item {
            list-style-type: none;
        }
        .custom-checkbox-item input[type="checkbox"] {
            cursor: default;
        }
    `;
    document.head.appendChild(style);
});
