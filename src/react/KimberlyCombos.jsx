// src/react/KimberlyCombos.jsx
// Street Fighter 6 / キンバリー コンボノート(身内限定・非公開URL用ページ)
// 元データ・デザインは Google スプレッドシートから作成した単体HTML(kimberly-combined.html)を移植。
// 既存サイトへ影響しないよう、全スタイルは .kmbly-root 配下にスコープしている。
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const DATA = [
  {
    title: "インパクトガード（壁ドン）始動",
    items: ["インパクト＞壁＞2大P＞OD胴刎ね＞前JMP＞OD旋風＞SA2"],
  },
  {
    title: "無敵ブッパに対するおしおき",
    items: [
      "あとは、ジュリに画面端で強設置して、OD無敵食らった際のリーサル狙いで、",
      "後ろ受け身＞(爆発当たる)＞ラッシュ5大P＞OD胴刎ね＞OD荒鶴＞ラッシュ2大P胴刎ね＞236LP＞SA3",
      "でダメージ4873",
      "無敵技当てたのに死ぬジュリ",
    ],
  },
  {
    title: "４フレーム以上の確定反撃として",
    items: [
      "下弱P→下弱P→ラッシュ下弱P→下強P→強一文字→ジャンプ中P→空中竜巻",
      "立ち中Kキャンセルラッシュ下中P×2＞立ち中P・大Pキャンセル疾駆け",
      "設置 2大P中流転 ラッシュ2大P蹴り上げラッシュ2大P蹴り上げラッシュ立弱PTCだね",
      "SA3後→ラッシュ2大P蹴り上げ→2大POD蹴り上げ→2大POD蹴り上げ→２大Pインパクト 歩いて２個設置OD蹴り上げ OD空投げ 前強Kジャンプ中PSA1",
      "SA3後の削りコンボですが、 ラッシュ2大P蹴り上げの所が 5Fあるようで、コパンで割られます。雑魚でした。すいません。",
      "ちなみに一撃必殺ルートは 無敵技ガード後強Pはやかけ2大P大流転 低空OD竜巻弱流転 CA",
      "ゲージなら2大POD蹴り上げジャンプ中POD竜巻SA２",
      "インパクト→ODはねあげ→OD空投げ→前大K→ジャンプ中P→着地→SA2",
      "中大P→弱流転→爆弾→下大P→首狩り",
      "Dゲージ2.5減らせる。",
      "スタン→最速設置→2大P→中流転→爆発→疾駆けはねあげ→弱流転キャンセルSA3",
      "大K>中大>ラッシュ2中K>2大P>早駆け",
      "で相手のゲージ結構削れるので、無理やりゲージ削りたい時とかおすすめです",
    ],
  },
  {
    title: "F式",
    items: [
      "OD早駆け→Kで壁当て",
      "強設置→前ジャンプ強K→登り弱Kです！",
      "ODドロン空大K屈大P強一文字の方が減ります",
    ],
  },
  {
    title: "端",
    items: [
      "強Pパニカン▶ODドロン▶J強P▶2強P▶強一文字▶OD荒鵺▶OD胴撥ね▶弱1文字▶SA3で5555です",
    ],
  },
  {
    title: "ものにしたいコンボパーツ",
    items: [
      "キャンセルラッシュ2強P→はやがけ急停止→2中P→2中P→5中Pキャンセルラッシュのループです",
    ],
  },
  {
    title: "OD荒鵺爆弾連携",
    items: [
      "5大P→大一文字→ODコマ投げ→中爆弾→疾駆け急停止→肘落とし（表）",
      "5大P→大一文字→ODコマ投げ→中爆弾→疾駆け急停止→J中K（裏）",
      "5大P→大一文字→ODコマ投げ→大爆弾→3中K→3中K",
      "5大P→大一文字→ODコマ投げ→大爆弾→3中K→3中K→2大P→ODドロン→J小K→2中P→立中P→影掬い",
      "5大P→大一文字→ODコマ投げ→中爆弾→3中K→4大K",
    ],
  },
  {
    title: "爆弾２個連携",
    items: [
      "1.（端）虎連牙→OD疾駆け～鉾刃脚→胴刎ね→爆弾2個設置→2強P→インパクト→2強P→4強K→2弱P→キャンセルラッシュ2弱P→2強P→強一文字→OD荒鵺→胴刎ね→弱一文字→SA3にすれば7,999ダメージ",
      "2.（端）虎連牙→OD疾駆け～鉾刃脚→胴刎ね→爆弾2個設置→2強P→インパクト→ラッシュ5中K→5弱K→インパクト（壁ドン）2強P→胴刎ね→OD荒鵺→胴刎ね→弱一文字→SA3にすれば8,632ダメージ",
    ],
  },
  {
    title: "ヒャッハー",
    items: [
      "大設置→投げ→爆弾ヒット→2小P→インパクト→２大P→OD胴刎ね→ラッシュ2大P→胴刎ね→ラッシ2小P→OD胴刎ね→弱一文→SA3",
      "簡単スタンコンボ",
      "インパクト→爆弾2個設置→2大P→中一文字→爆弾ヒット→ラッシュ２大P→胴刎ね→登りOD荒鵺→胴刎ね→CA",
      "強Pパニカンから",
      "微歩き強K→中P→強P→中はやがけ（スラ）",
      "ステステ歩きで投げ重なるし　シミー可能",
      "強Pパニカンから　微歩き強K→中P→強P→中はやがけ押しっぱなし→K派生から　弱はやがけ急停止でプラスに2とれて投げも埋まる　　　ただシミー不可",
      "5大Pパニカン＞ODドロン＞J大P＞2大P＞OD急停止＞2中P＞5中P＞OD一文字＞低空空中OD旋風脚＞弱一文字＞SA3",
      "5大Pパニカン＞遅らせ5大K＞5大P＞OD急停止＞5中P＞OD一文字＞低空空中OD旋風脚＞弱一文字＞SA",
    ],
  },
  {
    title: "爆弾コンボ",
    items: [
      "OD設置＞2大Pキャンセル中一文字＞1発目爆弾ヒット＞2発目爆弾ヒット＞小胴刎ね＞ラッシュ2大PキャンセルOD胴刎ね＞",
      "ラッシュ2大Pキャンセルラッシュ2大P(BO)キャンセル小ドロン＞5中Pキャンセル小一文字キャンセルSA3",
    ],
  },
  {
    title: "スタンコンボ",
    items: [
      "スタン＞OD設置＞2大P＞中流転＞2中K（空振り）＞ 胴刎ね＞ここから残りDゲージで分岐",
      "Dゲージ",
      "・4本以上： 胴刎ね＞ラッシュ2大P＞胴刎ね＞ラッシュ2大P＞OD胴刎ね＞ラッシュ2大P＞Cラッシュ2大P＞ドロン5中P＞胴刎ね＞弱流転SA3",
      "・2本以上： ドロン2大P＞胴刎ね＞ラッシュ2大P＞OD胴刎ね＞ラッシュ2大P＞Cラッシュ2大P＞ドロン5中P＞胴刎ね＞弱流転SA3",
      "・1本以上： ドロン2大P＞ドロン2大P＞OD胴刎ね＞ラッシュ2大P＞Cラッシュ2大P＞ドロン5中P＞胴刎ね＞弱流転SA3",
      "・0本より： ドロン2大P＞胴刎ね＞ラッシュ2大P＞胴刎ね＞ラッシュ2小P＞Cラッシュ獄鎖拳＞弱流転SA3",
      "・BO： ドロン2大P＞ドロン2大P＞胴刎ね＞弱流転SA3",
    ],
  },
];

