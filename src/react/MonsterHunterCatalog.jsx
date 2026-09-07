import React from "react";
import { motion, MotionConfig } from "framer-motion";

/**
 * モンハンのタイトル遍歴を、機種(ハード)別のカタログカードで見せる。
 * 「モンハンが出るハードは全部買った」という話がそのまま構造になる。
 * スクロールで各カードが下からせり上がる(spring)。未発売は skip 行。
 * 文字列は [日本語, English] のペア。lang prop で切り替える。
 */

const CATALOG = [
  {
    label: ["PSP", "PSP"],
    accent: "#4c74c9",
    titles: [
      { name: ["モンスターハンター ポータブル", "Monster Hunter Freedom"], year: "2005" },
      { name: ["モンスターハンター ポータブル 2nd", "Monster Hunter Freedom 2"], year: "2007", tag: ["ティガレックス初登場", "Tigrex debut"] },
      { name: ["モンスターハンター ポータブル 2nd G", "Monster Hunter Freedom Unite"], year: "2008", tag: ["PSPで最多販売", "best-selling on PSP"] },
      { name: ["モンスターハンター ポータブル 3rd", "Monster Hunter Portable 3rd"], year: "2010" },
    ],
  },
  {
    label: ["PS2", "PS2"],
    accent: "#2f5fa8",
    titles: [
      { name: ["モンスターハンター2(ドス)", "Monster Hunter 2 (Dos)"], year: "2006", tag: ["ここから／すぐやめた", "started here / quit soon"] },
    ],
  },
  {
    label: ["Wii", "Wii"],
    accent: "#3f9e6a",
    titles: [{ name: ["モンスターハンター3(トライ)", "Monster Hunter Tri"], year: "2009" }],
  },
  {
    label: ["ニンテンドー3DS", "Nintendo 3DS"],
    accent: "#c2564d",
    titles: [
      { name: ["モンスターハンター3G", "Monster Hunter 3 Ultimate"], year: "2011" },
      { name: ["モンスターハンター4", "Monster Hunter 4"], year: "2013" },
      { name: ["モンスターハンター4G", "Monster Hunter 4 Ultimate"], year: "2014", tag: ["グラインドで敬遠", "skipped it — the grind"] },
      { name: ["モンスターハンタークロス", "Monster Hunter Generations"], year: "2015" },
      { name: ["モンスターハンターダブルクロス", "Monster Hunter Generations Ultimate"], year: "2017" },
    ],
  },
  {
    label: ["Wii U", "Wii U"],
    accent: "#c07a1e",
    titles: [
      { name: ["モンスターハンター3G HD Ver.", "MH3 Ultimate (Wii U)"], year: "2012", tag: ["このために本体を買った", "bought the console just for this"] },
    ],
  },
  {
    label: ["PS4", "PS4"],
    accent: "#2455b0",
    titles: [
      { name: ["モンスターハンター：ワールド", "Monster Hunter: World"], year: "2018" },
      { name: ["モンスターハンターワールド：アイスボーン", "Monster Hunter World: Iceborne"], year: "2019", tag: ["一つの完成形", "one complete form"] },
    ],
  },
  {
    label: ["PC", "PC"],
    accent: "#5b6472",
    titles: [
      { name: ["モンスターハンター フロンティア", "Monster Hunter Frontier"], year: "2007", tag: ["課金＋Nコース", "subs + N Course"] },
      { name: ["モンスターハンターライズ", "Monster Hunter Rise"], year: "2022", tag: ["PC版", "PC version"] },
      { name: ["モンスターハンターライズ：サンブレイク", "Monster Hunter Rise: Sunbreak"], year: "2022", tag: ["今はやってない", "not playing anymore"] },
      { name: ["モンスターハンターワイルズ", "Monster Hunter Wilds"], year: "2025", tag: ["クソだった", "was rough"] },
      { name: ["モンスターハンターワイルズ：アセンダンス", "Monster Hunter Wilds: Ascendance"], year: "2027", skip: true },
    ],
  },
];

