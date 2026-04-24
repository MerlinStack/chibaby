"use client";

import { useEffect } from "react";

export default function BirthdayPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
    script.onload = () => initBirthday();
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
      <canvas id="confetti-canvas" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, width: "100%", height: "100%" }} />
      <div id="petals-layer" />

      {/* ══ LANDING ══════════════════════════════════════════ */}
      <div id="landing">
        <div className="landing-ring" style={{ animationDelay: "0s" }} />
        <div className="landing-ring" style={{ animationDelay: "1.3s" }} />
        <div className="landing-ring" style={{ animationDelay: "2.6s" }} />

        <span className="float-deco" style={{ top: "8%",    left:  "6%",  animationDelay: "0s" }}>🎈</span>
        <span className="float-deco" style={{ top: "12%",   right: "10%", animationDelay: "1s" }}>🩺</span>
        <span className="float-deco" style={{ bottom: "22%",left:  "5%",  animationDelay: "2s" }}>🌸</span>
        <span className="float-deco" style={{ bottom: "18%",right: "7%",  animationDelay: "0.5s" }}>⭐</span>
        <span className="float-deco" style={{ top: "50%",   left:  "3%",  animationDelay: "1.5s" }}>💊</span>
        <span className="float-deco" style={{ top: "38%",   right: "4%",  animationDelay: "2.5s" }}>🎀</span>
        <span className="float-deco" style={{ top: "70%",   left:  "12%", animationDelay: "3s" }}>🦋</span>
        <span className="float-deco" style={{ top: "25%",   left:  "18%", animationDelay: "0.8s" }}>💫</span>
        <span className="float-deco" style={{ bottom: "35%",right: "15%", animationDelay: "1.8s" }}>🌺</span>
        <span className="float-deco" style={{ top: "60%",   right: "20%", animationDelay: "2.2s" }}>🔬</span>

        <span className="landing-cake">🎂</span>
        <h1 className="landing-title">Happy Birthday!</h1>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", marginBottom:"0.4rem" }}>
          <span style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.35)", borderRadius:"20px", padding:"4px 14px", fontSize:"0.78rem", color:"rgba(255,255,255,0.9)", letterSpacing:"0.05em" }}>
            DR. CHI — M.B.B.S 🩺
          </span>
        </div>
        <p className="landing-sub">Adamazi — Asampete nwanyi oma</p>

        <button id="reveal-btn" type="button">
          <div className="btn-shimmer" />
          🎁 &nbsp;Open Your Surprise
        </button>

        <p className="landing-hint">Tap to reveal your celebration ✨</p>
      </div>

      {/* ══ CELEBRATION ══════════════════════════════════════ */}
      <div id="celebration">

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
          <div className="hero-glow hero-glow-3" />

          <div className="hero-badge">🎊 &nbsp;Birthday Celebration &nbsp;🎊</div>

          {/* ── Age display removed — replaced with radiant symbol ── */}
          <div className="hero-age-display">
            <span className="age-number">✨</span>
          </div>

          <h1 className="hero-name"><span>Dr. Chi</span></h1>
          <p className="hero-sub">Adamazi — Asampete nwanyi oma 💫</p>

          <img
            className="hero-photo"
            src="./images/chi 1.jpeg"
            alt="Chi — Birthday Girl"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://ui-avatars.com/api/?name=Chi&size=220&background=FF3D79&color=fff&bold=true";
            }}
          />

          <div className="hero-pills">
            <span className="pill hot">🎂 Birthday Girl</span>
            <span className="pill gold">📅 April 23, 2026</span>
            <span className="pill mint">🩺 Medical Doctor</span>
            <span className="pill peach">🔥 That Girl Era</span>
            <span className="pill gold">🌟 Queen Energy</span>
          </div>

          <div className="scroll-hint">
            <span>Scroll to celebrate</span>
            <div className="scroll-arrow">
              <span /><span /><span />
            </div>
          </div>
        </section>

        <div className="divider" />
        <div className="ornament">✦ ✦ ✦</div>

        {/* ══ PATIENT CHART ═════════════════════════════════ */}
        <div className="section reveal">
          <h2 className="section-title">Patient of the Day 📋</h2>
          <p className="section-sub">Official Medical Assessment — April 23, 2026</p>

          <div style={{
            maxWidth: "680px", margin: "0 auto",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "16px", overflow: "hidden",
            fontFamily: "'Courier New', monospace",
          }}>
            <div style={{ background:"rgba(255,255,255,0.1)", padding:"1rem 1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.5rem" }}>
              <div>
                <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Rhema University Teaching Hospital</div>
                <div style={{ fontSize:"1rem", fontWeight:"bold", color:"white" }}>PATIENT CHART #BD-2026</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.5)" }}>DOB: April 23</div>
                <div style={{ fontSize:"0.85rem", color:"#FFD166" }}>STATUS: ✅ FLOURISHING</div>
              </div>
            </div>

            <div style={{ padding:"1rem 1.5rem", borderBottom:"1px solid rgba(255,255,255,0.1)", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"0.75rem" }}>
              {[
                { label:"Name",       value:"Miriam Chi" },
                { label:"Age",        value:"Perfectly Perfect" },
                { label:"Occupation", value:"Medical Doctor 🩺" },
                { label:"Ward",       value:"Queen's Suite" },
              ].map(f => (
                <div key={f.label}>
                  <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"2px" }}>{f.label}</div>
                  <div style={{ fontSize:"0.88rem", color:"white" }}>{f.value}</div>
                </div>
              ))}
            </div>

            <div style={{ padding:"1rem 1.5rem", borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.75rem" }}>Vital Signs</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:"0.6rem" }}>
                {[
                  { icon:"💖", label:"Heart",        value:"Queen BPM",      sub:"Beautifully strong" },
                  { icon:"✨", label:"Beauty",        value:"100 / 100",      sub:"Off the charts" },
                  { icon:"🧠", label:"Intelligence",  value:"Superior",       sub:"Top percentile" },
                  { icon:"🌡️", label:"Glow",          value:"BLAZING",        sub:"98.6°F + extra" },
                  { icon:"💪", label:"Resilience",    value:"Indestructible", sub:"No known cure" },
                  { icon:"😄", label:"Vibe",          value:"Excellent",      sub:"Infectious (good)" },
                ].map(v => (
                  <div key={v.label} style={{ background:"rgba(255,255,255,0.06)", borderRadius:"8px", padding:"0.6rem 0.75rem", border:"1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize:"1rem" }}>{v.icon}</div>
                    <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", textTransform:"uppercase", letterSpacing:"0.06em", marginTop:"2px" }}>{v.label}</div>
                    <div style={{ fontSize:"0.82rem", color:"#FFD166", fontWeight:"bold" }}>{v.value}</div>
                    <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.5)" }}>{v.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding:"1rem 1.5rem", borderBottom:"1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Diagnosis</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                {[
                  "Exceptional Human Syndrome (EHS)",
                  "Chronic Kindness Disorder",
                  "Acute Grace & Radiance",
                  "Terminal Brilliance",
                  "Advanced Birthday Queen Presentation",
                ].map(d => (
                  <span key={d} style={{ background:"rgba(255,61,121,0.2)", border:"1px solid rgba(255,61,121,0.4)", color:"#FF9EC4", padding:"3px 10px", borderRadius:"20px", fontSize:"0.75rem" }}>{d}</span>
                ))}
              </div>
            </div>

            <div style={{ padding:"1rem 1.5rem" }}>
              <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Rx — Prescription</div>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                {[
                  { rx:"🎂 Cake",         dose:"As much as desired",            freq:"Annually (minimum)" },
                  { rx:"🥂 Celebration",  dose:"Maximum therapeutic dose",       freq:"All day, 365" },
                  { rx:"💛 Self-love",     dose:"Generous daily administration",  freq:"Every morning" },
                  { rx:"🌺 Joy & Rest",    dose:"Unlimited refills",              freq:"PRN (as needed)" },
                  { rx:"🔬 Great Career", dose:"Already prescribed at birth",    freq:"Lifetime course" },
                ].map(r => (
                  <div key={r.rx} style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr 1fr", gap:"0.5rem", fontSize:"0.8rem", color:"rgba(255,255,255,0.8)", borderBottom:"1px dashed rgba(255,255,255,0.08)", paddingBottom:"0.3rem" }}>
                    <span style={{ color:"white", fontWeight:"bold" }}>{r.rx}</span>
                    <span style={{ color:"rgba(255,255,255,0.6)" }}>{r.dose}</span>
                    <span style={{ color:"#FFD166" }}>{r.freq}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:"1rem", fontSize:"0.75rem", color:"rgba(255,255,255,0.35)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"0.3rem" }}>
                <span>Attending Physician: The Universe, MD</span>
                <span>Sig: ✍️ Signed with love</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">🩺 🩺 🩺</div>

        {/* STATS */}
        <div className="section reveal">
          <h2 className="section-title">A Lifetime of Pure Magic ✨</h2>
          <p className="section-sub">By the numbers — clinical data</p>
          <div className="stats-bar">
            {[
              { icon: "💛", target: 7300,   label: "Days Alive & Thriving" },
              { icon: "😄", target: 300000, label: "Smiles Shared" },
              { icon: "💝", target: 999,    label: "Hearts Touched" },
              { icon: "🩺", target: 1460,   label: "Hours of Medical Training" },
              { icon: "⭐", target: 1,      label: "You (One of a Kind)" },
            ].map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <div className="stat-number" data-target={s.target}>0</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">🌸 🌸 🌸</div>

        {/* ══ DOCTOR'S NOTE ════════════════════════════════ */}
        <div className="section reveal">
          <h2 className="section-title">Doctor's Note 💌</h2>
          <p className="section-sub">From someone who thinks the world of you</p>

          <div className="message-card" style={{ position:"relative", overflow:"visible" }}>
            <div style={{ position:"absolute", top:"1rem", right:"1.5rem", fontSize:"3.5rem", opacity:0.07, pointerEvents:"none", userSelect:"none" }}>🩺</div>

            <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1.25rem", paddingBottom:"0.75rem", borderBottom:"1px dashed rgba(255,255,255,0.2)" }}>
              <div style={{ background:"rgba(255,61,121,0.2)", border:"1px solid rgba(255,61,121,0.4)", borderRadius:"50%", width:44, height:44, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem" }}>🩺</div>
              <div>
                <div style={{ fontWeight:"bold", color:"white", fontSize:"0.9rem" }}>To: Dr. Chi, M.B.B.S</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.5)" }}>Personal correspondence — April 23, 2026</div>
              </div>
            </div>

            <p className="message-text">
              Chi, you came into this world and somehow made it infinitely better just by being in it.
              And then — as if that weren't enough — you chose medicine. You chose to heal, to serve, to show up for people
              on the hardest days of their lives. That's not just a career. That's a calling. And you were always destined for it.
              You carry grace with you everywhere you go — in the way you laugh, the way you care, and the way you light up
              every room without even trying. This birthday looks absolutely breathtaking on you, but honestly?
              You make every season look like a masterpiece. Here's to Dr. Chi — the healer, the queen, the woman with the biggest heart in the room.
              This one's all for you. 🌸
            </p>
            <p className="message-text" style={{ marginTop: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>
              I've watched you navigate life with such poise, such fire. You've turned challenges into chapters and setbacks
              into springboards. You don't just survive, Chi — you thrive. You bloom. You shine in ways that make the people
              around you feel like they're standing in sunshine.
            </p>
            <div className="message-sig" style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"0.5rem" }}>
              <span>— Happy Birthday, with all the love 💛</span>
              <span style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.3)", fontFamily:"'Courier New',monospace" }}>Ref: BD-2026-042302</span>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">✦ ✦ ✦</div>

        {/* THINGS WE LOVE */}
        <div className="section reveal">
          <h2 className="section-title">Things About Dr. Chi 💖</h2>
          <p className="section-sub">Just a few reasons why you're extraordinary</p>
          <div className="love-grid">
            {[
              { e: "😂", t: "Your Laugh",        d: "Infectious, genuine, the kind that fills a whole room" },
              { e: "💪", t: "Your Strength",     d: "You carry things with grace that would break others" },
              { e: "🌸", t: "Your Grace",        d: "Effortlessly elegant in everything you do" },
              { e: "🧠", t: "Your Medical Mind", d: "Sharp, clinical, and always ten steps ahead of the diagnosis" },
              { e: "💛", t: "Your Heart",        d: "Warm, generous, and impossibly kind — rare in any ward" },
              { e: "🎉", t: "Your Energy",       d: "You make every moment feel like a celebration" },
              { e: "👑", t: "Your Confidence",   d: "You walk like the queen — and doctor — you truly are" },
              { e: "🌟", t: "Your Glow",         d: "No filter needed — you just radiate" },
              { e: "🦋", t: "Your Growth",       d: "From student to doctor — watching you evolve has been breathtaking" },
              { e: "🔬", t: "Your Dedication",   d: "You went through medical school with fire and came out with grace" },
              { e: "🩺", t: "Your Calling",      d: "Born to heal. Medicine is lucky to have you." },
              { e: "💌", t: "Your Loyalty",      d: "The kind of friend and colleague people dream of having" },
              { e: "🎯", t: "Your Drive",        d: "When you want something, you get it. Period." },
              { e: "🌺", t: "Your Beauty",       d: "Inside out, through and through — a rare combination" },
            ].map((item, i) => (
              <div className="love-card" key={i}>
                <span className="love-emoji">{item.e}</span>
                <div className="love-title">{item.t}</div>
                <div className="love-desc">{item.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">🎊 🎊 🎊</div>

        {/* LOVE LETTER */}
        <div className="section reveal">
          <h2 className="section-title">A Letter To Dr. Chi 💌</h2>
          <p className="section-sub">The words that needed to be said</p>
          <div className="love-letter">
            <div className="letter-stamp">💌</div>

            <div style={{ textAlign:"center", marginBottom:"1.5rem", paddingBottom:"1rem", borderBottom:"1px dashed rgba(255,255,255,0.15)" }}>
              <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.12em", textTransform:"uppercase" }}>Rhema University Teaching Hospital</div>
              <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.3)", fontFamily:"'Courier New',monospace" }}>Personal & Confidential — Dr. Chi's Eyes Only</div>
            </div>

            <div className="love-letter-top">Dearest Dr. Chi,</div>
            <p>
              Today. What a milestone. What a woman — and what a doctor — you have become.
              If the world had any idea just how rare you are — your laugh, your warmth, the way you care so deeply
              for every single person in your orbit, including every patient who will ever be lucky enough to have you
              in their corner — there would be a holiday named after you.
            </p>
            <p>
              You chose one of the hardest paths. Medicine asks everything of you — your time, your sleep, your peace —
              and you gave it all willingly, because that's who you are. You don't do things halfway, Chi. You pour yourself
              in completely, and then somehow you still have more to give. That kind of strength is medicine in itself.
            </p>
            <p>
              I've watched you navigate life with such poise, such fire. You've turned challenges into chapters and setbacks
              into springboards. You don't just survive — you thrive. You bloom. You shine in ways that make the people
              around you feel like they're standing in sunshine.
            </p>
            <p>
              Right now, you stand at the most beautiful intersection — a fully qualified doctor with your whole career ahead
              of you, and the world already in your capable hands. Every patient you'll ever heal, every life you'll touch,
              every diagnosis that will matter — all of it begins here, today, with the woman you already are.
            </p>
            <p>
              So here's what I need you to know on this incredible day: You are loved. You are seen. You are celebrated.
              Not just today — but every day. Happy birthday, Dr. Miriam Chi. May this year be your most magnificent yet. 🌸✨
            </p>
            <div className="love-letter-close">
              With oceans of love,<br />
              Your biggest admirer 💛
            </div>

            <div style={{ marginTop:"1.5rem", paddingTop:"1rem", borderTop:"1px dashed rgba(255,255,255,0.15)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem", fontSize:"0.7rem", color:"rgba(255,255,255,0.3)", fontFamily:"'Courier New',monospace" }}>
              <span>Date: April 23, 2026</span>
              <span>Filed under: People Who Are Everything</span>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">💃 💃 💃</div>

        {/* GIF GRID */}
        <div className="section reveal">
          <h2 className="section-title">Birthday Moments 🎬</h2>
          <p className="section-sub">Because laughter is the best medicine — literally</p>
          <div className="gif-grid">
            {[
              { src: "./images/chiim.jpeg",    alt: "In addy photo",        label: "In addy Photo",  title: "🕺 The Birthday Doctor",  caption: "When you remember it's your special day" },
              { src: "./images/chib.jpeg",     alt: "Birthday Oops",        label: "Classic Chaos",  title: "🎂 Oops, The Cake!",      caption: '"It wasn\'t me" — Mr. Bean, probably' },
              { src: "./images/chim.jpeg",     alt: "Happy Happy",          label: "Same Energy",    title: "😍 Pure Birthday Joy",    caption: "The only correct reaction to today" },
              { src: "./images/chiia.jpeg",    alt: "Teddy Dance",          label: "Dance Party",    title: "🧸 Teddy's Party Too",    caption: "Even Teddy is prescribing more dancing!" },
              { src: "./images/chiii.jpeg",    alt: "Celebration Dance",    label: "Birthday Vibes", title: "💃 That Energy!",         caption: "That's you opening this right now 😄" },
              { src: "./images/chii.jpeg",     alt: "Chi surprise moment",  label: "That Moment",    title: "🎊 SURPRISE!!!",          caption: "How Dr. Chi walks into every room" },
              { src: "./images/dr.chii.jpeg",  alt: "Dr. Chi in action",    label: "The Queen",      title: "👑 Birthday Royalty",     caption: "Saving lives and stealing hearts" },
              { src: "./images/Dr.chi.jpeg",   alt: "Dr. Chi portrait",     label: "The Doctor",     title: "🩺 Healing Mode",         caption: "Crown on, stethoscope ready" },
              { src: "./images/dr.chim.jpeg",  alt: "Dr. Chi celebration",  label: "Pure Joy",       title: "✨ That Glow Though",     caption: "Absolutely radiant" },
            ].map((g, i) => (
              <div className="gif-card" key={i}>
                <div className="gif-frame">
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <div className="gif-overlay" />
                  <span className="gif-label">{g.label}</span>
                </div>
                <div className="gif-body">
                  <div className="gif-title">{g.title}</div>
                  <div className="gif-caption">{g.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">✨ ✨ ✨</div>

        {/* ══ THE CHI OATH ═════════════════════════════════ */}
        <div className="section reveal">
          <h2 className="section-title">The Chi Oath 🩺</h2>
          <p className="section-sub">A doctor's creed, rewritten for the birthday queen</p>
          <div style={{ maxWidth:"620px", margin:"0 auto", position:"relative" }}>
            <div style={{
              background:"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.15)",
              borderRadius:"16px",
              padding:"2rem 2rem 1.5rem",
              fontFamily:"'Playfair Display', serif",
              fontStyle:"italic",
              fontSize:"1.05rem",
              lineHeight:1.85,
              color:"rgba(255,255,255,0.88)",
              textAlign:"center",
              position:"relative",
            }}>
              <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>🩺</div>
              <p style={{ marginBottom:"1.2rem" }}>
                I, Dr. Chi, solemnly swear to heal the world with kindness,<br/>
                to prescribe laughter wherever it is needed,<br/>
                to diagnose potential in everyone I meet,<br/>
                and to never stop glowing — regardless of the hours worked.
              </p>
              <p style={{ marginBottom:"1.2rem" }}>
                I will treat every room I enter as my ward,<br/>
                every person I love as my patient,<br/>
                and every birthday as a reminder<br/>
                that I am the miracle I used to pray for.
              </p>
              <p>
                I will celebrate today — fully, joyfully, without apology.<br/>
                Because the doctor is off duty.<br/>
                And the birthday queen is IN. 👑
              </p>
              <div style={{ marginTop:"1.5rem", fontSize:"0.8rem", fontFamily:"'Courier New',monospace", fontStyle:"normal", color:"rgba(255,255,255,0.35)", borderTop:"1px dashed rgba(255,255,255,0.12)", paddingTop:"1rem" }}>
                Sworn & sealed — April 23, 2026 · Rhema University Teaching Hospital
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">✦ ✦ ✦</div>

        {/* VIBE CHECK */}
        <div className="section reveal">
          <h2 className="section-title">Dr. Chi's Vibes 🔥</h2>
          <p className="section-sub">This is your season, your moment, your year</p>
          <div className="vibe-grid">
            {[
              { icon: "👑", cls: "gold",  title: "Main Character Energy",  desc: "Always have been, always will be" },
              { icon: "💅", cls: "pink",  title: "Unbothered Queen",        desc: "Too blessed to be stressed" },
              { icon: "🩺", cls: "mint",  title: "Healer & Queen",          desc: "The rarest combination in any room" },
              { icon: "🎯", cls: "lilac", title: "Goals & Grace",           desc: "She knows what she wants and goes for it" },
              { icon: "✨", cls: "gold",  title: "Pure Gold",               desc: "Rare, precious, irreplaceable" },
              { icon: "🔬", cls: "lilac", title: "Scientific & Stunning",   desc: "Brilliance with beauty — unfair, honestly" },
              { icon: "🔥", cls: "pink",  title: "On Fire",                 desc: "2026 is her year and everyone knows it" },
              { icon: "💫", cls: "mint",  title: "Star Power",              desc: "She doesn't need a spotlight — she is one" },
              { icon: "🦋", cls: "lilac", title: "Free Spirit",             desc: "She flies wherever she chooses — in scrubs or in heels" },
              { icon: "🌺", cls: "mint",  title: "In Full Bloom",           desc: "Absolutely flourishing, always" },
            ].map((v, i) => (
              <div className="vibe-card" key={i}>
                <div className={`vibe-icon ${v.cls}`}>{v.icon}</div>
                <div className="vibe-info">
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">🌸 ✦ 🌸</div>

        {/* WISHES TICKER */}
        <div className="section reveal" style={{ paddingBottom: "2rem" }}>
          <h2 className="section-title">Birthday Wishes 🌟</h2>
          <p className="section-sub">All the good things coming your way — doctor's orders</p>
        </div>
        <div className="wishes-track-wrap reveal">
          <div className="wishes-track" id="ticker1" />
        </div>
        <div style={{ height: "0.8rem" }} />
        <div className="wishes-track-wrap reveal">
          <div className="wishes-track wishes-track-rev" id="ticker2" />
        </div>

        <div style={{ paddingBottom: "3rem" }} />
        <div className="divider" />
        <div className="ornament">📝 ✦ 📝</div>

        {/* STICKY NOTE WALL */}
        <div className="section reveal">
          <h2 className="section-title">Sticky Note Wall 📝</h2>
          <p className="section-sub">Little notes for the birthday queen — from the ward with love</p>
          <div className="wish-wall" id="wish-wall" />
        </div>

        <div className="divider" />
        <div className="ornament">⭐ ⭐ ⭐</div>

        {/* TIMELINE */}
        <div className="section reveal">
          <h2 className="section-title">Your Story So Far 📖</h2>
          <p className="section-sub">A lifetime of being absolutely amazing</p>
          <div className="timeline">
            {[
              { dot: "👶", year: "Day One",           text: "The world gains its most precious addition — you arrive and everything changes. 🌍" },
              { dot: "🌱", year: "Early Years",        text: "Curious, bright-eyed, full of wonder. You were always something special." },
              { dot: "📚", year: "School Days",        text: "Brilliant and hardworking — you outshine everyone while making it look effortless." },
              { dot: "🌸", year: "Teen Years",         text: "Glowing up, levelling up, absolutely thriving and turning heads everywhere." },
              { dot: "🔥", year: "Finding Your Power", text: "Discovering your voice, your vision, your calling. Unstoppable force in the making." },
              { dot: "🩺", year: "Medical School",     text: "Chose the hardest path — and conquered it. MBBS in hand, and only just getting started." },
              { dot: "👩‍⚕️", year: "Dr. Chi — Today!",  text: "The coat fits perfectly. The world is lucky to have Dr. Chi. 🥂" },
              { dot: "✨", year: "The Future",          text: "Every patient lucky enough to have you. Every life touched. The whole world is yours. 🌟" },
            ].map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot">{item.dot}</div>
                <div className="tl-body">
                  <div className="tl-year">{item.year}</div>
                  <div className="tl-text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">📸 ✦ 📸</div>

        {/* POLAROID GALLERY */}
        <div className="section reveal">
          <h2 className="section-title">Moments to Remember 📸</h2>
          <p className="section-sub">Snapshots of a life beautifully — and brilliantly — lived</p>
          <div className="polaroid-grid">
            {[
              { src: "/images/chi.jpeg",   caption: "The Birthday Queen 👑",  fallbackColor: "FF3D79" },
              { src: "/images/chi 5.jpeg", caption: "Dr. Chi, MBBS ✨",       fallbackColor: "C084FC" },
              { src: "/images/chi .jpeg",  caption: "Birthday Fabulous 🌸",   fallbackColor: "FFD166" },
              { src: "/images/chi 6.jpeg", caption: "Born to Heal 🩺💛",      fallbackColor: "06D6A0" },
            ].map((p, i) => (
              <div className="polaroid" key={i}>
                <img
                  className="polaroid-img"
                  src={p.src}
                  alt={p.caption}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=Chi&size=200&background=${p.fallbackColor}&color=fff&bold=true&font-size=0.5`;
                  }}
                />
                <div className="polaroid-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* FOOTER */}
        <footer className="footer reveal">
          <span className="footer-emojis">🎉🎂🩺🎊🎈</span>
          <div className="footer-big">Happy Birthday, Dr. Chi!</div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", marginBottom: "1.2rem", fontFamily: "'Dancing Script', cursive" }}>
            May every single day feel as special as you are 💛
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", marginBottom: "0.6rem", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            Adamazi — Asampete nwanyi oma 🌺
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: "2rem", fontFamily: "'Courier New', monospace" }}>
            Dr. Chi · M.B.B.S · Healer · Queen · Birthday Girl
          </p>
          <p className="footer-small">Made with infinite love · April 23, 2026 ✨</p><br />
          <p className="footer-small">Website by: MerlinStack (TETE)</p><br />
          <p className="footer-small">I CODE | I BUILD | I DESIGN</p>
        </footer>

      </div>{/* end #celebration */}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CLIENT-SIDE LOGIC
═══════════════════════════════════════════════════════════ */
function initBirthday() {
  const bgCanvas = document.getElementById("bg-canvas") as HTMLCanvasElement;
  const bctx = bgCanvas.getContext("2d")!;
  type Star = { x:number; y:number; r:number; a:number; speed:number; drift:number; color:string; };
  const STAR_COLORS = ["255,255,255","255,209,102","255,61,121","192,132,252","6,214,160"];
  let stars: Star[] = [];
  function resizeBg() { bgCanvas.width = window.innerWidth; bgCanvas.height = window.innerHeight; }
  resizeBg();
  window.addEventListener("resize", resizeBg);
  for (let i = 0; i < 180; i++) {
    stars.push({ x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight, r: Math.random()*1.6+0.2, a: Math.random()*Math.PI*2, speed: Math.random()*0.009+0.002, drift: (Math.random()-0.5)*0.25, color: STAR_COLORS[Math.floor(Math.random()*STAR_COLORS.length)] });
  }
  (function drawBg() {
    bctx.clearRect(0,0,bgCanvas.width,bgCanvas.height);
    stars.forEach(s => {
      s.a+=s.speed; s.x+=s.drift*0.12;
      if(s.x<0) s.x=bgCanvas.width; if(s.x>bgCanvas.width) s.x=0;
      const alpha=(Math.sin(s.a)*0.5+0.5)*0.75+0.08;
      bctx.beginPath(); bctx.arc(s.x,s.y,s.r,0,Math.PI*2); bctx.fillStyle=`rgba(${s.color},${alpha})`; bctx.fill();
    });
    requestAnimationFrame(drawBg);
  })();

  const petalsLayer = document.getElementById("petals-layer")!;
  const PETAL_EMOJIS = ["🌸","🌺","✨","💫","⭐","🦋","🌟","💖","🎀","🌷","🩺","💊"];
  function createPetal() {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = PETAL_EMOJIS[Math.floor(Math.random()*PETAL_EMOJIS.length)];
    const dur=8+Math.random()*10, delay=Math.random()*8, size=1+Math.random()*0.8;
    p.style.cssText=`left:${Math.random()*100}%;font-size:${size}rem;animation-duration:${dur}s;animation-delay:${delay}s;`;
    petalsLayer.appendChild(p);
  }
  for(let pi=0;pi<22;pi++) createPetal();
  setInterval(()=>{ if(petalsLayer.children.length<38) createPetal(); },2000);

  const confettiCanvas = document.getElementById("confetti-canvas") as HTMLCanvasElement;
  const myConfetti = (window as any).confetti.create(confettiCanvas,{resize:true,useWorker:true});
  const COLORS=["#FF3D79","#FFD166","#C084FC","#06D6A0","#ffffff","#ff9a3c"];
  function burst(ox?:number,oy?:number){ myConfetti({particleCount:90,spread:100,origin:{x:ox??0.5,y:oy??0.5},colors:COLORS,scalar:1.1}); }
  function megaBurst(){
    [0,180,360,540,720].forEach(delay=>{ setTimeout(()=>{ myConfetti({particleCount:160,spread:150,origin:{x:0.5,y:0.45},startVelocity:35,colors:COLORS,scalar:1.2}); },delay); });
    setTimeout(()=>{ myConfetti({particleCount:130,spread:70,angle:60,origin:{x:0,y:0.5},startVelocity:30,colors:COLORS}); myConfetti({particleCount:130,spread:70,angle:120,origin:{x:1,y:0.5},startVelocity:30,colors:COLORS}); },400);
    setTimeout(()=>{ myConfetti({particleCount:80,spread:50,angle:315,origin:{x:0,y:0.1},startVelocity:25,colors:COLORS}); myConfetti({particleCount:80,spread:50,angle:225,origin:{x:1,y:0.1},startVelocity:25,colors:COLORS}); },600);
    setTimeout(()=>{ myConfetti({particleCount:100,spread:80,angle:90,origin:{x:0.25,y:1},startVelocity:40,colors:COLORS}); myConfetti({particleCount:100,spread:80,angle:90,origin:{x:0.75,y:1},startVelocity:40,colors:COLORS}); },900);
  }
  function gentleShower(){ myConfetti({particleCount:40,spread:60,origin:{x:Math.random(),y:0},startVelocity:15,gravity:0.5,colors:COLORS,scalar:0.9}); }

  const btn=document.getElementById("reveal-btn")!;
  const landing=document.getElementById("landing")!;
  const celebration=document.getElementById("celebration")!;
  btn.addEventListener("click",()=>{
    megaBurst(); landing.classList.add("hide");
    setTimeout(()=>{
      landing.style.display="none"; celebration.classList.add("show");
      requestAnimationFrame(()=>requestAnimationFrame(()=>celebration.classList.add("visible")));
      setTimeout(megaBurst,900);
      let showerCount=0;
      const shower=setInterval(()=>{ showerCount++; gentleShower(); if(showerCount>20) clearInterval(shower); },2500);
    },750);
  });

  const SPARK_COLORS=["#FF3D79","#FFD166","#C084FC","#06D6A0","#ffffff"];
  let lastSparkle=0;
  function spawnSparkle(x:number,y:number){ const now=Date.now(); if(now-lastSparkle<80) return; lastSparkle=now; const dot=document.createElement("div"); dot.className="sparkle-dot"; const size=6+Math.random()*10; dot.style.cssText=`width:${size}px;height:${size}px;left:${x-size/2}px;top:${y-size/2}px;background:${SPARK_COLORS[Math.floor(Math.random()*SPARK_COLORS.length)]};animation-duration:0.8s;`; document.body.appendChild(dot); setTimeout(()=>dot.remove(),900); }
  document.addEventListener("mousemove",e=>spawnSparkle(e.clientX,e.clientY));
  document.addEventListener("touchmove",e=>{ spawnSparkle(e.touches[0].clientX,e.touches[0].clientY); },{passive:true});

  const HOVER_SEL=".gif-card,.message-card,.tl-body,.tl-dot,.hero-photo,.pill,.wish-chip,.love-card,.vibe-card,.polaroid,.wish-note";
  let hoverCD=false;
  document.addEventListener("mouseover",e=>{ if(hoverCD) return; const el=(e.target as Element).closest(HOVER_SEL); if(!el) return; hoverCD=true; setTimeout(()=>{hoverCD=false;},900); const r=el.getBoundingClientRect(); myConfetti({particleCount:22,spread:62,origin:{x:(r.left+r.width/2)/window.innerWidth,y:(r.top+r.height/2)/window.innerHeight},colors:COLORS,scalar:0.65,startVelocity:17,gravity:0.9}); });
  document.addEventListener("touchstart",e=>{ const el=(e.target as Element).closest(HOVER_SEL); if(!el) return; const r=el.getBoundingClientRect(); myConfetti({particleCount:30,spread:68,origin:{x:(r.left+r.width/2)/window.innerWidth,y:(r.top+r.height/2)/window.innerHeight},colors:COLORS,scalar:0.72}); },{passive:true});

  const wishes1 = [
    "🌸 May you always bloom","💛 Endless happiness","🎂 Thriving always",
    "✨ You deserve the world","🥂 To new adventures","💫 Big year ahead",
    "🌟 So proud of you","🎊 Queen behaviour only","💝 Loved beyond words",
    "🔥 Your best year yet","🌺 Grace & greatness","🎈 Keep shining bright",
    "💌 You are so loved","🦋 Beautiful transformation","🩺 Healing the world",
    "👑 Born to reign","💃 Dance through life","🍀 Luck finds you always",
  ];
  const wishes2 = [
    "🎀 Wrapped in love","🌙 Peaceful nights","☀️ Golden days",
    "💎 Rare & precious","🎵 Life in melody","🌊 Flow gracefully",
    "🦚 Stand in power","🍓 Sweet moments","🌻 Face the sun",
    "💪 Stronger yearly","🎯 Hit every target","🌟 Star of show",
    "🧡 Wrapped in warmth","🩺 Doctor & queen","🌿 Grow endlessly",
    "💜 Deeply cherished","🎶 Song plays on","💊 Prescribed: joy",
  ];
  function fillTicker(id:string, arr:string[]) {
    const track = document.getElementById(id);
    if (!track) return;
    [...arr, ...arr].forEach((w) => {
      const chip = document.createElement("div");
      chip.className = "wish-chip";
      chip.textContent = w;
      track.appendChild(chip);
    });
  }
  fillTicker("ticker1", wishes1);
  fillTicker("ticker2", wishes2);

  const notes=[
    { text:"You are a whole vibe, Dr. Chi! 💖",                    bg:"rgba(255,61,121,0.25)",  pin:"#FF3D79" },
    { text:"The most gorgeous doctor I know ✨",                     bg:"rgba(255,209,102,0.2)",  pin:"#FFD166" },
    { text:"God really took His time with you 🌸",                  bg:"rgba(192,132,252,0.25)", pin:"#C084FC" },
    { text:"Wishing you a year as beautiful as your smile 😊",      bg:"rgba(6,214,160,0.2)",    pin:"#06D6A0" },
    { text:"Chi = Light. It's right there in the name ☀️",          bg:"rgba(255,154,60,0.2)",   pin:"#FF9A3C" },
    { text:"Absolutely unstoppable 🔥",                             bg:"rgba(255,61,121,0.2)",   pin:"#FF3D79" },
    { text:"The world is lucky to have you 💛",                     bg:"rgba(192,132,252,0.2)",  pin:"#C084FC" },
    { text:"Doctor AND queen? Unfair to the rest of us 👑",         bg:"rgba(255,209,102,0.25)", pin:"#FFD166" },
    { text:"You make every patient luckier just by showing up 🩺",  bg:"rgba(6,214,160,0.25)",   pin:"#06D6A0" },
    { text:"Big things are coming your way, Dr. Chi! 🚀",           bg:"rgba(255,61,121,0.22)",  pin:"#FF3D79" },
    { text:"Your glow? Unmatched. Your stethoscope? Iconic ⚡",    bg:"rgba(192,132,252,0.22)", pin:"#C084FC" },
    { text:"Happy birthday to the realest one 💜",                  bg:"rgba(255,154,60,0.22)",  pin:"#FF9A3C" },
    { text:"The most gorgeous doctor I know ✨",                     bg:"rgba(255,209,102,0.2)",  pin:"#FFD166" },
    { text:"Born to be a queen, born to heal 👑",                   bg:"rgba(255,209,102,0.25)", pin:"#FFD166" },
    { text:"You make everything better just by showing up 🌺",      bg:"rgba(6,214,160,0.25)",   pin:"#06D6A0" },
    { text:"Your energy? Unreal. Your future? Brighter ⚡",        bg:"rgba(192,132,252,0.22)", pin:"#C084FC" },
  ];
  const wall=document.getElementById("wish-wall");
  if(wall){ notes.forEach((note,i)=>{ const div=document.createElement("div"); div.className="wish-note"; div.style.background=note.bg; div.style.border=`1px solid ${note.pin}44`; div.style.transform=`rotate(${(i%2===0?1:-1)*(Math.random()*3)}deg)`; div.innerHTML=`<div class="wish-note-pin" style="background:${note.pin};"></div>${note.text}`; div.addEventListener("click",()=>burst()); wall.appendChild(div); }); }

  function animateCounter(el:Element,target:number){ const duration=2000; let startTime:number|null=null; const easeOut=(t:number)=>1-Math.pow(1-t,4); (function step(ts:number){ if(!startTime) startTime=ts; const progress=Math.min((ts-startTime)/duration,1); (el as HTMLElement).textContent=Math.floor(easeOut(progress)*target).toLocaleString(); if(progress<1) requestAnimationFrame(step); else (el as HTMLElement).textContent=target.toLocaleString(); })(performance.now()); }

  const revealObs=new IntersectionObserver(entries=>{ entries.forEach(en=>{ if(!en.isIntersecting) return; en.target.classList.add("visible"); en.target.querySelectorAll("[data-target]").forEach(counter=>{ if(!(counter as HTMLElement).dataset.animated){ (counter as HTMLElement).dataset.animated="1"; animateCounter(counter,parseInt((counter as HTMLElement).dataset.target!)); } }); if(en.target.querySelector(".message-card")||en.target.querySelector(".footer-big")||en.target.querySelector(".love-letter")||en.target.querySelector(".stats-bar")){ setTimeout(()=>burst(Math.random(),0.5),300); } }); },{threshold:0.1});
  document.querySelectorAll(".reveal").forEach(el=>revealObs.observe(el));

  document.querySelectorAll(".gif-frame img").forEach(img=>{ const src=(img as HTMLImageElement).src; img.addEventListener("click",()=>{ (img as HTMLImageElement).src=""; (img as HTMLImageElement).src=src; }); });

  setInterval(()=>{ if(celebration.classList.contains("visible")) gentleShower(); },6000);

  let footerBursted=false;
  window.addEventListener("scroll",()=>{ if(footerBursted) return; const footer=document.querySelector(".footer"); if(!footer) return; if(footer.getBoundingClientRect().top<window.innerHeight*0.8){ footerBursted=true; megaBurst(); } });
}