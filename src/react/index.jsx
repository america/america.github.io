import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { DualBootDiagram } from "./DualBootDiagram";

/**
 * 図用の共通カード UI
 * DualBootDiagram と同系統のふわっとアニメーションだけを持たせた版
 */
function ShellCard({ title, subtitle, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 25);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        border: "1px solid rgba(148, 163, 184, 0.45)",
        borderRadius: "18px",
        padding: "20px 22px",
        margin: "26px 0",
        background: "rgba(15, 23, 42, 0.96)",
        boxShadow: mounted
          ? "0 18px 40px rgba(0,0,0,0.55)"
          : "0 4px 18px rgba(0,0,0,0.20)",
        color: "var(--content-fg, #e5e7eb)",
        transform: mounted ? "translateY(0px)" : "translateY(18px)",
        opacity: mounted ? 1 : 0,
        transition:
          "transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), " +
          "opacity 260ms ease-out, " +
          "box-shadow 260ms ease-out",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* ヘッダ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(56,189,248,1), rgba(129,140,248,1))",
              boxShadow: "0 4px 12px rgba(56,189,248,0.35)",
              fontSize: "1.15rem",
              fontWeight: 700,
            }}
          >
            ⚙
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{title}</div>
            {subtitle && (
              <div style={{ fontSize: "0.8rem", opacity: 0.75 }}>
                {subtitle}
              </div>
            )}
          </div>
        </div>

        {/* 本文（図やテキスト） */}
        <div
          style={{
            fontSize: "0.88rem",
            opacity: 0.96,
            lineHeight: 1.6,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Windows 起動フロー図
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
      desc: "Boot Configuration Data を読み込む。",
    },
    {
      title: "winload.efi 実行",
      desc: "Windows ローダーがカーネル・ドライバをメモリへ展開。",
    },
    {
      title: "Windows カーネル初期化",
      desc: "ntoskrnl.exe がデバイスドライバやサービスを起動。",
    },
    {
      title: "ログオン画面",
      desc: "サインイン画面が表示される。",
    },
  ];

  return (
    <ShellCard
      title="Windows 11 の起動フロー"
      subtitle="UEFI → Boot Manager → winload → カーネル"
    >
      <ol style={{ listStyle: "none", padding: 0 }}>
        {steps.map((step, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              gap: "0.75rem",
              marginBottom: "0.8rem",
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
              <div style={{ fontWeight: 600 }}>{step.title}</div>
              <div>{step.desc}</div>
            </div>
          </li>
        ))}
      </ol>

      <p style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: "1rem" }}>
        ※ bootmgfw.efi が複数あったり、NVRAM の Boot Manager が増殖していると不具合が起きやすいゾーン。
      </p>
    </ShellCard>
  );
}

/**
 * systemd-boot メニュー構造の図
 */
function SystemdBootMenuDiagram() {
  return (
    <ShellCard
      title="systemd-boot のメニュー構造"
      subtitle="/boot/loader 配下"
    >
      <pre
        style={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New"',
          fontSize: "0.8rem",
          padding: "0.6rem 0.8rem",
          background: "rgba(15,23,42,0.9)",
          borderRadius: "0.5rem",
          border: "1px solid rgba(55,65,81,0.9)",
          overflowX: "auto",
          marginBottom: "0.8rem",
        }}
      >
{String.raw`/boot/loader/
  loader.conf
  entries/
    arch.conf
    arch-fallback.conf
    windows.conf`}
      </pre>

      <ul style={{ paddingLeft: "1rem", fontSize: "0.85rem" }}>
        <li>loader.conf: default / timeout / console-mode を設定。</li>
        <li>entries/*.conf がメニュー項目になる。</li>
        <li>windows.conf は efi 行で bootmgfw.efi へのパスを書く。</li>
      </ul>
    </ShellCard>
  );
}

/**
 * マウント処理
 */
function mount() {
  // 互換用：id="dualboot-diagram"
  const legacy = document.getElementById("dualboot-diagram");
  if (legacy && !legacy.dataset.mounted) {
    legacy.dataset.mounted = "true";
    createRoot(legacy).render(<DualBootDiagram />);
  }

  // data-diagram に応じて React をマウント
  const map = {
    dualboot: DualBootDiagram,
    windows: WindowsBootFlowDiagram,
    "systemd-menu": SystemdBootMenuDiagram,
  };

  document.querySelectorAll("[data-diagram]").forEach((el) => {
    const key = el.getAttribute("data-diagram");
    const Comp = map[key];
    if (!Comp) return;
    if (el.dataset.mounted === "true") return;
    el.dataset.mounted = "true";
    createRoot(el).render(<Comp />);
  });
}

document.addEventListener("DOMContentLoaded", mount);
