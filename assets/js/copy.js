function copyToClipboard(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Text copied to clipboard");

        // ボタンを取得
        const button = document.querySelector(`button[onclick="copyToClipboard('${elementId}')"]`);

        // クラスを追加して「Copied!」を表示
        if (button) {
            button.classList.add('copied');
            setTimeout(() => {
                button.classList.remove('copied'); // 2秒後に元に戻す
            }, 2000);
        }
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
