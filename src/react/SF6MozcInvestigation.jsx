import { useEffect, useState } from "react";

const TONE_COLOR = {
  clear: { dot: "#64748b", text: "#cbd5e1", bg: "rgba(100,116,139,0.15)" },
  cause: { dot: "#f59e0b", text: "#fbbf24", bg: "rgba(245,158,11,0.15)" },
  fail: { dot: "#f43f5e", text: "#fb7185", bg: "rgba(244,63,94,0.15)" },
  solved: { dot: "#22c55e", text: "#4ade80", bg: "rgba(34,197,94,0.15)" },
};

const ROUNDS = [
  {
    round: 1,
    title: "コンポジタは無罪",
    verdict: "シロ",
    tone: "clear",
    detail:
      "Swayのキーバインド競合、GTK_IM_MODULE等の環境変数、fcitx5の設定。いずれも異常なし。",
  },
  {
    round: 2,
    title: "Protonが意図的にXIMを無効化",
    verdict: "原因の輪郭",
    tone: "cause",
    detail:
      "古いlibX11のクラッシュ回避のため、公式Protonはビルド時にXIMサポートを無効化していた。",
  },
  {
    round: 3,
    title: "レジストリ書き換え",
    verdict: "効果なし",
    tone: "fail",
    detail: "UseXIM=yを書き込み、値の反映も確認できたが、挙動は変わらず。",
  },
  {
    round: 4,
    title: "容疑者を丸裸にする",
    verdict: "決定的証拠",
    tone: "cause",
    detail:
      "WINEDEBUGログで xim 系は沈黙、imm 系だけが動作。Wine新IME実装がキー入力をXIMまで橋渡ししていなかった。",
  },
  {
    round: 5,
    title: "外から無理やり殴る",
    verdict: "効果なし",
    tone: "fail",
    detail:
      "fcitx5-remoteでグローバル状態はトグルできたが、Wineアプリの入力コンテキストには反映されず。",
  },
  {
    round: 6,
    title: "増援、GE-Proton",
    verdict: "効果なし・同一症状",
    tone: "fail",
    detail:
      "コミュニティ版に切り替えても症状は同一。Wine本体の構造的な制約と確定。",
  },
];

const SCOREBOARD = [
  { suspect: "コンポジタのキーバインド競合", verdict: "シロ", tone: "clear" },
  { suspect: "fcitx5の設定", verdict: "シロ", tone: "clear" },
  { suspect: "レジストリで UseXIM=y", verdict: "効果なし", tone: "fail" },
  { suspect: "fcitx5-remote で強制トグル", verdict: "効果なし", tone: "fail" },
  {
    suspect: "GE-Protonへの切り替え",
    verdict: "効果なし・同一症状",
    tone: "fail",
  },
  {
    suspect: "クリップボード貼り付け",
    verdict: "動作確認済み・唯一の実用解",
    tone: "solved",
  },
];

function Badge({ tone, children }) {
  const c = TONE_COLOR[tone];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "999px",
        fontSize: "0.72rem",
        fontWeight: 700,
        color: c.text,
        background: c.bg,
        border: `1px solid ${c.dot}`,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export function SF6MozcInvestigation() {
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
        padding: "24px 24px 20px",
        margin: "28px 0",
        background: "rgba(15, 23, 42, 0.96)",
        boxShadow: mounted
          ? "0 18px 40px rgba(0,0,0,0.55)"
          : "0 4px 18px rgba(0,0,0,0.20)",
        color: "#e5e7eb",
        transform: mounted ? "translateY(0px)" : "translateY(18px)",
        opacity: mounted ? 1 : 0,
        transition:
          "transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), " +
          "opacity 260ms ease-out, box-shadow 260ms ease-out",
        fontSize: "0.88rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          marginBottom: "1.4rem",
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
              "linear-gradient(135deg, rgba(244,63,94,1), rgba(245,158,11,1))",
            boxShadow: "0 4px 12px rgba(244,63,94,0.35)",
            fontSize: "1.1rem",
          }}
        >
          🕵️
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>
            調査タイムライン
          </div>
          <div style={{ fontSize: "0.78rem", opacity: 0.7 }}>
            Street Fighter 6 (Proton) 日本語入力トラブル
          </div>
        </div>
      </div>

      {/* タイムライン */}
      <div style={{ position: "relative", paddingLeft: "6px" }}>
        <div
          style={{
            position: "absolute",
            left: "16px",
            top: "6px",
            bottom: "6px",
            width: "2px",
            background: "rgba(148,163,184,0.25)",
          }}
        />
        {ROUNDS.map((r) => {
          const c = TONE_COLOR[r.tone];
          return (
            <div
              key={r.round}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.1rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  background: "rgba(15,23,42,0.96)",
                  border: `2px solid ${c.dot}`,
                  color: c.text,
                  zIndex: 1,
                }}
              >
                {r.round}
              </div>
              <div style={{ paddingTop: "3px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{r.title}</span>
                  <Badge tone={r.tone}>{r.verdict}</Badge>
                </div>
                <div style={{ opacity: 0.85, lineHeight: 1.6 }}>
                  {r.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 戦績スコアボード */}
      <div
        style={{
          marginTop: "1.6rem",
          paddingTop: "1.4rem",
          borderTop: "1px solid rgba(148,163,184,0.25)",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "0.95rem",
            marginBottom: "0.9rem",
          }}
        >
          戦績表
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "0.6rem",
          }}
        >
          {SCOREBOARD.map((s, i) => {
            const c = TONE_COLOR[s.tone];
            return (
              <div
                key={i}
                style={{
                  border: `1px solid ${c.dot}55`,
                  background: c.bg,
                  borderRadius: "10px",
                  padding: "0.7rem 0.8rem",
                }}
              >
                <div style={{ fontSize: "0.8rem", opacity: 0.85 }}>
                  {s.suspect}
                </div>
                <div
                  style={{
                    marginTop: "0.35rem",
                    fontWeight: 700,
                    color: c.text,
                    fontSize: "0.82rem",
                  }}
                >
                  {s.verdict}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SF6MozcInvestigation;
