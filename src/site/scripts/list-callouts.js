const LIST_CALLOUT_CONFIG = [
    {
        color: '255, 214, 0',
        char: '&',
        icon: 'lucide-star',
    },
    {
        color: '255, 145, 0',
        char: '@',
        icon: 'lucide-goal',
    },
    {
        color: '255, 23, 68',
        char: '!',
        icon: 'lucide-alert-circle',
    },
    {
        color: '124, 77, 255',
        char: '~',
        icon: 'lucide-zap',
    },
    {
        color: '0, 184, 212',
        char: '?',
        icon: 'lucide-circle-help',
    },
    {
        color: '0, 200, 83',
        char: '^',
        icon: 'lucide-thumbs-up',
    },
    {
        color: '158, 158, 158',
        char: '%',
        icon: 'lucide-book-heart',
    },
    {
        color: '137, 110, 185',
        char: '$',
        icon: 'lucide-binoculars',
    },
    {
        color: '255, 168, 168',
        char: ';',
        icon: 'lucide-quote',
    },
];

function initListCallouts() {
    const lists = document.querySelectorAll('ul > li, ol > li'); // Only direct children

    lists.forEach((li) => {
        // Find where the first line ends (before any nested lists)
        const nestedList = li.querySelector('ul, ol');
        let firstLineContent = [];

        // Check if the first child is a paragraph
        const firstParagraph = li.querySelector('p:first-child');
        let node;

        if (firstParagraph) {
            // If there's a paragraph, use its content
            node = firstParagraph.firstChild;
            while (node) {
                firstLineContent.push(node);
                node = node.nextSibling;
            }
        } else {
            // Original behavior for non-paragraph content
            node = li.firstChild;
            while (node && node !== nestedList) {
                firstLineContent.push(node);
                node = node.nextSibling;
            }
        }

        // Get the first text node's content
        const textNodes = firstLineContent.filter(
            (node) => node.nodeType === Node.TEXT_NODE
        );
        if (!textNodes.length) return;

        const text = textNodes[0].textContent;
        const trimmedText = text.trim();
        if (!trimmedText.length) return;

        const firstChar = trimmedText.charAt(0);

        const calloutConfig = LIST_CALLOUT_CONFIG.find(
            (config) => config.char === firstChar
        );
        if (!calloutConfig) return;

        // Create line wrapper div
        const lineWrapper = document.createElement('div');
        lineWrapper.className = 'list-callout__line';
        lineWrapper.style.setProperty(
            '--list-callout-color',
            calloutConfig.color
        );

        // Create content wrapper span
        const contentWrapper = document.createElement('span');
        contentWrapper.className = 'list-callout__content';

        // Create marker if icon exists
        if (calloutConfig.icon) {
            const marker = document.createElement('span');
            marker.className = 'list-callout__marker';
            marker.innerHTML = `<i icon-name="${calloutConfig.icon.replace(
                'lucide-',
                ''
            )}"></i>`;
            contentWrapper.appendChild(marker);
        }

        // Find the index of the first non-whitespace character
        const leadingSpaces = text.slice(0, text.indexOf(trimmedText));
        const contentStartIndex = text.indexOf(firstChar) + 1;

        // Keep all original spacing, just remove the marker character
        textNodes[0].textContent =
            leadingSpaces + text.slice(contentStartIndex);

        // Move all first line content into the wrapper
        if (firstParagraph) {
            // For paragraph content, handle differently
            while (firstParagraph.firstChild) {
                contentWrapper.appendChild(firstParagraph.firstChild);
            }
            // Remove the empty paragraph
            if (firstParagraph.parentNode) {
                firstParagraph.parentNode.removeChild(firstParagraph);
            }
        } else {
            // Original behavior for non-paragraph content
            firstLineContent.forEach((node) => {
                if (node.parentNode === li) {
                    contentWrapper.appendChild(node);
                }
            });
        }

        // Add the content wrapper to the line wrapper
        lineWrapper.appendChild(contentWrapper);

        // Add the line wrapper to the li
        if (nestedList) {
            li.insertBefore(lineWrapper, nestedList);
        } else {
            li.appendChild(lineWrapper);
        }

        // Add callout class to the parent li
        li.classList.add('list-callout');
    });
}

// Run on page load and after any dynamic content changes
document.addEventListener('DOMContentLoaded', () => {
    initListCallouts();
    // Re-run after any MathJax rendering
    if (window.MathJax) {
        if (window.MathJax.Hub) {
            // MathJax v2
            MathJax.Hub.Queue(() => initListCallouts());
        } else if (window.MathJax.startup) {
            // MathJax v3
            MathJax.startup.promise.then(() => initListCallouts());
        }
    }
});
