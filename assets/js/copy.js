function copyToClipboard(id) {
    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;

    const text = codeBlock.textContent.replace(/^\$\s/gm, "");
    navigator.clipboard.writeText(text).then(() => {
        const button = document.querySelector(`button[onclick="copyToClipboard('${id}')"]`);
        if (button) {
            // すでにメッセージがある場合は削除
            const existingMessage = button.nextElementSibling;
            if (existingMessage && existingMessage.classList.contains("copied-message")) {
                existingMessage.remove();
            }

            // 新しいメッセージを追加
            let copiedMessage = document.createElement("span");
            copiedMessage.textContent = "Copied!";
            copiedMessage.classList.add("copied-message");

            button.parentNode.insertBefore(copiedMessage, button.nextSibling);

            // 2秒後にメッセージを削除
            setTimeout(() => {
                copiedMessage.remove();
            }, 2000);
        }
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
