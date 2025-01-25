document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((codeBlock) => {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerHTML = 'Copy';

        // Insert button before the code block
        codeBlock.parentNode.insertBefore(button, codeBlock);

        button.addEventListener('click', async () => {
            const code = codeBlock.textContent;
            try {
                await navigator.clipboard.writeText(code);
                button.innerHTML = 'Copied!';
                setTimeout(() => {
                    button.innerHTML = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                button.innerHTML = 'Error!';
                setTimeout(() => {
                    button.innerHTML = 'Copy';
                }, 2000);
            }
        });
    });
});
