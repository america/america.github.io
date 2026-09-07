import React from "react";
import { motion, MotionConfig } from "framer-motion";

/**
 * 格ゲー & モンハン 30年のタイムライン。
 * 中央のスパインを挟んで、格ゲー(左)とモンハン(右)を交互に並べる。
 * スクロールで視界に入ると、各カードがそれぞれの側から
 * spring で勢いよく差し込まれる(サイトの「シュイーン」系モーションに合わせる)。
 */

const ENTRIES = [
  {
    year: "1995",
    track: "fg",
    title: "スーパーII 系 → ZERO / ZERO2 / ZERO3",
    note: "ゲーメストを毎月。当たり前に台に座っていた。",
  },
  {
    year: "1999",
    track: "fg",
    title: "スト III → 2nd → 3rd、ヴァンパイア(ビシャモン)",
    note: "SNK も KOF・サムスピ・餓狼を追いかけていた。",
  },
  {
    year: "2001",
    track: "fg",
    title: "3rd を引退(大学)",
    note: "以後ゲーセンは、人の対戦を観て、タバコを吸う場所になった。",
  },
  {
    year: "2006",
    track: "mh",
    title: "MH2(ドス) / PS2",
    note: "ネットワークアダプターを挿してオンライン。すぐやめた。",
  },
  {
    year: "2008",
    track: "mh",
    title: "MHP2 / MHP2G(PSP)",
    note: "友達とPSPを持ち寄って、菓子を食って、土曜から日曜の朝まで。",
    highlight: "ここが一番よかった",
  },
  {
    year: "2010",
    track: "mh",
    title: "MHP3rd(PSP)",
    note: "持ち寄り期の、もう一つの軸。",
  },
  {
    year: "2012",
    track: "mh",
    title: "MH3G(3DS) / MH3G HD(Wii U)",
    note: "HD版のためだけに Wii U 本体を買った。",
  },
  {
    year: "2014",
    track: "mh",
    title: "MH4 / MH4G(3DS)",
    note: "4G の発掘装備と100周回のグラインドで、一度離れかけた。",
  },
  {
    year: "2014",
    track: "fg",
    title: "ウル4",
    note: "少しだけ触った。",
  },
  {
    year: "2016",
    track: "fg",
    title: "スト5(いぶき)",
    note: "ここで本格的に復帰。",
  },
  {
    year: "2019",
    track: "mh",
    title: "MHW / アイスボーン(PS4)",
    note: "ワールド＋アイスボーンで、一つの完成形。",
  },
  {
    year: "2021",
    track: "mh",
    title: "MHライズ → サンブレイク(PC)",
    note: "ここから PC に移行。",
  },
  {
    year: "2023",
    track: "fg",
    title: "スト6(キンバリー)",
    note: "競技シーンも追っている。",
  },
  {
    year: "2025",
    track: "mh",
    title: "MHワイルズ(PC)",
    note: "いまのところ、ここまで。",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: (dir) => ({ opacity: 0, x: 78 * dir, scale: 0.92 }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 430, damping: 15, mass: 0.6 },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 600, damping: 12 },
  },
};

export function GameHistoryTimeline() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="ghtl-root">
        <style>{CSS}</style>

        <div className="ghtl-head">
          <span className="ghtl-head-title">格ゲー &amp; モンハン — 30年</span>
          <span className="ghtl-legend">
            <span className="ghtl-legend-item ghtl-fg">
              <i /> 格闘ゲーム
            </span>
            <span className="ghtl-legend-item ghtl-mh">
              <i /> モンスターハンター
            </span>
          </span>
        </div>

        <motion.ol
          className="ghtl-list"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className="ghtl-spine" aria-hidden="true" />

          {ENTRIES.map((e, i) => {
            const dir = e.track === "fg" ? -1 : 1;
            return (
              <motion.li
                key={i}
                className={`ghtl-item ghtl-${e.track}${
                  e.highlight ? " ghtl-item-hl" : ""
                }`}
                variants={itemVariants}
                custom={dir}
              >
                <div className="ghtl-card">
                  {e.highlight && (
                    <span className="ghtl-hl-tag">{e.highlight}</span>
                  )}
                  <div className="ghtl-card-title">{e.title}</div>
                  <div className="ghtl-card-note">{e.note}</div>
                </div>

                <div className="ghtl-mid">
                  <motion.span className="ghtl-dot" variants={dotVariants} />
                  <span className="ghtl-year">{e.year}</span>
                </div>

                <div className="ghtl-spacer" />
              </motion.li>
            );
          })}
        </motion.ol>

        <p className="ghtl-foot">
          ゲームは進化した。あの部屋は、もう戻ってこない。
        </p>
      </div>
    </MotionConfig>
  );
}

export default GameHistoryTimeline;

