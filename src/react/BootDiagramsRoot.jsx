// src/react/BootDiagramsRoot.jsx
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { DualBootDiagram } from "./DualBootDiagram";

/**
 * 共有のカードコンテナ
 * （見た目は DualBootDiagram.jsx に寄せて、ざっくり同じ雰囲気にしてる）
 */
function ShellCard({ title, subtitle, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        border: "1px solid rgba(148, 163, 184, 0.6)",
        borderRadius: "14px",
        padding: "16px 18px",
        margin: "18px 0",
        background: "var(--entry-bg, #0f172a)",
        boxShadow: mounted
          ? "0 10px 30px rgba(15, 23, 42, 0.45)"
          : "0 2px 10px rgba(15, 23, 42, 0.15)",
        color: "var(--content-fg, #e5e7eb)",
        fontSize: "0.95rem",
        position: "relative",
        overflow: "hidden",
        transform: mounted ? "translateY(0px)" : "translateY(10px)",
        opacity: mounted ? 1 : 0,
        transition:
          "transform 260ms ease-out, opacity 260ms ease-out, box-shadow 260ms ease-out",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0",
          background:
            "radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.18), transparent 55%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        {/* ヘッダー */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            marginBottom: "0.8rem",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.9), rgba(129,140,248,0.9))",
              boxShadow: "0 6px 14px rgba(15, 23, 42, 0.6)",
              fontSize: "1.1rem",
            }}
          >
            ⚙️
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.8,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            fontSize: "0.85rem",
            opacity: 0.9,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * 図2: Windows 起動フロー
 */
function WindowsBootFlowDiagram() {
  const steps = [
    {
      title: "UEFI 初期化",
      desc: "ASRock の UEFI がハードウェアを初期化し、「どの EFI を起動するか」を決める。",
    },
    {
      title: "Windows Boot Manager 起動",
      desc: "通常は EFI/Microsoft/Boot/bootmgfw.efi が呼び出される。",
    },
    {
      title: "BCD 読み込み",
      desc: "Boot Configuration Data から、どの Windows をどう起動するかを決定。",
    },
    {
      title: "winload.efi",
      desc: "Windows ローダーがカーネルやドライバをメモリへ展開。",
    },
    {
      title: "カーネル初期化",
      desc: "ntoskrnl.exe が実行され、サービスやドライバが立ち上がる。",
    },
    {
      title: "ログオン画面",
      desc: "サインイン画面が出て、いつものデスクトップへ。",
    },
  ];

  return (
    <ShellCard
      title="Windows 11 の起動フロー"
      subtitle="UEFI → Boot Manager → winload → カーネル"
    >
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {steps.map((step, index) => (
          <li
            key={step.title}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              marginBottom: index === steps.length - 1 ? 0 : "0.8rem",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "999px",
                border: "1px solid rgba(148,163,184,0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                background: "rgba(15,23,42,0.96)",
                marginTop: "2px",
              }}
            >
              {index + 1}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                {step.title}
              </div>
              <div>{step.desc}</div>
            </div>
          </li>
        ))}
      </ol>

      <p
        style={{
          fontSize: "0.8rem",
          opacity: 0.7,
          marginTop: "0.85rem",
        }}
      >
        ※ bootmgfw.efi が複数あったり、NVRAM 上の「Windows Boot Manager」が増殖していると、
        このどこかで変な挙動が出やすいゾーン。
      </p>
    </ShellCard>
  );
}

/**
 * 図3: systemd-boot メニュー構造
 */
function SystemdBootMenuDiagram() {
  return (
    <ShellCard
      title="systemd-boot のメニュー構造"
      subtitle="/boot/loader 配下のざっくり図"
    >
      <pre
        style={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: "0.8rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "0.5rem",
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(55, 65, 81, 0.9)",
          overflowX: "auto",
          marginBottom: "0.75rem",
        }}
      >
{String.raw`/boot/loader/
  loader.conf
  entries/
    arch.conf
    arch-fallback.conf
    windows.conf`}
      </pre>

      <ul
        style={{
          paddingLeft: "1rem",
          margin: 0,
          listStyle: "disc",
          fontSize: "0.85rem",
        }}
      >
        <li>
          <code>loader.conf</code> で
          <code>default</code> や <code>timeout</code> を設定。
        </li>
        <li>1つの *.conf ファイル = メニューの1エントリ。</li>
        <li>
          <code>windows.conf</code> は <code>efi</code> 行で{" "}
          <code>EFI/Microsoft/Boot/bootmgfw.efi</code> などのパスを書く。
        </li>
      </ul>

      <p
        style={{
          fontSize: "0.8rem",
          opacity: 0.7,
          marginTop: "0.85rem",
        }}
      >
        ※ 詳しいオプション（linux / initrd / options）は本文中の例を参照。
      </p>
    </ShellCard>
  );
}

/**
 * マウント処理
 * - 互換：id="dualboot-diagram" があればそこに DualBootDiagram を描画
 * - 新方式：data-diagram="dualboot|windows|systemd-menu" で描画
 */
function mountDiagrams() {
  // 互換: 既存の id="dualboot-diagram"
  const legacy = document.getElementById("dualboot-diagram");
  if (legacy && !legacy.dataset.mounted) {
    legacy.dataset.mounted = "true";
    const root = createRoot(legacy);
    root.render(<DualBootDiagram />);
  }

  // 新方式: data-diagram 属性
  const map = {
    dualboot: DualBootDiagram,
    windows: WindowsBootFlowDiagram,
    "systemd-menu": SystemdBootMenuDiagram,
  };

  const nodes = document.querySelectorAll("[data-diagram]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-diagram");
    const Comp = map[key];
    if (!Comp) return;
    if (node.dataset.mounted === "true") return;

    node.dataset.mounted = "true";
    const root = createRoot(node);
    root.render(<Comp />);
  });
}

document.addEventListener("DOMContentLoaded", mountDiagrams);
