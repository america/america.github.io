import React, { useEffect, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import * as THREE from "three";

const stepsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const stepItemVariants = {
  hidden: { opacity: 0, x: -90 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 420, damping: 13, mass: 0.6 } },
};
const resultsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.45 } },
};
const resultItemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.75 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 450, damping: 13, mass: 0.5 } },
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
    title: "コンポジタ/fcitx5の設定を確認",
    verdict: "問題なし",
    tone: "clear",
    detail:
      "Swayのキーバインド競合、GTK_IM_MODULE等の環境変数、fcitx5の設定。いずれも問題なし。",
  },
  {
    step: 2,
    title: "Protonが意図的にXIMを無効化していると判明",
    verdict: "原因を特定",
    tone: "cause",
    detail:
      "古いlibX11のクラッシュ回避のため、公式Protonはビルド時にXIMサポートを無効化していた。",
  },
  {
    step: 3,
    title: "レジストリでUseXIMを再有効化",
    verdict: "効果なし",
    tone: "fail",
    detail: "UseXIM=yを書き込み、値の反映も確認できたが、挙動は変わらず。",
  },
  {
    step: 4,
    title: "WINEDEBUGでキー入力の経路を確認",
    verdict: "根本原因を確認",
    tone: "cause",
    detail:
      "xim系ログは沈黙、imm系だけが動作。Wine新IME実装がキー入力をXIMまで橋渡ししていなかった。",
  },
  {
    step: 5,
    title: "fcitx5-remoteで強制トグル",
    verdict: "効果なし",
    tone: "fail",
    detail:
      "fcitx5自体の状態はトグルできたが、Wineアプリの入力コンテキストには反映されず。",
  },
  {
    step: 6,
    title: "GE-Protonで再検証",
    verdict: "同一症状",
    tone: "fail",
    detail:
      "コミュニティ版に切り替えても症状は同一。特定ビルドのバグではないと確定。",
  },
];

const RESULTS = [
  { measure: "コンポジタのキーバインド", verdict: "問題なし", tone: "clear" },
  { measure: "fcitx5の設定", verdict: "問題なし", tone: "clear" },
  { measure: "レジストリで UseXIM=y", verdict: "効果なし", tone: "fail" },
  { measure: "fcitx5-remote で強制トグル", verdict: "効果なし", tone: "fail" },
  { measure: "GE-Protonへの切り替え", verdict: "効果なし", tone: "fail" },
  { measure: "クリップボード貼り付け", verdict: "動作する", tone: "solved" },
];

/**
 * ===== Three.js 信号経路ダイアグラム(ソフトトーン版) =====
 * キー入力が XIM 経路では途中で消え、imm 経路では
 * 最後まで届いても処理されずに終わる、という記事の核心を
 * 淡い色合いで静かに図解する。
 */
