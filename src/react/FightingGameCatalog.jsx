import React from "react";
import { motion, MotionConfig } from "framer-motion";

/**
 * 「触った対戦格闘、省略なし」をシリーズ別のカタログカードで見せる。
 * スクロールで各カードが下からせり上がり(spring)、
 * 未プレイのタイトルは打ち消し線＋淡色で「境界」として残す。
 * 文字列は [日本語, English] のペア。lang prop で切り替える。
 */

const CATALOG = [
  {
    label: ["ストリートファイター", "Street Fighter"],
    accent: "#c2564d",
    titles: [
      { name: ["II", "II"], year: "1991" },
      { name: ["II'", "II'"], year: "1992" },
      { name: ["II' TURBO(ダッシュターボ)", "II' TURBO (Hyper Fighting)"], year: "1992" },
      { name: ["スーパーII", "Super II"], year: "1993" },
      { name: ["スーパーII X", "Super II Turbo"], year: "1994" },
      { name: ["ZERO", "Alpha"], year: "1995" },
      { name: ["ZERO2", "Alpha 2"], year: "1996" },
      { name: ["ZERO3", "Alpha 3"], year: "1998" },
      { name: ["III", "III: New Generation"], year: "1997" },
      { name: ["III 2nd Impact", "III: 2nd Impact"], year: "1997" },
      { name: ["III 3rd Strike", "III: 3rd Strike"], year: "1999" },
      { name: ["IV(ウル4)", "IV (USF4)"], year: "2014", tag: ["少しだけ", "a little"] },
      { name: ["V(いぶき)", "V (Ibuki)"], year: "2016" },
      { name: ["6(キンバリー)", "6 (Kimberly)"], year: "2023" },
    ],
  },
  {
    label: ["ヴァンパイア", "Darkstalkers"],
    accent: "#7c5cd6",
    titles: [
      { name: ["ヴァンパイア", "Darkstalkers: The Night Warriors"], year: "1994" },
      { name: ["ヴァンパイア ハンター", "Night Warriors: Darkstalkers' Revenge"], year: "1995" },
      {
        name: ["ヴァンパイア セイヴァー", "Vampire Savior"],
        year: "1997",
        tag: ["ビシャモン", "Bishamon main"],
      },
      { name: ["セイヴァー以降", "After Savior"], skip: true },
    ],
  },
  {
    label: ["VS. シリーズ(カプコン)", "VS. Series (Capcom)"],
    accent: "#c07a1e",
    titles: [
      { name: ["X-MEN VS. STREET FIGHTER", "X-MEN VS. STREET FIGHTER"], year: "1996" },
      {
        name: [
          "MARVEL VS. CAPCOM: CLASH OF SUPER HEROES",
          "MARVEL VS. CAPCOM: CLASH OF SUPER HEROES",
        ],
        year: "1998",
      },
      {
        name: [
          "MARVEL VS. CAPCOM 2: New Age of Heroes",
          "MARVEL VS. CAPCOM 2: New Age of Heroes",
        ],
        year: "2000",
      },
      {
        name: [
          "MARVEL VS. CAPCOM 3: Fate of Two Worlds",
          "MARVEL VS. CAPCOM 3: Fate of Two Worlds",
        ],
        year: "2011",
        skip: true,
      },
    ],
  },
  {
    label: ["CAPCOM VS. SNK", "CAPCOM VS. SNK"],
    accent: "#1f83a6",
    titles: [
      { name: ["MILLENNIUM FIGHT 2000", "MILLENNIUM FIGHT 2000"], year: "2000" },
      {
        name: [
          "CAPCOM VS. SNK 2: MILLIONAIRE FIGHTING 2001",
          "CAPCOM VS. SNK 2: MILLIONAIRE FIGHTING 2001",
        ],
        year: "2001",
        skip: true,
      },
    ],
  },
  {
    label: ["THE KING OF FIGHTERS", "THE KING OF FIGHTERS"],
    accent: "#4f46c9",
    titles: [
      { name: ["'94", "'94"], year: "1994" },
      { name: ["'95", "'95"], year: "1995" },
      { name: ["'96", "'96"], year: "1996" },
      { name: ["'97", "'97"], year: "1997" },
      { name: ["'98", "'98"], year: "1998" },
      { name: ["'99", "'99"], year: "1999" },
      { name: ["2000 以降", "2000 onward"], skip: true },
    ],
  },
  {
    label: ["サムライスピリッツ", "Samurai Shodown"],
    accent: "#a9631a",
    titles: [
      { name: ["真SAMURAI SPIRITS 覇王丸地獄変", "Samurai Shodown II"], year: "1994" },
      { name: ["サムライスピリッツ 斬紅郎無双剣", "Samurai Shodown III"], year: "1995" },
      {
        name: ["サムライスピリッツ 天草降臨", "Samurai Shodown IV: Amakusa's Revenge"],
        year: "1996",
      },
      { name: ["これ以降", "After this"], skip: true },
    ],
  },
  {
    label: ["餓狼伝説", "Fatal Fury"],
    accent: "#4b7a53",
    titles: [
      { name: ["餓狼伝説 宿命の闘い", "Fatal Fury: King of Fighters"], year: "1991" },
      { name: ["餓狼伝説2 新たなる闘い", "Fatal Fury 2"], year: "1992" },
      { name: ["餓狼伝説SPECIAL", "Fatal Fury Special"], year: "1993" },
      { name: ["餓狼伝説3 遥かなる闘い", "Fatal Fury 3"], year: "1995" },
      { name: ["REAL BOUT 餓狼伝説", "Real Bout Fatal Fury"], year: "1995" },
      { name: ["REAL BOUT 餓狼伝説SPECIAL", "Real Bout Fatal Fury Special"], year: "1997" },
      {
        name: ["リアルバウト餓狼伝説2 ～THE NEWCOMERS～", "Real Bout Fatal Fury 2: The Newcomers"],
        year: "1998",
      },
      { name: ["餓狼 -MARK OF THE WOLVES-", "Garou: Mark of the Wolves"], year: "1999" },
      {
        name: ["餓狼伝説 City of the Wolves", "Fatal Fury: City of the Wolves"],
        year: "2025",
        skip: true,
      },
    ],
  },
  {
    label: ["月華の剣士(幕末浪漫)", "The Last Blade"],
    accent: "#a01c56",
    titles: [
      { name: ["幕末浪漫 月華の剣士", "The Last Blade"], year: "1997" },
      {
        name: [
          "幕末浪漫第二幕 月華の剣士 ～月に咲く華、散りゆく花～",
          "The Last Blade 2",
        ],
        year: "1998",
      },
    ],
  },
];

