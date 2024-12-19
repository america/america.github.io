function copyToClipboard(id) {
    const textToCopy = document.getElementById(id).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        // コピー成功時に「Copied!」を表示
        const button = document.querySelector(`button[onclick="copyToClipboard('${id}')"]`);
        if (button) {
            button.innerText = "Copied!";
            setTimeout(() => {
                button.innerText = "Copy";
            }, 2000); // 2秒後に元の「Copy」に戻す
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