const TOTAL_ITEMS = DATA.reduce((sum, s) => sum + s.items.length, 0);

function highlight(text) {
  return text
    .replace(/(\d,\d{3}|\b\d{3,5}\b)(?=ダメージ)/g, '<mark class="kmbly-hit">$1</mark>')
    .replace(/\bOD\b/g, '<mark class="kmbly-od">OD</mark>')
    .replace(/\bSA\d?\b/g, (m) => `<mark class="kmbly-sa">${m}</mark>`)
    .replace(/\bCA\b/g, '<mark class="kmbly-sa">CA</mark>')
    .replace(/([大中小強弱]?)(P)(?![A-Za-z])/g, (m, pre, p) => `${pre}<mark class="kmbly-p">${p}</mark>`)
    .replace(/([大中小強弱]?)(K)(?![A-Za-z])/g, (m, pre, k) => `${pre}<mark class="kmbly-k">${k}</mark>`);
}

function isCombo(text) {
  return /[PK＞>→]/.test(text) && /[0-9OKPSA]/.test(text);
}

/** ===== Three.js 発光ワイヤーフレームグローブ ===== */
function Globe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    const parent = canvas.parentElement;

    function resize() {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const group = new THREE.Group();
    group.position.set(1.1, -0.1, 0);
    scene.add(group);

    const coreGeo = new THREE.IcosahedronGeometry(1.55, 2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x2a1550, transparent: true, opacity: 0.35 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const wireGeo = new THREE.SphereGeometry(1.6, 28, 20);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xa865ff, wireframe: true, transparent: true, opacity: 0.55 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    group.add(wire);

    const ringGeo = new THREE.TorusGeometry(2.05, 0.008, 8, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xff2f7e, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    group.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x1fe8c8, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.006, 8, 100), ringMat2);
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = 0.4;
    group.add(ring2);

    const starGeo = new THREE.BufferGeometry();
    const starCount = 240;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.55 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const markerGeo = new THREE.SphereGeometry(0.028, 8, 8);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xff2f7e });
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(markerGeo, markerMat);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.62;
      m.position.set(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
      group.add(m);
    }

    let t = 0;
    let raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      t += 0.0032;
      group.rotation.y = t;
      group.rotation.x = Math.sin(t * 0.5) * 0.08;
      ring1.rotation.z += 0.0015;
      ring2.rotation.z -= 0.0011;
      stars.rotation.y += 0.00025;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      starGeo.dispose();
      starMat.dispose();
      markerGeo.dispose();
      markerMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="kmbly-globe-canvas" />;
}

