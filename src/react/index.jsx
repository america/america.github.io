// src/react/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { DualBootDiagram } from "./DualBootDiagram";

// すべての DualBootDiagram をマウントする処理
function mountDualBootDiagram() {
  const nodes = document.querySelectorAll(
    "[data-react-component='DualBootDiagram']"
  );

  nodes.forEach((node) => {
    // 二重マウント防止
    if (node.dataset.mounted === "true") return;
    node.dataset.mounted = "true";

    const root = createRoot(node);
    root.render(<DualBootDiagram />);
  });
}

// DOM の状態に応じて即実行 or DOMContentLoaded 待ち
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    mountDualBootDiagram();
  });
} else {
  // すでに読み込み済みならすぐ実行
  mountDualBootDiagram();
}

