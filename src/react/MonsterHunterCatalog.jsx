import React from "react";
import { motion, MotionConfig } from "framer-motion";

/**
 * モンハンのタイトル遍歴を、機種(ハード)別のカタログカードで見せる。
 * 「モンハンが出るハードは全部買った」という話がそのまま構造になる。
 * スクロールで各カードが下からせり上がる(spring)。未発売は skip 行。
 */

const CATALOG = [
  {
    label: "PSP",
    accent: "#4c74c9",
    titles: [
      { name: "モンスターハンター ポータブル", year: "2005" },
      { name: "モンスターハンター ポータブル 2nd", year: "2007", tag: "ティガレックス初登場" },
      { name: "モンスターハンター ポータブル 2nd G", year: "2008", tag: "PSPで最多販売" },
      { name: "モンスターハンター ポータブル 3rd", year: "2010" },
    ],
  },
  {
    label: "PS2",
    accent: "#2f5fa8",
    titles: [
      { name: "モンスターハンター2(ドス)", year: "2006", tag: "ここから／すぐやめた" },
    ],
  },
  {
    label: "Wii",
    accent: "#3f9e6a",
    titles: [{ name: "モンスターハンター3(トライ)", year: "2009" }],
  },
  {
    label: "ニンテンドー3DS",
    accent: "#c2564d",
    titles: [
      { name: "モンスターハンター3G", year: "2011" },
      { name: "モンスターハンター4", year: "2013" },
      { name: "モンスターハンター4G", year: "2014", tag: "グラインドで敬遠" },
      { name: "モンスターハンタークロス", year: "2015" },
      { name: "モンスターハンターダブルクロス", year: "2017" },
    ],
  },
  {
    label: "Wii U",
    accent: "#c07a1e",
    titles: [
      { name: "モンスターハンター3G HD Ver.", year: "2012", tag: "このために本体を買った" },
    ],
  },
  {
    label: "PS4",
    accent: "#2455b0",
    titles: [
      { name: "モンスターハンター：ワールド", year: "2018" },
      { name: "モンスターハンターワールド：アイスボーン", year: "2019", tag: "一つの完成形" },
    ],
  },
  {
    label: "PC",
    accent: "#5b6472",
    titles: [
      { name: "モンスターハンター フロンティア", year: "2007", tag: "課金＋Nコース" },
      { name: "モンスターハンターライズ", year: "2022", tag: "PC版" },
      { name: "モンスターハンターライズ：サンブレイク", year: "2022", tag: "今はやってない" },
      { name: "モンスターハンターワイルズ", year: "2025", tag: "クソだった" },
      { name: "モンスターハンターワイルズ：アセンダンス", year: "2027", skip: true },
    ],
  },
];

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

export function MonsterHunterCatalog() {
  const total = CATALOG.reduce(
    (n, s) => n + s.titles.filter((t) => !t.skip).length,
    0
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="mhc-root">
        <style>{CSS}</style>

        <div className="mhc-head">
          <span className="mhc-head-title">モンハン タイトル遍歴</span>
          <span className="mhc-count">{total} 本 ／ 7 ハード</span>
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
              key={series.label}
              className="mhc-card"
              variants={cardVariants}
              style={{ "--accent": series.accent }}
            >
              <header className="mhc-card-head">
                <span className="mhc-bar" />
                <span className="mhc-card-label">{series.label}</span>
              </header>

              <ul className="mhc-list">
                {series.titles.map((t, i) => (
                  <li
                    key={i}
                    className={`mhc-row${t.skip ? " mhc-row-skip" : ""}`}
                  >
                    <span className="mhc-year">{t.year || ""}</span>
                    <span className="mhc-name">{t.name}</span>
                    {t.tag && <span className="mhc-tag">{t.tag}</span>}
                    {t.skip && <span className="mhc-skip-tag">未発売</span>}
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
  display:flex; align-items:baseline; gap:0.55rem;
  padding:0.32rem 0;
  border-top:1px dashed rgba(148,163,184,0.22);
  font-size:0.82rem;
}
.mhc-row:first-child{ border-top:none; }
.mhc-year{
  flex-shrink:0; width:2.9rem;
  font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size:0.72rem; color:var(--sub);
}
.mhc-name{ color:var(--ink); line-height:1.5; }
.mhc-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700; letter-spacing:0.03em;
  color:var(--accent);
  background:color-mix(in srgb, var(--accent) 12%, #fff);
  border:1px solid color-mix(in srgb, var(--accent) 30%, #fff);
  border-radius:999px; padding:0 7px;
  white-space:nowrap;
}
.mhc-row-skip{ opacity:0.45; }
.mhc-row-skip .mhc-name{ text-decoration:line-through; }
.mhc-skip-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700;
  color:#6b7280; background:#f1f5f9;
  border:1px solid rgba(148,163,184,0.4);
  border-radius:999px; padding:0 7px;
  white-space:nowrap;
}

@media (prefers-reduced-motion: reduce){
  .mhc-card{ transition:none!important; }
}
`;