function Ticker() {
  const entries = [
    { text: "全48件収録" },
    { text: "パニカン始動が主力", cls: "kmbly-pk" },
    { text: "OD胴刎ね連携に注意", cls: "kmbly-odtx" },
    { text: "端コンボは5555ダメージ" },
    { text: "爆弾2個連携は最大8632ダメージ", cls: "kmbly-pk" },
    { text: "SA3締めが基本ルート" },
    { text: "Dゲージ管理でスタン後ダメージ変動", cls: "kmbly-odtx" },
  ];
  const loop = [...entries, ...entries];

  return (
    <div className="kmbly-ticker-wrap">
      <div className="kmbly-ticker">
        {loop.map((e, i) => (
          <React.Fragment key={i}>
            <span className="kmbly-dot">◆</span>
            <span className={e.cls}>{e.text}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Section({ section, index, filter, collapsed, onToggle, onItemClick, registerItemRef }) {
  const filteredItems = filter
    ? section.items.filter((i) => i.toLowerCase().includes(filter.toLowerCase()))
    : section.items;

  if (filter && filteredItems.length === 0) return null;

  return (
    <div className={"kmbly-section" + (collapsed ? " kmbly-collapsed" : "")}>
      <div className="kmbly-section-head" onClick={onToggle}>
        <span className="kmbly-num">{String(index + 1).padStart(2, "0")}</span>
        <h2>{section.title}</h2>
        <span className="kmbly-badge">{filteredItems.length}件</span>
        <span className="kmbly-chev">▼</span>
      </div>
      <div className="kmbly-items">
        {filteredItems.map((text, i) => {
          const combo = isCombo(text);
          const key = `${index}-${section.items.indexOf(text)}-${i}`;
          if (!combo) {
            return (
              <div key={key} className="kmbly-item kmbly-note">
                {text}
              </div>
            );
          }
          return (
            <div
              key={key}
              ref={(el) => registerItemRef(key, el)}
              className="kmbly-item kmbly-combo"
              onClick={(e) => onItemClick(e, text, key)}
              dangerouslySetInnerHTML={{ __html: highlight(text) }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function KimberlyCombos() {
  const rootRef = useRef(null);
  const itemRefs = useRef({});
  const rollBtnRef = useRef(null);

  const [filter, setFilter] = useState("");
  const [collapsedMap, setCollapsedMap] = useState({});
  const [toast, setToast] = useState({ show: false, msg: "" });
  const toastTimer = useRef(null);

  useEffect(() => {
    if (document.getElementById("kmbly-fonts")) return;
    const link = document.createElement("link");
    link.id = "kmbly-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bungee&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap";
    document.head.appendChild(link);
  }, []);

  const splats = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        size: 80 + Math.random() * 160,
        left: Math.random() * 100,
        top: Math.random() * 100,
        variant: i % 2,
      })),
    []
  );

  const totalShown = useMemo(() => {
    if (!filter.trim()) return TOTAL_ITEMS;
    return DATA.reduce(
      (sum, s) => sum + s.items.filter((i) => i.toLowerCase().includes(filter.toLowerCase())).length,
      0
    );
  }, [filter]);

  const isEmpty = filter.trim().length > 0 && totalShown === 0;

  function scrollToList() {
    document.getElementById("kmbly-combo-list")?.scrollIntoView({ behavior: "smooth" });
  }

  function showToast(msg) {
    clearTimeout(toastTimer.current);
    setToast({ show: true, msg });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 1600);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e) {}
      ta.remove();
    }
  }

  function burst(x, y) {
    const root = rootRef.current;
    if (!root) return;
    const cols = ["#1fe8c8", "#ff2f7e", "#ffd23f"];
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("div");
      p.className = "kmbly-burst-particle";
      p.style.left = x + "px";
      p.style.top = y + "px";
      p.style.background = cols[i % cols.length];
      root.appendChild(p);
      const angle = (Math.PI * 2 * i) / 14 + Math.random() * 0.5;
      const dist = 40 + Math.random() * 60;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      p.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 },
        ],
        { duration: 500 + Math.random() * 300, easing: "cubic-bezier(.2,.8,.2,1)" }
      ).onfinish = () => p.remove();
    }
  }

  function flashEl(el) {
    if (!el) return;
    el.classList.remove("kmbly-flash");
    void el.offsetWidth;
    el.classList.add("kmbly-flash");
  }

  function handleItemClick(e, text, key) {
    copyText(text.replace(/\s+/g, " ").trim());
    burst(e.clientX, e.clientY);
    flashEl(itemRefs.current[key]);
    showToast("タグをコピーしました 📋");
  }

  function handleRoll() {
    const keys = Object.keys(itemRefs.current).filter((k) => itemRefs.current[k]);
    if (keys.length === 0) return;

    const btn = rollBtnRef.current;
    if (btn) {
      btn.classList.add("kmbly-spinning");
      setTimeout(() => btn.classList.remove("kmbly-spinning"), 500);
    }

    const pickKey = keys[Math.floor(Math.random() * keys.length)];
    const sectionIndex = Number(pickKey.split("-")[0]);

    setCollapsedMap((prev) => ({ ...prev, [sectionIndex]: false }));

    setTimeout(() => {
      const el = itemRefs.current[pickKey];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => flashEl(el), 350);
      }
    }, 30);

    showToast("コンボを1個引きました 🎲");
  }

  return (
    <div className="kmbly-root" ref={rootRef}>
      <style>{CSS}</style>

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <radialGradient id="kmbly-g1">
            <stop offset="0%" stopColor="#ff2f7e" />
            <stop offset="100%" stopColor="#ff2f7e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="kmbly-g2">
            <stop offset="0%" stopColor="#1fe8c8" />
            <stop offset="100%" stopColor="#1fe8c8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {splats.map((s, i) => (
        <div
          key={i}
          className="kmbly-splat"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            background:
              s.variant === 0
                ? "radial-gradient(circle, rgba(255,47,126,0.25), transparent 70%)"
                : "radial-gradient(circle, rgba(31,232,200,0.22), transparent 70%)",
          }}
        />
      ))}

      <nav className="kmbly-nav">
        <div className="kmbly-logo">
          <span className="kmbly-dot" />
          KIMBERLY GUIDE
        </div>
        <div className="kmbly-navlinks">
          <span>MODE</span>
          <span>CHARACTER</span>
          <span onClick={scrollToList}>COMBO</span>
          <span>COLUMN</span>
        </div>
        <div className="kmbly-buy" onClick={scrollToList}>
          読む
        </div>
      </nav>

      <section className="kmbly-hero">
        <div className="kmbly-hero-bg" />
        <div className="kmbly-beam kmbly-b1" />
        <div className="kmbly-beam kmbly-b2" />
        <Globe />

        <div className="kmbly-hero-content">
          <div className="kmbly-eyebrow-bar" />
          <h1 className="kmbly-hero-title">
            COMBO
            <span className="kmbly-ghost">INDEX</span>
          </h1>
          <p className="kmbly-hero-sub">
            STREET FIGHTER 6 / KIMBERLY 攻略ノート
            <br />
            用語統一済み・検索対応・全{TOTAL_ITEMS}件収録
          </p>
          <div className="kmbly-stamp-block" />
        </div>

        <div className="kmbly-panels">
          <div className="kmbly-panel" onClick={scrollToList}>
            <div className="kmbly-panel-bg kmbly-p1" />
            <div className="kmbly-panel-inner">
              <div className="kmbly-panel-arrow">›</div>
              <div>
                <div className="kmbly-panel-label">FIGHTING TAGS</div>
                <div className="kmbly-panel-sub">コンボ一覧を見る</div>
              </div>
            </div>
          </div>
          <div
            className="kmbly-panel"
            onClick={() => {
              scrollToList();
              rootRef.current?.querySelector(".kmbly-search")?.focus();
            }}
          >
            <div className="kmbly-panel-bg kmbly-p2" />
            <div className="kmbly-panel-inner">
              <div className="kmbly-panel-arrow">›</div>
              <div>
                <div className="kmbly-panel-label">SEARCH INDEX</div>
                <div className="kmbly-panel-sub">タグで検索する</div>
              </div>
            </div>
          </div>
        </div>

        <div className="kmbly-scrolldown" onClick={scrollToList}>
          <div className="kmbly-line" />
          SCROLL
        </div>
      </section>

      <div id="kmbly-combo-list" />
      <Ticker />

      <header className="kmbly-header">
        <div className="kmbly-bg-tape" />
        <div className="kmbly-tagstamp">KMBRLY.EXE</div>
        <div className="kmbly-eyebrow">
          <span className="kmbly-eq">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          STREET FIGHTER 6 / NOTEBOOK
        </div>
        <h1>KIMBERLY</h1>
        <div className="kmbly-sub">
          COMBO TAGS &nbsp;—&nbsp; 用語統一済み(<b>P</b> / <b>K</b> / <b>OD</b> / <b>SA</b>)
        </div>
      </header>

      <div className="kmbly-toolbar">
        <div className="kmbly-tagbox">
          <input
            className="kmbly-search"
            type="text"
            placeholder="コンボを検索(例: SA3, パニカン, 端)"
            autoComplete="off"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="kmbly-legend">
          <span className="kmbly-lp">P = パンチ</span>
          <span className="kmbly-lk">K = キック</span>
          <span className="kmbly-lod">OD / SA = ゲージ技</span>
        </div>
      </div>

      <div className="kmbly-count">
        {filter.trim()
          ? `${totalShown}件ヒット / 全${TOTAL_ITEMS}件`
          : `全${TOTAL_ITEMS}件 / ${DATA.length}セクション`}
      </div>

      <main className="kmbly-main">
        {DATA.map((section, i) => (
          <Section
            key={i}
            section={section}
            index={i}
            filter={filter}
            collapsed={!!collapsedMap[i]}
            onToggle={() => setCollapsedMap((prev) => ({ ...prev, [i]: !prev[i] }))}
            onItemClick={handleItemClick}
            registerItemRef={(key, el) => {
              itemRefs.current[key] = el;
            }}
          />
        ))}
      </main>

      {isEmpty && <div className="kmbly-empty">該当するコンボが見つかりません</div>}

      <footer className="kmbly-footer">
        KIMBERLY COMBO NOTES — 自動整形 / 元データ: Googleスプレッドシート
      </footer>

      <div className={"kmbly-toast" + (toast.show ? " kmbly-show" : "")}>{toast.msg}</div>
      <button ref={rollBtnRef} className="kmbly-roll-btn" onClick={handleRoll}>
        <span className="kmbly-dice">🎲</span>ランダム
      </button>
    </div>
  );
}

