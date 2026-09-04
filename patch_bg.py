import pathlib, re
p = pathlib.Path("D:/GEN/SallaThemes/sync-theme-v1/src/assets/styles/02-generic/_ona-custom.scss")
s = p.read_text(encoding="utf-8")

header = """/* ATELIER — 4 PREMIUM BACKGROUND ENGINES
 * bg-aurora: Aurora drift (default) — lime/forest/ink
 * bg-silk:   Silk flow waves
 * bg-cosmic: Cosmic floating orbs
 * bg-prism:  Prism light beams
 * Switch via Theme Settings > Animated Background (twilight.json background_animation)
 */

.mesh-background {
    position: fixed;
    inset: 0;
    z-index: 0;
    background: #F8F9FF;
    overflow: hidden;
    pointer-events: none;
}
.mesh-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(32px);
    will-change: transform;
    pointer-events: none;
    display: none;
}

/* 1 — AURORA (default) */
.bg-aurora .mesh-background, .mesh-background {
    background: #F8F9FF;
}
.bg-aurora .mesh-background::before, .mesh-background::before {
    content: "";
    position: absolute;
    inset: -22%;
    background:
        radial-gradient(ellipse 820px 620px at 18% 22%, rgba(212,255,0,0.18) 0%, rgba(212,255,0,0.06) 42%, transparent 72%),
        radial-gradient(ellipse 780px 560px at 84% 18%, rgba(10,24,52,0.10) 0%, transparent 62%),
        radial-gradient(ellipse 900px 680px at 52% 88%, rgba(13,59,46,0.13) 0%, transparent 68%),
        radial-gradient(ellipse 640px 520px at 88% 82%, rgba(212,255,0,0.11) 0%, transparent 64%),
        radial-gradient(ellipse 560px 460px at 38% 52%, rgba(238,241,255,0.85) 0%, transparent 70%);
    filter: blur(18px);
    animation: meshDrift 18s ease-in-out infinite alternate;
}
.bg-aurora .mesh-background::after, .mesh-background::after {
    content: "";
    position: absolute;
    inset: -18%;
    background:
        radial-gradient(ellipse 700px 520px at 72% 48%, rgba(212,255,0,0.09) 0%, transparent 60%),
        radial-gradient(ellipse 620px 480px at 30% 70%, rgba(10,24,52,0.06) 0%, transparent 65%);
    filter: blur(28px);
    animation: meshDrift2 22s ease-in-out infinite alternate-reverse;
}
.bg-aurora .mesh-orb { display: none !important; }
@keyframes meshDrift {
    0%   { transform: translate(0px, 0px) scale(1) rotate(0deg); }
    25%  { transform: translate(-28px, 18px) scale(1.04) rotate(0.4deg); }
    50%  { transform: translate(22px, -16px) scale(1.02) rotate(-0.3deg); }
    75%  { transform: translate(16px, 22px) scale(1.06) rotate(0.5deg); }
    100% { transform: translate(-18px, -10px) scale(1.03) rotate(-0.2deg); }
}
@keyframes meshDrift2 {
    0%   { transform: translate(0px, 0px) scale(1) rotate(0deg); }
    33%  { transform: translate(26px, -14px) scale(1.03) rotate(-0.4deg); }
    66%  { transform: translate(-20px, 20px) scale(0.98) rotate(0.3deg); }
    100% { transform: translate(12px, 8px) scale(1.05) rotate(0.2deg); }
}
@keyframes meshPulse { 0%{opacity:.85} 100%{opacity:1} }

/* 2 — SILK FLOW */
.bg-silk .mesh-background::before, .bg-silk .mesh-background::after { display: none !important; }
.bg-silk .mesh-orb { display: block !important; filter: blur(38px); opacity: 0.9; }
.bg-silk .orb-a {
    width: 140%; height: 420px; left: -20%; top: 8%;
    background: linear-gradient(100deg, rgba(212,255,0,0.13) 0%, rgba(238,241,255,0.75) 42%, rgba(13,59,46,0.05) 100%);
    border-radius: 60% 40% 55% 45% / 45% 55% 45% 55%;
    transform: rotate(-6deg);
    animation: silkFlow 16s ease-in-out infinite alternate;
}
.bg-silk .orb-b {
    width: 120%; height: 360px; left: -10%; top: 48%;
    background: linear-gradient(98deg, transparent 10%, rgba(10,24,52,0.05) 50%, rgba(212,255,0,0.07) 90%);
    border-radius: 45% 55% 60% 40% / 55% 45% 55% 45%;
    transform: rotate(4deg);
    animation: silkFlow2 19s ease-in-out infinite alternate-reverse;
}
.bg-silk .orb-c, .bg-silk .orb-d { display: none !important; }
@keyframes silkFlow { 0%{transform:translateX(-18px) rotate(-6deg) scaleX(1)} 100%{transform:translateX(22px) rotate(-5deg) scaleX(1.03)} }
@keyframes silkFlow2 { 0%{transform:translateX(14px) rotate(4deg) scaleX(1)} 100%{transform:translateX(-20px) rotate(5deg) scaleX(1.04)} }

/* 3 — COSMIC ORBS */
.bg-cosmic .mesh-background::before, .bg-cosmic .mesh-background::after { display: none !important; }
.bg-cosmic .mesh-orb { display: block !important; filter: blur(24px); border-radius: 50%; }
.bg-cosmic .orb-a { width: 420px; height: 420px; left: 6%; top: 10%; background: radial-gradient(circle, rgba(212,255,0,0.20) 0%, rgba(212,255,0,0.05) 45%, transparent 72%); animation: cosmicFloat 13s ease-in-out infinite alternate; }
.bg-cosmic .orb-b { width: 360px; height: 360px; right: 8%; top: 18%; background: radial-gradient(circle, rgba(10,24,52,0.10) 0%, transparent 68%); animation: cosmicFloat2 16s ease-in-out infinite alternate-reverse; }
.bg-cosmic .orb-c { width: 520px; height: 520px; left: 32%; bottom: 6%; background: radial-gradient(circle, rgba(13,59,46,0.11) 0%, transparent 70%); animation: cosmicFloat 18s ease-in-out infinite alternate; }
.bg-cosmic .orb-d { width: 280px; height: 280px; left: 68%; bottom: 18%; background: radial-gradient(circle, rgba(212,255,0,0.12) 0%, transparent 65%); animation: cosmicFloat2 14s ease-in-out infinite alternate; }
@keyframes cosmicFloat { 0%{transform:translate(0,0) scale(1)} 33%{transform:translate(12px,-18px) scale(1.03)} 66%{transform:translate(-10px,14px) scale(0.98)} 100%{transform:translate(8px,-8px) scale(1.04)} }
@keyframes cosmicFloat2 { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(-16px,16px) scale(1.05)} 100%{transform:translate(14px,-12px) scale(0.99)} }

/* 4 — PRISM LIGHT */
.bg-prism .mesh-background::before, .bg-prism .mesh-background::after { display: none !important; }
.bg-prism .mesh-orb { display: block !important; }
.bg-prism .orb-a { width: 130%; height: 6px; left: -15%; top: 22%; background: linear-gradient(90deg, transparent, rgba(212,255,0,0.22), rgba(10,24,52,0.08), transparent); border-radius: 9999px; filter: blur(7px); transform: rotate(-8deg); animation: prismSweep 8s ease-in-out infinite alternate; }
.bg-prism .orb-b { width: 110%; height: 1px; left: -5%; top: 38%; background: linear-gradient(90deg, transparent, rgba(13,59,46,0.12), transparent); border-radius: 9999px; opacity: .9; filter: blur(1px); transform: rotate(-8deg); animation: prismSweep 9.5s ease-in-out infinite alternate-reverse; }
.bg-prism .orb-c { width: 100%; height: 140px; left: 10%; top: 60%; background: radial-gradient(ellipse at center, rgba(212,255,0,0.07) 0%, transparent 68%); border-radius: 50%; filter: blur(36px); animation: prismGlow 12s ease-in-out infinite alternate; }
.bg-prism .orb-d { width: 70%; height: 2px; left: 15%; bottom: 16%; background: linear-gradient(90deg, transparent, rgba(10,24,52,0.06), transparent); border-radius: 9999px; filter: blur(2px); transform: rotate(-8deg); animation: prismSweep 11s ease-in-out infinite alternate; }
@keyframes prismSweep { 0%{transform:translateX(-24px) rotate(-8deg); opacity:.7} 100%{transform:translateX(24px) rotate(-8deg); opacity:1} }
@keyframes prismGlow { 0%{transform:scale(1) translateX(-10px); opacity:.6} 100%{transform:scale(1.08) translateX(10px); opacity:.95} }

"""
import re
pattern = r"/\* ATELIER v2.*?@keyframes meshPulse.*?}\s*\n"
m = re.search(pattern, s, re.DOTALL)
if m:
    new_s = s[:m.start()] + header + "\n" + s[m.end():]
    p.write_text(new_s, encoding="utf-8")
    print("patched", len(new_s))
    print("silk", "silkFlow" in new_s)
    print("cosmic", "cosmicFloat" in new_s)
    print("prism", "prismSweep" in new_s)
else:
    print("pattern not found")
    idx = s.find("/* Mouse aura")
    if idx != -1:
        start = s.find("/* ATELIER")
        new_s = s[:start] + header + "\n" + s[idx:]
        p.write_text(new_s, encoding="utf-8")
        print("fallback", len(new_s))