const TEXT = {
  head: ["触った対戦格闘、省略なし", "Every fighting game I played"],
  count: [
    (n) => `${n} タイトル ／ 8 シリーズ`,
    (n) => `${n} titles / 8 series`,
  ],
  skip: ["未プレイ", "didn't play"],
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

export function FightingGameCatalog({ lang = "ja" }) {
  const L = lang === "en" ? 1 : 0;
  const total = CATALOG.reduce(
    (n, s) => n + s.titles.filter((t) => !t.skip).length,
    0
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="fgc-root">
        <style>{CSS}</style>

        <div className="fgc-head">
          <span className="fgc-head-title">{TEXT.head[L]}</span>
          <span className="fgc-count">{TEXT.count[L](total)}</span>
        </div>

        <motion.div
          className="fgc-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {CATALOG.map((series) => (
            <motion.section
              key={series.label[0]}
              className="fgc-card"
              variants={cardVariants}
              style={{ "--accent": series.accent }}
            >
              <header className="fgc-card-head">
                <span className="fgc-bar" />
                <span className="fgc-card-label">{series.label[L]}</span>
              </header>

              <ul className="fgc-list">
                {series.titles.map((t, i) => (
                  <li
                    key={i}
                    className={`fgc-row${t.skip ? " fgc-row-skip" : ""}`}
                  >
                    <span className="fgc-year">
                      {t.skip ? "—" : t.year || ""}
                    </span>
                    <span className="fgc-name">{t.name[L]}</span>
                    {t.tag && <span className="fgc-tag">{t.tag[L]}</span>}
                    {t.skip && <span className="fgc-skip-tag">{TEXT.skip[L]}</span>}
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

export default FightingGameCatalog;

const CSS = String.raw`
.fgc-root{
  --ink:#242832; --sub:#6b7280; --line:rgba(148,163,184,0.28);
  margin:2rem 0 2.4rem;
  font-feature-settings:"palt";
}
.fgc-head{
  display:flex; align-items:baseline; justify-content:space-between;
  flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;
}
.fgc-head-title{ font-weight:700; font-size:1rem; color:var(--ink); letter-spacing:0.02em; }
.fgc-count{ font-size:0.74rem; color:var(--sub); }

.fgc-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(270px, 1fr));
  gap:0.85rem;
  align-items:start;
}
.fgc-card{
  border:1px solid var(--line);
  border-radius:16px;
  background:#fff;
  padding:0.9rem 1rem 1rem;
  box-shadow:0 14px 30px -20px rgba(40,50,70,0.4);
}
.fgc-card-head{
  display:flex; align-items:center; gap:0.55rem;
  margin-bottom:0.7rem;
}
.fgc-bar{
  width:4px; height:1.05rem; border-radius:2px;
  background:var(--accent); flex-shrink:0;
}
.fgc-card-label{
  font-weight:700; font-size:0.9rem; color:var(--ink); line-height:1.35;
}

.fgc-list{ list-style:none; margin:0; padding:0; }
.fgc-row{
  display:flex; align-items:baseline; gap:0.55rem;
  padding:0.32rem 0;
  border-top:1px dashed rgba(148,163,184,0.22);
  font-size:0.82rem;
}
.fgc-row:first-child{ border-top:none; }
.fgc-year{
  flex-shrink:0; width:2.9rem;
  font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size:0.72rem; color:var(--sub);
}
.fgc-name{ color:var(--ink); line-height:1.5; }
.fgc-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700; letter-spacing:0.03em;
  color:var(--accent);
  background:color-mix(in srgb, var(--accent) 12%, #fff);
  border:1px solid color-mix(in srgb, var(--accent) 30%, #fff);
  border-radius:999px; padding:0 7px;
  white-space:nowrap;
}
.fgc-row-skip{ opacity:0.45; }
.fgc-row-skip .fgc-name{ text-decoration:line-through; }
.fgc-skip-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700;
  color:#6b7280; background:#f1f5f9;
  border:1px solid rgba(148,163,184,0.4);
  border-radius:999px; padding:0 7px;
  white-space:nowrap;
}

@media (prefers-reduced-motion: reduce){
  .fgc-card{ transition:none!important; }
}
`;