const CSS = `
.kmbly-root{
  --kmbly-ink:#0a0c0d;
  --kmbly-wall:#131617;
  --kmbly-card:#181c1d;
  --kmbly-teal:#1fe8c8;
  --kmbly-teal-dim:#12897a;
  --kmbly-pink:#ff2f7e;
  --kmbly-pink-dim:#a31c53;
  --kmbly-yellow:#ffd23f;
  --kmbly-concrete:#7d8388;
  --kmbly-paper:#f2ede1;
  --kmbly-hero-ink:#08060c;
  --kmbly-hero-violet:#7b2ff7;
  --kmbly-hero-violet-glow:#a865ff;
  --kmbly-hero-concrete:#8e88a0;

  position:relative;
  margin:32px 0;
  padding:0;
  background:var(--kmbly-ink);
  color:var(--kmbly-paper);
  font-family:'Noto Sans JP',sans-serif;
  overflow:hidden;
  border-radius:8px;
  isolation:isolate;
}

.kmbly-root ::selection{background:var(--kmbly-pink);color:var(--kmbly-ink);}

.kmbly-root{
  background-image:
    radial-gradient(circle at 8% 5%, rgba(31,232,200,0.10), transparent 38%),
    radial-gradient(circle at 92% 90%, rgba(255,47,126,0.12), transparent 42%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 3px);
}

.kmbly-root::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:1;
  opacity:0.5;
  mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
}

.kmbly-splat{
  position:absolute;
  border-radius:50%;
  filter:blur(1px);
  pointer-events:none;
  opacity:0.5;
  z-index:0;
}

/* ===== ナビ ===== */
.kmbly-nav{
  position:relative;
  z-index:10;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 24px;
  background:linear-gradient(180deg, rgba(21,11,40,0.95), rgba(21,11,40,0.75));
  border-bottom:1px solid rgba(168,101,255,0.25);
}
.kmbly-logo{
  font-family:'Bungee',sans-serif;
  font-size:16px;
  letter-spacing:0.04em;
  color:var(--kmbly-paper);
  display:flex;
  align-items:center;
  gap:8px;
}
.kmbly-logo .kmbly-dot{width:8px;height:8px;background:var(--kmbly-pink);border-radius:50%;box-shadow:0 0 10px var(--kmbly-pink);}
.kmbly-navlinks{
  display:flex;
  gap:24px;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  letter-spacing:0.08em;
  color:#b9b2cc;
}
.kmbly-navlinks span{cursor:pointer;transition:color .15s ease;}
.kmbly-navlinks span:hover{color:var(--kmbly-hero-violet-glow);}
.kmbly-buy{
  background:linear-gradient(90deg, var(--kmbly-hero-violet), var(--kmbly-pink));
  color:#fff;
  font-family:'Bungee',sans-serif;
  font-size:12px;
  padding:9px 18px;
  border-radius:3px;
  letter-spacing:0.05em;
  cursor:pointer;
}
@media (max-width:800px){ .kmbly-navlinks{display:none;} }

/* ===== ヒーロー ===== */
.kmbly-hero{
  position:relative;
  min-height:78vh;
  display:flex;
  align-items:center;
  overflow:hidden;
}
.kmbly-hero-bg{
  position:absolute;
  inset:0;
  background:
    radial-gradient(ellipse 60% 50% at 65% 45%, rgba(123,47,247,0.35), transparent 60%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,47,126,0.15), transparent 60%),
    linear-gradient(180deg, #0c0716, #08060c 70%);
}
.kmbly-beam{
  position:absolute;
  height:6px;
  border-radius:99px;
  background:linear-gradient(90deg, transparent, rgba(168,101,255,0.9), transparent);
  filter:blur(2px);
  opacity:0.8;
}
.kmbly-beam.kmbly-b1{width:280px;top:22%;left:8%;transform:rotate(2deg);}
.kmbly-beam.kmbly-b2{width:220px;top:32%;right:6%;transform:rotate(-2deg);}

.kmbly-globe-canvas{
  position:absolute;
  top:0;left:0;
  width:100%;
  height:100%;
  z-index:1;
  display:block;
}

.kmbly-hero-content{
  position:relative;
  z-index:3;
  padding:0 5vw;
  max-width:560px;
}
.kmbly-eyebrow-bar{
  width:60px;
  height:6px;
  background:var(--kmbly-hero-violet-glow);
  box-shadow:0 0 14px var(--kmbly-hero-violet-glow);
  margin-bottom:20px;
}
.kmbly-hero-title{
  font-family:'Bungee',sans-serif;
  font-size:clamp(36px, 6vw, 72px);
  line-height:0.94;
  color:#fff;
  letter-spacing:0.01em;
}
.kmbly-hero-title .kmbly-ghost{
  display:block;
  color:transparent;
  -webkit-text-stroke:1.5px rgba(242,237,225,0.28);
  font-size:0.62em;
  margin-top:4px;
}
.kmbly-hero-sub{
  margin-top:18px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;
  color:var(--kmbly-hero-concrete);
  letter-spacing:0.03em;
  line-height:1.7;
}
.kmbly-stamp-block{
  margin-top:30px;
  display:inline-block;
  background:var(--kmbly-hero-violet-glow);
  width:56px;height:38px;
  border-radius:2px;
  box-shadow:0 0 24px rgba(168,101,255,0.6);
}

.kmbly-panels{
  position:absolute;
  right:0;
  top:24%;
  z-index:4;
  display:flex;
  flex-direction:column;
  gap:6px;
}
.kmbly-panel{
  position:relative;
  width:min(42vw, 520px);
  height:104px;
  display:flex;
  align-items:center;
  overflow:hidden;
  border-left:4px solid var(--kmbly-hero-violet-glow);
  cursor:pointer;
  transition:transform .25s ease, border-color .2s ease;
}
.kmbly-panel:hover{transform:translateX(-10px);border-color:var(--kmbly-pink);}
.kmbly-panel-bg{
  position:absolute;
  inset:0;
  background-size:cover;
  background-position:center;
  filter:brightness(0.55) saturate(1.2);
  transition:filter .25s ease;
}
.kmbly-panel:hover .kmbly-panel-bg{filter:brightness(0.75) saturate(1.3);}
.kmbly-panel-bg.kmbly-p1{background:linear-gradient(135deg, #2a1550, #ff2f7e 130%);}
.kmbly-panel-bg.kmbly-p2{background:linear-gradient(135deg, #0c2b2a, #1fe8c8 140%);}
.kmbly-panel-inner{
  position:relative;
  z-index:2;
  display:flex;
  align-items:center;
  gap:14px;
  padding-left:22px;
}
.kmbly-panel-arrow{
  width:30px;height:30px;
  background:rgba(255,255,255,0.92);
  color:var(--kmbly-hero-ink);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  flex-shrink:0;
}
.kmbly-panel-label{
  font-family:'Bungee',sans-serif;
  font-size:19px;
  color:#fff;
  letter-spacing:0.02em;
  text-shadow:0 2px 12px rgba(0,0,0,0.6);
}
.kmbly-panel-sub{
  font-family:'JetBrains Mono',monospace;
  font-size:10px;
  color:rgba(255,255,255,0.75);
  margin-top:2px;
}
@media (max-width:900px){
  .kmbly-panels{position:relative;top:0;margin-top:32px;padding:0 5vw 40px;}
  .kmbly-panel{width:100%;}
  .kmbly-hero{flex-direction:column;padding-top:32px;min-height:auto;}
}

.kmbly-scrolldown{
  position:absolute;
  bottom:20px;
  left:5vw;
  z-index:4;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--kmbly-hero-concrete);
  letter-spacing:0.15em;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
}
.kmbly-scrolldown .kmbly-line{width:36px;height:1px;background:var(--kmbly-hero-concrete);position:relative;overflow:hidden;}
.kmbly-scrolldown .kmbly-line::after{
  content:"";
  position:absolute;
  left:-100%;top:0;bottom:0;width:100%;
  background:var(--kmbly-hero-violet-glow);
  animation:kmbly-slide 2.4s linear infinite;
}
@keyframes kmbly-slide{to{left:100%;}}

/* ===== 電光掲示板ティッカー ===== */
.kmbly-ticker-wrap{
  position:relative;
  z-index:3;
  overflow:hidden;
  background:var(--kmbly-ink);
  border-bottom:2px solid var(--kmbly-pink);
  box-shadow:0 2px 20px rgba(255,47,126,0.25);
  white-space:nowrap;
}
.kmbly-ticker-wrap::before,
.kmbly-ticker-wrap::after{
  content:"";
  position:absolute;
  top:0;bottom:0;
  width:50px;
  z-index:2;
  pointer-events:none;
}
.kmbly-ticker-wrap::before{left:0;background:linear-gradient(90deg, var(--kmbly-ink), transparent);}
.kmbly-ticker-wrap::after{right:0;background:linear-gradient(-90deg, var(--kmbly-ink), transparent);}
.kmbly-ticker{
  display:inline-block;
  padding-left:100%;
  animation:kmbly-ticker-scroll 26s linear infinite;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  font-weight:700;
  letter-spacing:0.08em;
  color:var(--kmbly-teal);
  padding-top:9px;
  padding-bottom:9px;
}
.kmbly-ticker span{margin:0 24px;text-shadow:0 0 10px rgba(31,232,200,0.5);}
.kmbly-ticker span.kmbly-pk{color:var(--kmbly-pink);text-shadow:0 0 10px rgba(255,47,126,0.5);}
.kmbly-ticker span.kmbly-odtx{color:var(--kmbly-yellow);text-shadow:0 0 10px rgba(255,210,63,0.5);}
.kmbly-ticker span.kmbly-dot{color:#3f4345;margin:0 8px;}
@keyframes kmbly-ticker-scroll{from{transform:translateX(0);}to{transform:translateX(-100%);}}

/* ===== ヘッダー(既存ノート部) ===== */
.kmbly-header{
  position:relative;
  padding:48px 24px 40px;
  text-align:center;
  overflow:hidden;
  border-bottom:3px solid var(--kmbly-teal);
  box-shadow:0 2px 30px rgba(31,232,200,0.15);
  z-index:2;
}
.kmbly-bg-tape{
  position:absolute;
  inset:0;
  background:
    repeating-linear-gradient(135deg, transparent 0 26px, rgba(255,210,63,0.05) 26px 28px),
    linear-gradient(115deg, transparent 42%, rgba(255,47,126,0.07) 42%, rgba(255,47,126,0.07) 44%, transparent 44%),
    linear-gradient(115deg, transparent 58%, rgba(31,232,200,0.09) 58%, rgba(31,232,200,0.09) 61%, transparent 61%);
  pointer-events:none;
}
.kmbly-eyebrow{
  position:relative;
  font-family:'JetBrains Mono',monospace;
  letter-spacing:0.4em;
  font-size:11px;
  color:var(--kmbly-concrete);
  text-transform:uppercase;
  margin-bottom:16px;
  display:inline-flex;
  align-items:center;
  gap:10px;
}
.kmbly-eq{display:inline-flex;align-items:flex-end;gap:2px;height:12px;}
.kmbly-eq span{width:3px;background:var(--kmbly-pink);display:block;animation:kmbly-eqbar 1.1s ease-in-out infinite;}
.kmbly-eq span:nth-child(1){height:40%;animation-delay:-0.9s;}
.kmbly-eq span:nth-child(2){height:100%;animation-delay:-0.6s;}
.kmbly-eq span:nth-child(3){height:65%;animation-delay:-0.3s;}
.kmbly-eq span:nth-child(4){height:85%;animation-delay:-1.05s;}
.kmbly-eq span:nth-child(5){height:50%;animation-delay:-0.15s;}
@keyframes kmbly-eqbar{0%,100%{transform:scaleY(0.35);}50%{transform:scaleY(1);}}

.kmbly-root h1{
  position:relative;
  font-family:'Bungee',sans-serif;
  font-weight:400;
  font-size:clamp(38px, 9vw, 78px);
  margin:0;
  line-height:0.92;
  letter-spacing:0.01em;
  color:var(--kmbly-paper);
  text-shadow:3px 3px 0 var(--kmbly-pink), 6px 6px 0 var(--kmbly-teal-dim), 0 0 40px rgba(31,232,200,0.25);
  transform:rotate(-1.4deg);
  display:inline-block;
  animation:kmbly-flicker 6s ease-in-out infinite;
}
@keyframes kmbly-flicker{
  0%,92%,100%{text-shadow:3px 3px 0 var(--kmbly-pink),6px 6px 0 var(--kmbly-teal-dim),0 0 40px rgba(31,232,200,0.25);}
  93%{text-shadow:3px 3px 0 var(--kmbly-pink),6px 6px 0 var(--kmbly-teal-dim),0 0 6px rgba(31,232,200,0.05);}
  94%{text-shadow:3px 3px 0 var(--kmbly-pink),6px 6px 0 var(--kmbly-teal-dim),0 0 40px rgba(31,232,200,0.25);}
}
.kmbly-sub{
  position:relative;
  margin-top:20px;
  font-family:'JetBrains Mono',monospace;
  color:var(--kmbly-teal);
  font-size:14px;
  letter-spacing:0.05em;
}
.kmbly-sub b{color:var(--kmbly-yellow);}
.kmbly-tagstamp{
  position:absolute;
  top:18px;
  right:6%;
  font-family:'Bungee',sans-serif;
  font-size:12px;
  color:var(--kmbly-ink);
  background:var(--kmbly-yellow);
  padding:6px 12px;
  transform:rotate(8deg);
  border-radius:2px;
  box-shadow:3px 3px 0 rgba(0,0,0,0.4);
  letter-spacing:0.05em;
}

.kmbly-toolbar{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:28px auto 0;
  padding:0 20px;
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  align-items:center;
}
.kmbly-tagbox{flex:1;min-width:220px;position:relative;}
.kmbly-tagbox::before{
  content:"TAG:";
  position:absolute;
  left:16px;top:50%;
  transform:translateY(-50%);
  font-family:'JetBrains Mono',monospace;
  color:var(--kmbly-pink);
  font-weight:700;
  font-size:13px;
  pointer-events:none;
}
.kmbly-search{
  width:100%;
  padding:15px 16px 15px 66px;
  background:var(--kmbly-wall);
  border:2px solid #262b2c;
  border-radius:3px;
  color:var(--kmbly-paper);
  font-family:'JetBrains Mono',monospace;
  font-size:15px;
  outline:none;
  transition:border-color .15s ease, box-shadow .15s ease;
  box-sizing:border-box;
}
.kmbly-search:focus{border-color:var(--kmbly-teal);box-shadow:0 0 0 3px rgba(31,232,200,0.15);}
.kmbly-search::placeholder{color:#565b5e;}
.kmbly-legend{display:flex;gap:10px;flex-wrap:wrap;font-family:'JetBrains Mono',monospace;font-size:12px;}
.kmbly-legend span{padding:7px 11px;border-radius:2px;border:1px solid #262b2c;color:var(--kmbly-concrete);transition:transform .12s ease;}
.kmbly-legend span:hover{transform:translateY(-2px);}
.kmbly-lp{color:var(--kmbly-teal);border-color:var(--kmbly-teal-dim);}
.kmbly-lk{color:var(--kmbly-pink);border-color:var(--kmbly-pink-dim);}
.kmbly-lod{color:var(--kmbly-yellow);border-color:#8a7016;}

.kmbly-count{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:16px auto 0;
  padding:0 24px;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  color:#565b5e;
}

.kmbly-main{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:30px auto 60px;
  padding:0 20px;
  display:flex;
  flex-direction:column;
  gap:20px;
}

.kmbly-section{
  background:var(--kmbly-card);
  border:1px solid #24282a;
  border-radius:4px;
  overflow:hidden;
  position:relative;
  transition:border-color .15s ease;
}
.kmbly-section:hover{border-color:#33393b;}
.kmbly-section::before{
  content:"";
  position:absolute;
  left:0;top:0;bottom:0;
  width:3px;
  background:linear-gradient(180deg, var(--kmbly-teal), var(--kmbly-pink));
  opacity:0.7;
}
.kmbly-section-head{
  display:flex;
  align-items:center;
  gap:12px;
  padding:17px 20px 17px 24px;
  cursor:pointer;
  user-select:none;
  background:linear-gradient(90deg, rgba(31,232,200,0.05), transparent 75%);
}
.kmbly-section-head:hover{background:linear-gradient(90deg, rgba(31,232,200,0.11), transparent 75%);}
.kmbly-num{
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  color:var(--kmbly-ink);
  background:var(--kmbly-yellow);
  padding:3px 9px;
  border-radius:2px;
  font-weight:700;
  flex-shrink:0;
  transform:rotate(-2deg);
  box-shadow:2px 2px 0 rgba(0,0,0,0.35);
}
.kmbly-section-head h2{
  flex:1;
  margin:0;
  font-family:'Bungee',sans-serif;
  font-weight:400;
  font-size:17px;
  letter-spacing:0.01em;
  color:var(--kmbly-paper);
}
.kmbly-badge{
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--kmbly-concrete);
  border:1px solid #2a2e30;
  padding:2px 9px;
  border-radius:99px;
  flex-shrink:0;
}
.kmbly-chev{color:var(--kmbly-teal);font-family:'JetBrains Mono',monospace;transition:transform .18s ease;flex-shrink:0;}
.kmbly-section.kmbly-collapsed .kmbly-chev{transform:rotate(-90deg);}
.kmbly-items{
  padding:6px 20px 20px 24px;
  display:flex;
  flex-direction:column;
  gap:10px;
  animation:kmbly-reveal .18s ease;
}
@keyframes kmbly-reveal{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}
.kmbly-section.kmbly-collapsed .kmbly-items{display:none;}

.kmbly-item{
  font-family:'JetBrains Mono',monospace;
  font-size:14.5px;
  line-height:1.7;
  color:#d7d3c9;
  background:var(--kmbly-wall);
  border-left:3px solid #2a2e30;
  padding:12px 14px;
  border-radius:0 3px 3px 0;
  word-break:break-word;
  transition:border-color .15s ease, background .15s ease;
}
.kmbly-item.kmbly-combo{border-left-color:var(--kmbly-teal-dim);cursor:pointer;position:relative;}
.kmbly-item.kmbly-combo:hover{border-left-color:var(--kmbly-teal);background:#1a1f20;}
.kmbly-item.kmbly-combo:active{transform:scale(0.99);}
.kmbly-item.kmbly-combo.kmbly-flash{animation:kmbly-flash-hit .6s ease;}
@keyframes kmbly-flash-hit{
  0%{box-shadow:0 0 0 0 rgba(255,210,63,0.6);}
  40%{box-shadow:0 0 0 8px rgba(255,210,63,0);}
  100%{box-shadow:0 0 0 0 rgba(255,210,63,0);}
}
.kmbly-item.kmbly-note{
  color:var(--kmbly-concrete);
  font-family:'Noto Sans JP',sans-serif;
  border-left-color:var(--kmbly-pink-dim);
  font-size:13.5px;
  cursor:default;
}

.kmbly-toast{
  position:fixed;
  bottom:26px;
  left:50%;
  transform:translateX(-50%) translateY(20px);
  background:var(--kmbly-yellow);
  color:var(--kmbly-ink);
  font-family:'JetBrains Mono',monospace;
  font-weight:700;
  font-size:13px;
  padding:11px 20px;
  border-radius:3px;
  box-shadow:0 6px 24px rgba(0,0,0,0.5);
  opacity:0;
  pointer-events:none;
  transition:opacity .18s ease, transform .18s ease;
  z-index:50;
  letter-spacing:0.03em;
}
.kmbly-toast.kmbly-show{opacity:1;transform:translateX(-50%) translateY(0);}

.kmbly-roll-btn{
  position:fixed;
  right:22px;
  bottom:26px;
  z-index:40;
  background:var(--kmbly-pink);
  color:var(--kmbly-ink);
  border:none;
  font-family:'Bungee',sans-serif;
  font-size:13px;
  padding:14px 18px;
  border-radius:99px;
  cursor:pointer;
  box-shadow:0 6px 20px rgba(255,47,126,0.4);
  display:flex;
  align-items:center;
  gap:8px;
  transition:transform .15s ease, box-shadow .15s ease;
}
.kmbly-roll-btn:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(255,47,126,0.55);}
.kmbly-roll-btn:active{transform:translateY(0) scale(0.96);}
.kmbly-roll-btn .kmbly-dice{display:inline-block;transition:transform .5s ease;}
.kmbly-roll-btn.kmbly-spinning .kmbly-dice{transform:rotate(360deg);}

.kmbly-burst-particle{
  position:fixed;
  width:6px;
  height:6px;
  border-radius:50%;
  pointer-events:none;
  z-index:60;
}

.kmbly-root mark.kmbly-p{color:var(--kmbly-teal);background:none;font-weight:700;text-shadow:0 0 12px rgba(31,232,200,0.35);}
.kmbly-root mark.kmbly-k{color:var(--kmbly-pink);background:none;font-weight:700;text-shadow:0 0 12px rgba(255,47,126,0.35);}
.kmbly-root mark.kmbly-od{color:var(--kmbly-yellow);background:none;font-weight:700;text-shadow:0 0 12px rgba(255,210,63,0.3);}
.kmbly-root mark.kmbly-sa{color:var(--kmbly-yellow);background:none;font-weight:700;text-decoration:underline;text-decoration-style:dotted;text-shadow:0 0 12px rgba(255,210,63,0.3);}
.kmbly-root mark.kmbly-hit{background:rgba(255,210,63,0.35);color:var(--kmbly-ink);border-radius:2px;padding:0 3px;font-weight:700;}

.kmbly-empty{
  text-align:center;
  color:#565b5e;
  font-family:'JetBrains Mono',monospace;
  padding:60px 20px;
  position:relative;
  z-index:2;
}

.kmbly-footer{
  position:relative;
  z-index:2;
  text-align:center;
  padding:30px 20px 44px;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:#3f4345;
  letter-spacing:0.08em;
}

@media (prefers-reduced-motion: reduce){
  .kmbly-root *{animation:none !important;transition:none !important;}
}

@media (max-width:520px){
  .kmbly-tagstamp{display:none;}
}
`;