function SignalPath() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const VIEW_H = 6;
    let VIEW_W = 10;
    const camera = new THREE.OrthographicCamera(-VIEW_W / 2, VIEW_W / 2, VIEW_H / 2, -VIEW_H / 2, 0.1, 20);
    camera.position.set(0, 0, 10);

    const parent = wrapRef.current;

    function resize() {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h);
      VIEW_W = VIEW_H * (w / h);
      camera.left = -VIEW_W / 2;
      camera.right = VIEW_W / 2;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const ORIGIN_X = -6;
    const XIM_Y = 1.0;
    const IMM_Y = -1.0;
    const BARRIER_X = -0.4;
    const RIGHT_X = 8.5;

    function mkLine(y1, x2, y2, color, opacity, x1 = ORIGIN_X) {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y1, 0),
        new THREE.Vector3(x2, y2, 0),
      ]);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      return new THREE.Line(geo, mat);
    }

    scene.add(mkLine(XIM_Y, BARRIER_X, XIM_Y, 0x7cb9a3, 0.55));
    scene.add(mkLine(XIM_Y, RIGHT_X, XIM_Y, 0x7cb9a3, 0.12, BARRIER_X));
    scene.add(mkLine(IMM_Y, RIGHT_X, IMM_Y, 0xd8a94a, 0.45));

    const originGeo = new THREE.CircleGeometry(0.075, 24);
    const originMat = new THREE.MeshBasicMaterial({ color: 0x8a8578 });
    const origin = new THREE.Mesh(originGeo, originMat);
    origin.position.set(ORIGIN_X, 0, 0.2);
    scene.add(origin);

    const pulseGeo = new THREE.RingGeometry(0.08, 0.1, 28);
    const pulseMats = [0, 1].map(
      () => new THREE.MeshBasicMaterial({ color: 0x9aa79c, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    const pulses = pulseMats.map((m) => {
      const mesh = new THREE.Mesh(pulseGeo, m);
      mesh.position.set(ORIGIN_X, 0, 0.15);
      scene.add(mesh);
      return mesh;
    });

    const barrierGeo = new THREE.PlaneGeometry(0.05, 0.6);
    const barrierMat = new THREE.MeshBasicMaterial({ color: 0xd98f7f, transparent: true, opacity: 0.75 });
    const barrier = new THREE.Mesh(barrierGeo, barrierMat);
    barrier.position.set(BARRIER_X, XIM_Y, 0.1);
    scene.add(barrier);
    const barrierGlowGeo = new THREE.PlaneGeometry(0.22, 0.85);
    const barrierGlowMat = new THREE.MeshBasicMaterial({ color: 0xd98f7f, transparent: true, opacity: 0.12 });
    const barrierGlow = new THREE.Mesh(barrierGlowGeo, barrierGlowMat);
    barrierGlow.position.set(BARRIER_X, XIM_Y, 0.05);
    scene.add(barrierGlow);

    const endGeo = new THREE.RingGeometry(0.06, 0.09, 24);
    const endMat = new THREE.MeshBasicMaterial({ color: 0xd8a94a, transparent: true, opacity: 0.65, side: THREE.DoubleSide });
    const end = new THREE.Mesh(endGeo, endMat);
    end.position.set(RIGHT_X, IMM_Y, 0);
    scene.add(end);

    const dotGeo = new THREE.CircleGeometry(0.05, 16);
    const dotGlowGeo = new THREE.CircleGeometry(0.12, 16);

    function makeParticle(color) {
      const group = new THREE.Group();
      const glow = new THREE.Mesh(dotGlowGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22 }));
      const core = new THREE.Mesh(dotGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 }));
      group.add(glow, core);
      scene.add(group);
      return { group, glowMat: glow.material, coreMat: core.material };
    }

    const XIM_SPEED = 2.1;
    const IMM_SPEED = 1.7;

    const ximParticles = Array.from({ length: 3 }, () => ({
      p: makeParticle(0x7cb9a3),
      x: ORIGIN_X - Math.random() * 5,
      dead: 0,
    }));

    const immParticles = Array.from({ length: 3 }, () => ({
      p: makeParticle(0xd8a94a),
      x: ORIGIN_X - Math.random() * 5,
    }));

    let raf;
    let lastT = performance.now();
    let elapsed = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;
      elapsed += dt;

      for (const item of ximParticles) {
        if (item.dead > 0) {
          item.dead -= dt;
          const s = Math.max(item.dead / 0.5, 0);
          item.p.group.scale.setScalar(0.5 + s * 0.7);
          item.p.glowMat.opacity = 0.22 * s;
          item.p.coreMat.opacity = 0.9 * s;
          if (item.dead <= 0) {
            item.x = ORIGIN_X - Math.random() * 2;
            item.p.group.scale.setScalar(1);
            item.p.glowMat.opacity = 0.22;
            item.p.coreMat.opacity = 0.9;
          }
        } else {
          item.x += XIM_SPEED * dt;
          if (item.x >= BARRIER_X) {
            item.x = BARRIER_X;
            item.dead = 0.5;
          }
        }
        item.p.group.position.set(item.x, XIM_Y, 0.2);
      }

      for (const item of immParticles) {
        item.x += IMM_SPEED * dt;
        if (item.x > RIGHT_X) item.x = ORIGIN_X - Math.random() * 2;
        item.p.group.position.set(item.x, IMM_Y, 0.2);
      }

      barrierGlowMat.opacity = 0.1 + Math.sin(elapsed * 2) * 0.03;

      const PULSE_PERIOD = 1.7;
      pulses.forEach((mesh, i) => {
        const phase = ((elapsed + (i * PULSE_PERIOD) / pulses.length) % PULSE_PERIOD) / PULSE_PERIOD;
        const scale = 1 + phase * 9;
        mesh.scale.setScalar(scale);
        mesh.material.opacity = (1 - phase) * 0.35;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="sf6ime-signal" ref={wrapRef}>
      <canvas ref={canvasRef} className="sf6ime-signal-canvas" />
      <div className="sf6ime-signal-label sf6ime-signal-label-origin">キー入力</div>
      <div className="sf6ime-signal-label sf6ime-signal-label-xim">
        XIM 経路<span className="sf6ime-tag sf6ime-tag-fail">遮断</span>
      </div>
      <div className="sf6ime-signal-label sf6ime-signal-label-imm">
        imm 経路<span className="sf6ime-tag sf6ime-tag-warn">処理されず終着</span>
      </div>
    </div>
  );
}