const CSS = String.raw`
.ghtl-root{
  --fg:#c2564d; --fg-bg:#fbe9e6; --fg-bd:#eec3bd;
  --mh:#4b7a53; --mh-bg:#e7f1e5; --mh-bd:#c3ddc2;
  --ink:#242832; --sub:#6b7280; --line:rgba(148,163,184,0.30);
  margin:2.2rem 0;
  font-feature-settings:"palt";
}
.ghtl-head{
  display:flex; align-items:center; justify-content:space-between;
  flex-wrap:wrap; gap:0.6rem; margin-bottom:1.2rem;
}
.ghtl-head-title{ font-weight:700; font-size:0.98rem; color:var(--ink); letter-spacing:0.02em; }
.ghtl-legend{ display:flex; gap:0.9rem; font-size:0.74rem; color:var(--sub); }
.ghtl-legend-item{ display:inline-flex; align-items:center; gap:0.35rem; }
.ghtl-legend-item i{ width:10px; height:10px; border-radius:50%; display:inline-block; }
.ghtl-legend-item.ghtl-fg i{ background:var(--fg); }
.ghtl-legend-item.ghtl-mh i{ background:var(--mh); }

.ghtl-list{
  list-style:none; margin:0; padding:0; position:relative;
}
.ghtl-spine{
  position:absolute; top:6px; bottom:6px; left:50%;
  width:2px; transform:translateX(-50%);
  background:linear-gradient(180deg, rgba(148,163,184,0.08), rgba(148,163,184,0.42), rgba(148,163,184,0.08));
}

.ghtl-item{
  position:relative;
  display:grid;
  grid-template-columns:1fr 96px 1fr;
  align-items:center;
  margin:0.55rem 0;
}
.ghtl-card{
  border:1px solid var(--line);
  border-radius:16px;
  padding:0.8rem 1rem;
  background:#fff;
  box-shadow:0 12px 26px -18px rgba(40,50,70,0.35);
}
.ghtl-item-hl .ghtl-card{ box-shadow:0 14px 30px -14px rgba(75,122,83,0.5); }
.ghtl-card-title{ font-weight:700; font-size:0.9rem; color:var(--ink); line-height:1.5; }
.ghtl-card-note{ margin-top:0.3rem; font-size:0.8rem; color:var(--sub); line-height:1.65; }

.ghtl-hl-tag{
  display:inline-block; margin-bottom:0.35rem;
  font-size:0.66rem; font-weight:700; letter-spacing:0.04em;
  color:var(--mh); background:var(--mh-bg);
  border:1px solid var(--mh-bd); border-radius:999px;
  padding:1px 9px;
}

/* 格ゲー = 左側にカード / モンハン = 右側にカード */
.ghtl-fg .ghtl-card{ grid-column:1; border-color:var(--fg-bd); background:linear-gradient(180deg,#fff, var(--fg-bg)); }
.ghtl-fg .ghtl-spacer{ grid-column:3; }
.ghtl-fg .ghtl-card-title{ color:#8f382f; }

.ghtl-mh .ghtl-card{ grid-column:3; border-color:var(--mh-bd); background:linear-gradient(180deg,#fff, var(--mh-bg)); }
.ghtl-mh .ghtl-spacer{ grid-column:1; }
.ghtl-mh .ghtl-card-title{ color:#2f5d38; }

.ghtl-mid{
  grid-column:2;
  display:flex; flex-direction:column; align-items:center; gap:0.3rem;
  position:relative; z-index:1;
}
.ghtl-dot{
  width:15px; height:15px; border-radius:50%;
  background:#fff; border:3px solid rgba(148,163,184,0.7);
}
.ghtl-fg .ghtl-dot{ border-color:var(--fg); }
.ghtl-mh .ghtl-dot{ border-color:var(--mh); }
.ghtl-item-hl .ghtl-dot{ box-shadow:0 0 0 5px rgba(75,122,83,0.18); }
.ghtl-year{
  font-size:0.72rem; font-weight:700; color:var(--sub);
  background:var(--bg,#fff); padding:0 4px; letter-spacing:0.03em;
}

.ghtl-foot{
  margin-top:1.4rem; text-align:center;
  font-size:0.82rem; color:var(--sub); font-style:italic;
}

@media (max-width:640px){
  .ghtl-spine{ left:19px; }
  .ghtl-item{ grid-template-columns:38px 1fr; }
  .ghtl-mid{ grid-column:1; }
  .ghtl-fg .ghtl-card,
  .ghtl-mh .ghtl-card{ grid-column:2; }
  .ghtl-fg .ghtl-spacer,
  .ghtl-mh .ghtl-spacer{ display:none; }
  .ghtl-year{ writing-mode:horizontal-tb; }
}

@media (prefers-reduced-motion: reduce){
  .ghtl-card, .ghtl-dot{ transition:none!important; }
}
`;