const TEXT = {
  head: ["モンハン タイトル遍歴", "Monster Hunter — the full run"],
  count: [(n) => `${n} 本 ／ 7 ハード`, (n) => `${n} titles / 7 platforms`],
  skip: ["未発売", "unreleased"],
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 46, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 16, mass: 0.7 },
  },
};

export function MonsterHunterCatalog({ lang = "ja" }) {
  const L = lang === "en" ? 1 : 0;
  const total = CATALOG.reduce(
    (n, s) => n + s.titles.filter((t) => !t.skip).length,
    0
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="mhc-root">
        <style>{CSS}</style>

        <div className="mhc-head">
          <span className="mhc-head-title">{TEXT.head[L]}</span>
          <span className="mhc-count">{TEXT.count[L](total)}</span>
        </div>

        <motion.div
          className="mhc-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {CATALOG.map((series) => (
            <motion.section
              key={series.label[0]}
              className="mhc-card"
              variants={cardVariants}
              style={{ "--accent": series.accent }}
            >
              <header className="mhc-card-head">
                <span className="mhc-bar" />
                <span className="mhc-card-label">{series.label[L]}</span>
              </header>

              <ul className="mhc-list">
                {series.titles.map((t, i) => (
                  <li
                    key={i}
                    className={`mhc-row${t.skip ? " mhc-row-skip" : ""}`}
                  >
                    <span className="mhc-year">{t.year || ""}</span>
                    <span className="mhc-name">{t.name[L]}</span>
                    {t.tag && <span className="mhc-tag">{t.tag[L]}</span>}
                    {t.skip && <span className="mhc-skip-tag">{TEXT.skip[L]}</span>}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </MotionConfig>
  );
}

export default MonsterHunterCatalog;

const CSS = String.raw`
.mhc-root{
  --ink:#242832; --sub:#6b7280; --line:rgba(148,163,184,0.28);
  margin:2rem 0 2.4rem;
  font-feature-settings:"palt";
}
.mhc-head{
  display:flex; align-items:baseline; justify-content:space-between;
  flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;
}
.mhc-head-title{ font-weight:700; font-size:1rem; color:var(--ink); letter-spacing:0.02em; }
.mhc-count{ font-size:0.74rem; color:var(--sub); }

.mhc-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(270px, 1fr));
  gap:0.85rem;
  align-items:start;
}
.mhc-card{
  border:1px solid var(--line);
  border-radius:16px;
  background:#fff;
  padding:0.9rem 1rem 1rem;
  box-shadow:0 14px 30px -20px rgba(40,50,70,0.4);
}
.mhc-card-head{
  display:flex; align-items:center; gap:0.55rem;
  margin-bottom:0.7rem;
}
.mhc-bar{
  width:4px; height:1.05rem; border-radius:2px;
  background:var(--accent); flex-shrink:0;
}
.mhc-card-label{
  font-weight:700; font-size:0.9rem; color:var(--ink); line-height:1.35;
}

.mhc-list{ list-style:none; margin:0; padding:0; }
.mhc-row{
  display:flex; flex-wrap:wrap; align-items:baseline; gap:0.35rem 0.55rem;
  padding:0.36rem 0;
  border-top:1px dashed rgba(148,163,184,0.22);
  font-size:0.82rem;
}
.mhc-row:first-child{ border-top:none; }
.mhc-year{
  flex-shrink:0; width:2.9rem;
  font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size:0.72rem; color:var(--sub);
}
.mhc-name{ color:var(--ink); line-height:1.5; flex:1 1 60%; min-width:0; }
.mhc-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700; letter-spacing:0.03em;
  color:var(--accent);
  background:color-mix(in srgb, var(--accent) 12%, #fff);
  border:1px solid color-mix(in srgb, var(--accent) 30%, #fff);
  border-radius:999px; padding:0 7px;
  white-space:normal;
}
.mhc-row-skip{ opacity:0.45; }
.mhc-row-skip .mhc-name{ text-decoration:line-through; }
.mhc-skip-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700;
  color:#6b7280; background:#f1f5f9;
  border:1px solid rgba(148,163,184,0.4);
  border-radius:999px; padding:0 7px;
  white-space:normal;
}

@media (prefers-reduced-motion: reduce){
  .mhc-card{ transition:none!important; }
}
`;
