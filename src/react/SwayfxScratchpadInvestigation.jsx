import { motion, MotionConfig } from "framer-motion";

const stepsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const stepItemVariants = {
  hidden: { opacity: 0, x: -90, scale: 0.9, rotate: -3, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 380, damping: 14, mass: 0.6 },
  },
};
const gridContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const gridItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 14, mass: 0.5 },
  },
};

const TONE_COLOR = {
  clear: { text: "#3f7a5c", bg: "#e2f5ea", border: "#aee0c4", icon: "✓" },
  cause: { text: "#966a1f", bg: "#fbf0d9", border: "#efd49b", icon: "●" },
  fail: { text: "#a1524f", bg: "#fbe8e6", border: "#eebab6", icon: "✕" },
  solved: { text: "#2c7a68", bg: "#def5ee", border: "#a2ddc9", icon: "✓" },
};

const STEPS = [
  {
    step: 1,
    title: "scratchpad show の2回目でSIGSEGV",
    verdict: "クラッシュ確認",
    tone: "fail",
    detail:
      "coredumpctl + gdb で解析。root_scratchpad_hide() の set_container_transform() に NULL の pending.workspace が渡っていた。",
  },
  {
    step: 2,
    title: "メンテナーから一言",
    verdict: "要検証",
    tone: "cause",
    detail:
      "「upstreamにも同じ問題があるか? scratchpadのコードはほとんど触っていないはず」という短い返信。",
  },
  {
    step: 3,
    title: "git blame: 2019年、本家swayが同じ狭いガードを追加",
    verdict: "起源を特定",
    tone: "cause",
    detail:
      "FULLSCREEN_GLOBAL && !workspace という条件は、2019年に本家sway側で追加されたコード(69a1a0ff)。swayfxはこれをフォークして引き継いでいた。",
  },
  {
    step: 4,
    title: "git blame: 2025年、本家sway側で同種のクラッシュを修正済み",
    verdict: "upstreamで修正済み",
    tone: "cause",
    detail:
      "swaywm/sway#8909 として報告・修正(ecfea6b8)。狭い条件を単純な if (!workspace) return; に置き換えていた。",
  },
  {
    step: 5,
    title: "swayfxは #537 でこの修正を取り込み済みと判明",
    verdict: "取り込み確認",
    tone: "clear",
    detail:
      "2026-07-09、wlroots-20 + scenefx-0.5 のマージ(33cb07d3)で upstream の修正が反映されていた。手元の 0.5.3-4 はそれより前のビルド。",
  },
  {
    step: 6,
    title: "masterをビルドしてネスト起動、IPC経由で再現手順を実行",
    verdict: "実機で検証",
    tone: "cause",
    detail:
      "本番セッションを壊さないよう WLR_BACKENDS=wayland でネスト起動。フォーカスが不安定だったため swaymsg で直接コマンドを送って再現手順を実行。",
  },
  {
    step: 7,
    title: "2回目の scratchpad show でも生存",
    verdict: "再現せず",
    tone: "solved",
    detail:
      "プロセスは state=S のまま、coredumpctl にも新規クラッシュなし。masterでは既に直っていることを確認。",
  },
  {
    step: 8,
    title: "調査結果をIssueに報告してクローズ",
    verdict: "解決",
    tone: "solved",
    detail: "upstreamとの経緯・実機検証の結果をコメントし、Issueをクローズした。",
  },
];

const TRAIL = [
  {
    label: "69a1a0ff / 2019-03-31",
    text: "upstream: 狭いガード(FULLSCREEN_GLOBALのみ)を追加",
    tone: "fail",
  },
  {
    label: "ecfea6b8 / 2025-10-02",
    text: "upstream: NULLガードを一般化(sway#8909を修正)",
    tone: "solved",
  },
  {
    label: "33cb07d3 / 2026-07-09",
    text: "swayfx: #537でupstreamの修正を取り込み",
    tone: "clear",
  },
  {
    label: "実機検証 / 2026-08-09",
    text: "masterで再現手順を実行 → クラッシュせず",
    tone: "solved",
  },
];

