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
      { name: ["ZERO3 アッパー", "Zero3 Upper"], year: "2001", skip: true },
      {
        name: ["ZERO3 ダブルアッパー", "Zero3 Double Upper"],
        year: "2006",
        skip: true,
      },
      { name: ["X 鉄拳", "X Tekken"], year: "2012", skip: true },
      {
        name: [
          "リアルバトル オン フィルム(未プレイ、クソゲーの噂だけ知ってる)",
          "Real Battle on Film (never played, only heard it's bad)",
        ],
        year: "1995",
        skip: true,
      },
    ],
  },
  {
    label: ["ストリートファイターEX(アリカ)", "Street Fighter EX (Arika)"],
    accent: "#2e8f6f",
    titles: [
      {
        name: ["EX", "EX"],
        year: "1996",
        tag: ["ゲーセンにもあった", "also in arcades"],
      },
      {
        name: ["EX2", "EX2"],
        year: "1998",
        tag: ["シャロン", "Sharon"],
      },
      {
        name: ["EX PLUS α(家庭用)", "EX Plus α (home)"],
        year: "1997",
      },
      { name: ["EX3", "EX3"], year: "2000", skip: true },
    ],
  },
  {
    label: ["ギルティギア", "Guilty Gear"],
    accent: "#8e2a44",
    titles: [
      {
        name: ["無印(ドリームキャスト)", "Guilty Gear (Dreamcast)"],
        year: "1998",
      },
      { name: ["X", "X"], year: "2000", skip: true },
      { name: ["X2(XX)", "X2 (XX)"], year: "2002", skip: true },
      { name: ["イスカ", "Isuka"], year: "2003", skip: true },
      { name: ["2 オーバチュア", "2: Overture"], year: "2007", skip: true },
      { name: ["Xrd -SIGN-", "Xrd -SIGN-"], year: "2014", skip: true },
      { name: ["Xrd -REVELATOR-", "Xrd -REVELATOR-"], year: "2016", skip: true },
      { name: ["Xrd REV2", "Xrd REV2"], year: "2017", skip: true },
      { name: ["ストライヴ", "Strive"], year: "2021", skip: true },
    ],
  },
  {
    label: ["龍虎の拳", "Art of Fighting"],
    accent: "#b8452c",
    titles: [
      { name: ["龍虎の拳", "Art of Fighting"], year: "1992" },
      {
        name: ["龍虎の拳2", "Art of Fighting 2"],
        year: "1994",
        tag: ["ユリ", "Yuri"],
      },
      {
        name: ["龍虎の拳外伝(3)", "Art of Fighting 3"],
        year: "1996",
        skip: true,
      },
    ],
  },
  {
    label: ["ポケットファイター", "Pocket Fighter"],
    accent: "#d68a2e",
    titles: [{ name: ["ポケットファイター", "Pocket Fighter"], year: "1997" }],
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
      { name: ["ヴァンパイア ハンター2", "Darkstalkers' Revenge 2"], year: "1997", skip: true },
      { name: ["ヴァンパイア セイヴァー2", "Vampire Savior 2"], year: "1997", skip: true },
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
      {
        name: ["2000", "2000"],
        year: "2000",
        tag: ["エミュで少しだけ", "a little, via emulator"],
      },
      { name: ["XV", "XV"], year: "2022", tag: ["少しだけ", "a little"] },
      { name: ["2001", "2001"], year: "2001", skip: true },
      { name: ["2002", "2002"], year: "2002", skip: true },
      { name: ["2003", "2003"], year: "2003", skip: true },
      { name: ["XI", "XI"], year: "2005", skip: true },
      { name: ["XII", "XII"], year: "2009", skip: true },
      { name: ["XIII", "XIII"], year: "2010", skip: true },
      { name: ["XIV", "XIV"], year: "2016", skip: true },
    ],
  },
  {
    label: ["サムライスピリッツ", "Samurai Shodown"],
    accent: "#a9631a",
    titles: [
      { name: ["SAMURAI SPIRITS(初代)", "Samurai Shodown"], year: "1993" },
      { name: ["真SAMURAI SPIRITS 覇王丸地獄変", "Samurai Shodown II"], year: "1994" },
      { name: ["サムライスピリッツ 斬紅郎無双剣", "Samurai Shodown III"], year: "1995" },
      {
        name: ["サムライスピリッツ 天草降臨", "Samurai Shodown IV: Amakusa's Revenge"],
        year: "1996",
      },
      {
        name: ["SAMURAI SPIRITS 〜侍魂〜", "Samurai Shodown V"],
        year: "1997",
        skip: true,
      },
      {
        name: ["SAMURAI SPIRITS 2 〜アスラ斬魔伝〜", "Samurai Shodown 2: Asura Zanmaden"],
        year: "1998",
        skip: true,
      },
      {
        name: [
          "剣客異聞録 甦りし蒼紅の刃 サムライスピリッツ新章",
          "Samurai Shodown: Warrior's Rage",
        ],
        year: "1999",
        skip: true,
      },
      { name: ["サムライスピリッツ零", "Samurai Shodown VI"], year: "2003", skip: true },
      {
        name: ["サムライスピリッツ零SPECIAL", "Samurai Shodown VI Special"],
        year: "2004",
        skip: true,
      },
      {
        name: ["サムライスピリッツ 天下一剣客伝", "Samurai Shodown Tenkaichi Kenkakuden"],
        year: "2005",
        skip: true,
      },
      { name: ["サムライスピリッツ閃", "Samurai Shodown Sen"], year: "2008", skip: true },
      { name: ["SAMURAI SPIRITS(2019)", "Samurai Shodown (2019)"], year: "2019", skip: true },
      {
        name: ["サムライスピリッツ零SPECIAL完全版", "Samurai Shodown VI Special Complete Edition"],
        year: "2022",
        skip: true,
      },
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
  {
    label: ["鉄拳", "Tekken"],
    accent: "#b8901f",
    titles: [
      { name: ["2", "2"], year: "1995", tag: ["家庭用でかなり", "a lot, on console"] },
      { name: ["3", "3"], year: "1997", tag: ["家庭用でかなり", "a lot, on console"] },
      {
        name: ["タッグトーナメント2", "Tag Tournament 2"],
        year: "2011",
        tag: ["少しだけ", "a little"],
      },
      {
        name: ["8", "8"],
        year: "2024",
        tag: ["ファランで少しだけ", "a little, as Fahkumram"],
      },
      { name: ["鉄拳(初代)", "Tekken"], year: "1994", skip: true },
      { name: ["タッグトーナメント", "Tag Tournament"], year: "1999", skip: true },
      { name: ["4", "4"], year: "2001", skip: true },
      { name: ["5", "5"], year: "2004", skip: true },
      { name: ["5 DARK RESURRECTION", "5: Dark Resurrection"], year: "2005", skip: true },
      { name: ["6", "6"], year: "2007", skip: true },
      { name: ["6 BLOODLINE REBELLION", "6: Bloodline Rebellion"], year: "2008", skip: true },
      { name: ["7", "7"], year: "2015", skip: true },
    ],
  },
];

const TEXT = {
  head: ["触った対戦格闘、省略なし", "Every fighting game I played"],
  count: [
    (n) => `${n} タイトル ／ 13 シリーズ`,
    (n) => `${n} titles / 13 series`,
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
                    <span className="fgc-year">{t.year || (t.skip ? "—" : "")}</span>
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
  display:flex; flex-wrap:wrap; align-items:baseline; gap:0.35rem 0.55rem;
  padding:0.36rem 0;
  border-top:1px dashed rgba(148,163,184,0.22);
  font-size:0.82rem;
}
.fgc-row:first-child{ border-top:none; }
.fgc-year{
  flex-shrink:0; width:2.9rem;
  font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size:0.72rem; color:var(--sub);
}
.fgc-name{ color:var(--ink); line-height:1.5; flex:1 1 60%; min-width:0; }
.fgc-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700; letter-spacing:0.03em;
  color:var(--accent);
  background:color-mix(in srgb, var(--accent) 12%, #fff);
  border:1px solid color-mix(in srgb, var(--accent) 30%, #fff);
  border-radius:999px; padding:0 7px;
  white-space:normal;
}
.fgc-row-skip{ opacity:0.45; }
.fgc-row-skip .fgc-name{ text-decoration:line-through; }
.fgc-skip-tag{
  flex-shrink:0; margin-left:auto;
  font-size:0.62rem; font-weight:700;
  color:#6b7280; background:#f1f5f9;
  border:1px solid rgba(148,163,184,0.4);
  border-radius:999px; padding:0 7px;
  white-space:normal;
}

@media (prefers-reduced-motion: reduce){
  .fgc-card{ transition:none!important; }
}
`;