const TICKER_ITEMS = [
  "Proton公式ビルドはXIMを無効化",
  "レジストリでUseXIM=yを書いても効果なし",
  "Wine新IME実装がキー入力をXIMまで橋渡ししていない",
  "GE-Protonでも同一症状",
  "回避策はクリップボード経由の貼り付け",
];

function Ticker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="sf6ime-ticker-wrap">
      <div className="sf6ime-ticker">
        {loop.map((t, i) => (
          <span key={i} className="sf6ime-ticker-item">
            <span className="sf6ime-ticker-dot">●</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

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
      className="sf6ime-badge"
      style={{ color: c.text, background: c.bg, borderColor: c.border }}
      {...pulseProps}
    >
      <span className="sf6ime-badge-icon">{c.icon}</span>
      {children}
    </motion.span>
  );
}

export function SF6MozcInvestigation() {
  return (
    <MotionConfig reducedMotion="user">
    <motion.div
      className="sf6ime-root"
      initial={{ opacity: 0, y: 70, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 15, mass: 0.7 }}
    >
      <style>{CSS}</style>

      <div className="sf6ime-frame">
        <div className="sf6ime-blob sf6ime-blob-1" />
        <div className="sf6ime-blob sf6ime-blob-2" />
        <div className="sf6ime-blob sf6ime-blob-3" />

        <div className="sf6ime-content">
          <div className="sf6ime-head">
            <div className="sf6ime-eyebrow">CASE FILE</div>
            <div className="sf6ime-title">切り分けの経緯</div>
            <div className="sf6ime-subtitle">Street Fighter 6 (Proton) 日本語入力トラブル</div>
          </div>

          <SignalPath />

          <motion.div
            className="sf6ime-steps"
            initial="hidden"
            animate="visible"
            variants={stepsContainerVariants}
          >
            <div className="sf6ime-steps-line" />
            {STEPS.map((r) => {
              const c = TONE_COLOR[r.tone];
              return (
                <motion.div className="sf6ime-step" key={r.step} variants={stepItemVariants}>
                  <div
                    className="sf6ime-step-num"
                    style={{ background: c.bg, color: c.text, borderColor: c.border }}
                  >
                    {String(r.step).padStart(2, "0")}
                  </div>
                  <div className="sf6ime-step-body">
                    <div className="sf6ime-step-head">
                      <span className="sf6ime-step-title">{r.title}</span>
                      <Badge tone={r.tone}>{r.verdict}</Badge>
                    </div>
                    <div className="sf6ime-step-detail">{r.detail}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="sf6ime-results">
            <div className="sf6ime-results-title">検証した対策</div>
            <motion.div
              className="sf6ime-results-grid"
              initial="hidden"
              animate="visible"
              variants={resultsContainerVariants}
            >
              {RESULTS.map((s, i) => {
                const c = TONE_COLOR[s.tone];
                return (
                  <motion.div
                    key={i}
                    className="sf6ime-result-chip"
                    variants={resultItemVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <div
                      className="sf6ime-result-icon"
                      style={{ background: c.bg, color: c.text, borderColor: c.border }}
                    >
                      {c.icon}
                    </div>
                    <div className="sf6ime-result-text">
                      <div className="sf6ime-result-measure">{s.measure}</div>
                      <div className="sf6ime-result-verdict" style={{ color: c.text }}>
                        {s.verdict}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <Ticker />
      </div>
    </motion.div>
    </MotionConfig>
  );
}

const CSS = `
.sf6ime-root{
  position:relative;
  border-radius:28px;
  padding:2.5px;
  margin:32px 0;
  background:linear-gradient(135deg, #6fb89c 0%, #dbb15a 45%, #7fa6d6 100%);
  background-size:220% 220%;
  animation:sf6ime-gradient-drift 9s ease-in-out infinite;
  box-shadow:0 20px 50px -20px rgba(60,70,90,0.35);
  font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans",sans-serif;
}

.sf6ime-frame{
  position:relative;
  border-radius:26px;
  overflow:hidden;
  background:linear-gradient(150deg, #f7f9fc 0%, #fbf8f2 45%, #f2f9f5 100%);
  color:#2a2d34;
}

:root[data-theme="dark"] .sf6ime-root{
  background:linear-gradient(135deg, #4d8b73 0%, #a3812f 45%, #4f6f97 100%);
}
:root[data-theme="dark"] .sf6ime-frame{
  background:linear-gradient(150deg, #1b2027 0%, #201d1a 45%, #172019 100%);
  color:#dcdee2;
}
:root[data-theme="dark"] .sf6ime-title{color:#eceef1;}
:root[data-theme="dark"] .sf6ime-step-title{color:#e5e7eb;}
:root[data-theme="dark"] .sf6ime-results-title{color:#e5e7eb;}
:root[data-theme="dark"] .sf6ime-signal{background:rgba(0,0,0,0.22);}
:root[data-theme="dark"] .sf6ime-step-num{background:rgba(255,255,255,0.06)!important;}
:root[data-theme="dark"] .sf6ime-step:hover{background:rgba(255,255,255,0.05);}
:root[data-theme="dark"] .sf6ime-result-chip{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08);}
:root[data-theme="dark"] .sf6ime-result-chip:hover{background:rgba(255,255,255,0.08);}

@keyframes sf6ime-gradient-drift{
  0%,100%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
}

.sf6ime-blob{
  position:absolute;
  border-radius:50%;
  filter:blur(38px);
  pointer-events:none;
  opacity:0.55;
  animation:sf6ime-float 14s ease-in-out infinite;
}
.sf6ime-blob-1{width:220px;height:220px;top:-70px;right:-50px;background:#bfe3d0;animation-duration:16s;}
.sf6ime-blob-2{width:180px;height:180px;bottom:-60px;left:-40px;background:#f3d9c4;animation-duration:19s;animation-delay:-4s;}
.sf6ime-blob-3{width:150px;height:150px;top:40%;right:8%;background:#dbe6fb;opacity:0.4;animation-duration:12s;animation-delay:-8s;}

@keyframes sf6ime-float{
  0%,100%{transform:translate(0,0) scale(1);}
  33%{transform:translate(14px,-18px) scale(1.06);}
  66%{transform:translate(-10px,10px) scale(0.96);}
}

.sf6ime-content{position:relative;padding:30px 32px 32px;}

.sf6ime-head{margin-bottom:1.4rem;}
.sf6ime-eyebrow{
  font-size:0.66rem;
  font-weight:700;
  letter-spacing:0.16em;
  color:#7c9a8c;
  margin-bottom:6px;
}
.sf6ime-title{
  font-family:"Newsreader",Georgia,serif;
  font-weight:700;
  font-size:1.7rem;
  letter-spacing:0.002em;
  background:linear-gradient(100deg, #3f7a5c 0%, #966a1f 55%, #4b6f97 100%);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
.sf6ime-subtitle{font-size:0.8rem;color:#6b7280;margin-top:6px;}

.sf6ime-ticker-wrap{
  position:relative;
  overflow:hidden;
  background:#20242c;
  padding:10px 0;
  white-space:nowrap;
}
.sf6ime-ticker-wrap::before,
.sf6ime-ticker-wrap::after{
  content:"";
  position:absolute;
  top:0;bottom:0;
  width:36px;
  z-index:2;
  pointer-events:none;
}
.sf6ime-ticker-wrap::before{left:0;background:linear-gradient(90deg,#20242c,transparent);}
.sf6ime-ticker-wrap::after{right:0;background:linear-gradient(-90deg,#20242c,transparent);}
.sf6ime-ticker{
  display:inline-block;
  animation:sf6ime-ticker-scroll 22s linear infinite;
  font-size:0.72rem;
  font-weight:500;
  letter-spacing:0.02em;
  color:#cdeadb;
}
.sf6ime-ticker-item{margin:0 22px;}
.sf6ime-ticker-dot{color:#dbb15a;margin-right:8px;font-size:0.5rem;vertical-align:middle;}
@keyframes sf6ime-ticker-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}

.sf6ime-signal{
  position:relative;
  height:140px;
  border-radius:18px;
  overflow:hidden;
  background:rgba(255,255,255,0.5);
  margin-bottom:1.8rem;
}
.sf6ime-signal-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;}
.sf6ime-signal-label{
  position:absolute;
  font-size:0.72rem;
  letter-spacing:0.01em;
  color:#4b5563;
  white-space:nowrap;
  display:flex;
  align-items:center;
  gap:6px;
  pointer-events:none;
}
.sf6ime-signal-label-origin{left:5%;top:47%;transform:translateY(-50%);opacity:0.7;}
.sf6ime-signal-label-xim{left:8%;top:22%;color:#4b8a71;}
.sf6ime-signal-label-imm{left:8%;bottom:16%;color:#a3792f;}

.sf6ime-tag{
  font-size:0.65rem;
  font-weight:600;
  padding:1px 8px;
  border-radius:999px;
}
.sf6ime-tag-fail{color:#a1524f;background:#fbe8e6;}
.sf6ime-tag-warn{color:#966a1f;background:#fbf0d9;}

.sf6ime-steps{position:relative;display:flex;flex-direction:column;margin-bottom:1.8rem;}
.sf6ime-steps-line{
  position:absolute;
  left:16px;
  top:8px;
  bottom:8px;
  width:1.5px;
  background:linear-gradient(180deg, rgba(148,163,184,0.35), rgba(148,163,184,0.08));
  z-index:0;
}
.sf6ime-step{
  position:relative;
  z-index:1;
  display:flex;
  gap:1.1rem;
  padding:0.9rem 0.2rem;
  border-bottom:1px solid rgba(148,163,184,0.18);
  transition:background 150ms ease;
  border-radius:10px;
}
.sf6ime-step:hover{background:rgba(255,255,255,0.45);}
.sf6ime-step:last-child{border-bottom:none;}
.sf6ime-step-num{
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
.sf6ime-step-body{flex:1;min-width:0;}
.sf6ime-step-head{
  display:flex;
  align-items:center;
  gap:0.6rem;
  flex-wrap:wrap;
  margin-bottom:0.3rem;
}
.sf6ime-step-title{font-weight:600;font-size:0.92rem;color:#242832;}
.sf6ime-step-detail{font-size:0.83rem;color:#6b7280;line-height:1.65;}

.sf6ime-badge{
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
.sf6ime-badge-icon{font-size:0.7rem;}
.sf6ime-badge.sf6ime-pulse{animation:sf6ime-badge-pulse 2.2s ease-in-out infinite;}
@keyframes sf6ime-badge-pulse{
  0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.35);}
  50%{box-shadow:0 0 0 5px rgba(245,158,11,0);}
}

.sf6ime-results{padding-top:0.4rem;}
.sf6ime-results-title{font-weight:600;font-size:0.88rem;color:#242832;margin-bottom:0.8rem;}
.sf6ime-results-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(210px, 1fr));
  gap:0.6rem;
}
.sf6ime-result-chip{
  display:flex;
  align-items:center;
  gap:0.7rem;
  border-radius:14px;
  padding:0.6rem 0.8rem;
  background:rgba(255,255,255,0.6);
  border:1px solid rgba(148,163,184,0.16);
  transition:box-shadow 160ms ease, background 160ms ease;
}
.sf6ime-result-chip:hover{
  background:rgba(255,255,255,0.9);
  box-shadow:0 10px 22px -12px rgba(60,70,90,0.35);
}
.sf6ime-result-icon{
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
.sf6ime-result-text{min-width:0;}
.sf6ime-result-measure{font-size:0.76rem;color:#4b5563;}
.sf6ime-result-verdict{margin-top:0.2rem;font-weight:700;font-size:0.78rem;}

@media (prefers-reduced-motion: reduce){
  .sf6ime-root, .sf6ime-blob, .sf6ime-badge.sf6ime-pulse, .sf6ime-step, .sf6ime-result-chip, .sf6ime-ticker{
    transition:none!important;
    animation:none!important;
  }
}
`;

export default SF6MozcInvestigation;