function Badge({ tone, children }) {
  const c = TONE_COLOR[tone];
  const pulseProps =
    tone === "cause"
      ? {
          animate: {
            boxShadow: [
              "0 0 0 0 rgba(245,158,11,0.35)",
              "0 0 0 5px rgba(245,158,11,0)",
              "0 0 0 0 rgba(245,158,11,0)",
            ],
          },
          transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }
      : {};
  return (
    <motion.span
      className="sw560-badge"
      style={{ color: c.text, background: c.bg, borderColor: c.border }}
      {...pulseProps}
    >
      <span className="sw560-badge-icon">{c.icon}</span>
      {children}
    </motion.span>
  );
}

export function SwayfxScratchpadInvestigation() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="sw560-root"
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ type: "spring", stiffness: 240, damping: 16, mass: 0.7 }}
      >
        <style>{CSS}</style>

        <div className="sw560-frame">
          <div className="sw560-content">
            <motion.div
              className="sw560-head"
              initial={{ opacity: 0, x: -60, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <div className="sw560-eyebrow">CASE FILE</div>
              <div className="sw560-title">upstreamとの噛み合わせを追う</div>
              <div className="sw560-subtitle">swayfx Issue #560: scratchpad NULLクラッシュ</div>
            </motion.div>

            <motion.div
              className="sw560-steps"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={stepsContainerVariants}
            >
              <div className="sw560-steps-line" />
              {STEPS.map((r) => {
                const c = TONE_COLOR[r.tone];
                return (
                  <motion.div className="sw560-step" key={r.step} variants={stepItemVariants}>
                    <div
                      className="sw560-step-num"
                      style={{ background: c.bg, color: c.text, borderColor: c.border }}
                    >
                      {String(r.step).padStart(2, "0")}
                    </div>
                    <div className="sw560-step-body">
                      <div className="sw560-step-head">
                        <span className="sw560-step-title">{r.title}</span>
                        <Badge tone={r.tone}>{r.verdict}</Badge>
                      </div>
                      <div className="sw560-step-detail">{r.detail}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="sw560-trail">
              <div className="sw560-trail-title">コミットの足取り</div>
              <motion.div
                className="sw560-trail-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={gridContainerVariants}
              >
                {TRAIL.map((s, i) => {
                  const c = TONE_COLOR[s.tone];
                  return (
                    <motion.div
                      key={i}
                      className="sw560-trail-chip"
                      variants={gridItemVariants}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <div
                        className="sw560-trail-icon"
                        style={{ background: c.bg, color: c.text, borderColor: c.border }}
                      >
                        {c.icon}
                      </div>
                      <div className="sw560-trail-text">
                        <div className="sw560-trail-label">{s.label}</div>
                        <div className="sw560-trail-verdict" style={{ color: c.text }}>
                          {s.text}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

const CSS = `
.sw560-root{
  position:relative;
  border-radius:28px;
  padding:2.5px;
  margin:32px 0;
  background:linear-gradient(135deg, #6fb89c 0%, #dbb15a 45%, #7fa6d6 100%);
  background-size:220% 220%;
  animation:sw560-gradient-drift 9s ease-in-out infinite;
  box-shadow:0 20px 50px -20px rgba(60,70,90,0.35);
  font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans",sans-serif;
}
.sw560-frame{
  position:relative;
  border-radius:26px;
  overflow:hidden;
  background:linear-gradient(150deg, #f7f9fc 0%, #fbf8f2 45%, #f2f9f5 100%);
  color:#2a2d34;
}
:root[data-theme="dark"] .sw560-root{
  background:linear-gradient(135deg, #4d8b73 0%, #a3812f 45%, #4f6f97 100%);
}
:root[data-theme="dark"] .sw560-frame{
  background:linear-gradient(150deg, #1b2027 0%, #201d1a 45%, #172019 100%);
  color:#dcdee2;
}
:root[data-theme="dark"] .sw560-title{color:#eceef1;}
:root[data-theme="dark"] .sw560-step-title{color:#e5e7eb;}
:root[data-theme="dark"] .sw560-trail-title{color:#e5e7eb;}
:root[data-theme="dark"] .sw560-step-num{background:rgba(255,255,255,0.06)!important;}
:root[data-theme="dark"] .sw560-step:hover{background:rgba(255,255,255,0.05);}
:root[data-theme="dark"] .sw560-trail-chip{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08);}
:root[data-theme="dark"] .sw560-trail-chip:hover{background:rgba(255,255,255,0.08);}

@keyframes sw560-gradient-drift{
  0%,100%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
}

.sw560-content{position:relative;padding:30px 32px 32px;}

.sw560-head{margin-bottom:1.4rem;}
.sw560-eyebrow{
  font-size:0.66rem;
  font-weight:700;
  letter-spacing:0.16em;
  color:#7c9a8c;
  margin-bottom:6px;
}
.sw560-title{
  font-family:"Newsreader",Georgia,serif;
  font-weight:700;
  font-size:1.7rem;
  letter-spacing:0.002em;
  background:linear-gradient(100deg, #3f7a5c 0%, #966a1f 55%, #4b6f97 100%);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
.sw560-subtitle{font-size:0.8rem;color:#6b7280;margin-top:6px;}

.sw560-steps{position:relative;display:flex;flex-direction:column;margin-bottom:1.8rem;}
.sw560-steps-line{
  position:absolute;
  left:16px;
  top:8px;
  bottom:8px;
  width:1.5px;
  background:linear-gradient(180deg, rgba(148,163,184,0.35), rgba(148,163,184,0.08));
  z-index:0;
}
.sw560-step{
  position:relative;
  z-index:1;
  display:flex;
  gap:1.1rem;
  padding:0.9rem 0.2rem;
  border-bottom:1px solid rgba(148,163,184,0.18);
  transition:background 150ms ease;
  border-radius:10px;
}
.sw560-step:hover{background:rgba(255,255,255,0.45);}
.sw560-step:last-child{border-bottom:none;}
.sw560-step-num{
  flex-shrink:0;
  width:32px;
  height:32px;
  border-radius:50%;
  border:1.5px solid;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:0.72rem;
  font-weight:700;
  background:#fff;
}
.sw560-step-body{flex:1;min-width:0;}
.sw560-step-head{
  display:flex;
  align-items:center;
  gap:0.6rem;
  flex-wrap:wrap;
  margin-bottom:0.3rem;
}
.sw560-step-title{font-weight:600;font-size:0.92rem;color:#242832;}
.sw560-step-detail{font-size:0.83rem;color:#6b7280;line-height:1.65;}

.sw560-badge{
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:2px 10px;
  border-radius:999px;
  font-size:0.68rem;
  font-weight:600;
  border:1px solid;
  white-space:nowrap;
}
.sw560-badge-icon{font-size:0.7rem;}

.sw560-trail{padding-top:0.4rem;}
.sw560-trail-title{font-weight:600;font-size:0.88rem;color:#242832;margin-bottom:0.8rem;}
.sw560-trail-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(230px, 1fr));
  gap:0.6rem;
}
.sw560-trail-chip{
  display:flex;
  align-items:center;
  gap:0.7rem;
  border-radius:14px;
  padding:0.6rem 0.8rem;
  background:rgba(255,255,255,0.6);
  border:1px solid rgba(148,163,184,0.16);
  transition:box-shadow 160ms ease, background 160ms ease;
}
.sw560-trail-chip:hover{
  background:rgba(255,255,255,0.9);
  box-shadow:0 10px 22px -12px rgba(60,70,90,0.35);
}
.sw560-trail-icon{
  flex-shrink:0;
  width:26px;
  height:26px;
  border-radius:50%;
  border:1.5px solid;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:0.78rem;
  font-weight:700;
}
.sw560-trail-text{min-width:0;}
.sw560-trail-label{font-size:0.72rem;color:#4b5563;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;}
.sw560-trail-verdict{margin-top:0.2rem;font-weight:700;font-size:0.78rem;}

@media (prefers-reduced-motion: reduce){
  .sw560-root, .sw560-badge, .sw560-step, .sw560-trail-chip{
    transition:none!important;
    animation:none!important;
  }
}
`;
