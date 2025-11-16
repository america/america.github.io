// src/react/DualBootDiagram.jsx
import React from "react";

const steps = [
  {
    title: "UEFI",
    desc: "ASRock A520M Pro4 のファームウェアが最初に起動する。",
  },
  {
    title: "ESP（vfat, /boot）",
    desc: "EFI System Partition 上の /EFI/ 配下が探索される。",
  },
  {
    title: "systemd-boot",
    desc: "systemd-bootx64.efi が実行され、エントリ一覧を表示。",
  },
  {
    title: "Arch Linux / Windows Boot Manager",
    desc: "選択したエントリに応じて vmlinuz または bootmgfw.efi を起動。",
  },
];

export function DualBootDiagram() {
  return (
    <div
      style={{
        border: "1px solid rgba(148, 163, 184, 0.6)",
        borderRadius: "14px",
        padding: "16px 18px",
        margin: "18px 0",
        background: "var(--entry-bg, #0f172a)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.4)",
        color: "var(--content-fg, #e5e7eb)",
        fontSize: "0.95rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 上のアクセントバー */}
      <div
        style={{
          position: "absolute",
          inset: "0",
          background:
            "radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.25), transparent 55%), radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.25), transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
        }}
      >
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
              systemd-boot 起動フロー
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                opacity: 0.8,
              }}
            >
              「どこからどこへ飛んでいるか」をざっくり掴むための図
            </div>
          </div>
        </div>

        {/* タイムライン */}
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
                marginBottom: index === steps.length - 1 ? 0 : "0.9rem",
              }}
            >
              {/* 番号バッジ + 縦ライン */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "2px",
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
                    background: "rgba(15,23,42,0.95)",
                  }}
                >
                  {index + 1}
                </div>
                {index !== steps.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      flexGrow: 1,
                      marginTop: "2px",
                      background:
                        "linear-gradient(to bottom, rgba(148,163,184,0.8), rgba(148,163,184,0.05))",
                    }}
                  />
                )}
              </div>

              {/* テキスト */}
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: "2px",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.9,
                  }}
                >
                  {step.desc}
                </div>
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
          ※ 実際のエントリ設定は本文中の loader/entries/*.conf の例を参照してください。
        </p>
      </div>
    </div>
  );
}

