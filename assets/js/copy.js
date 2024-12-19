        function copyToClipboard(id, button) {
            const codeBlock = document.getElementById(id);
            if (!codeBlock) return;

            const text = codeBlock.textContent.replace(/^\$\s/gm, "");
            navigator.clipboard.writeText(text).then(() => {
                const originalText = button.textContent;
                button.textContent = "Copied!";
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        }
