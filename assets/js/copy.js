function copyToClipboard(id, button) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
    const text = codeBlock.textContent.replace(/^\$\s/gm, "");
     navigator.clipboard.writeText(text).then(() => {
     button.textContent = "Copied!";
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}
