"use client";

import { useEffect } from "react";

export default function BirthdayPage() {
  useEffect(() => {
    // ── Load confetti library then boot everything ──────────
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
    script.onload = () => initBirthday();
    document.head.appendChild(script);

    return () => {
      // cleanup on unmount (dev hot-reload)
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Star-field background */}
      <canvas id="bg-canvas" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Confetti canvas */}
      <canvas
        id="confetti-canvas"
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, width: "100%", height: "100%" }}
      />

      {/* Floating petals — filled by JS so no SSR mismatch */}
      <div id="petals-layer" />

      {/* ══ LANDING ══════════════════════════════════════════ */}
      <div id="landing">
        <div className="landing-ring" style={{ animationDelay: "0s" }} />
        <div className="landing-ring" style={{ animationDelay: "1.3s" }} />
        <div className="landing-ring" style={{ animationDelay: "2.6s" }} />

        <span className="float-deco" style={{ top: "8%",    left:  "6%",  animationDelay: "0s" }}>🎈</span>
        <span className="float-deco" style={{ top: "12%",   right: "10%", animationDelay: "1s" }}>🎉</span>
        <span className="float-deco" style={{ bottom: "22%",left:  "5%",  animationDelay: "2s" }}>🌸</span>
        <span className="float-deco" style={{ bottom: "18%",right: "7%",  animationDelay: "0.5s" }}>⭐</span>
        <span className="float-deco" style={{ top: "50%",   left:  "3%",  animationDelay: "1.5s" }}>✨</span>
        <span className="float-deco" style={{ top: "38%",   right: "4%",  animationDelay: "2.5s" }}>🎀</span>
        <span className="float-deco" style={{ top: "70%",   left:  "12%", animationDelay: "3s" }}>🦋</span>
        <span className="float-deco" style={{ top: "25%",   left:  "18%", animationDelay: "0.8s" }}>💫</span>
        <span className="float-deco" style={{ bottom: "35%",right: "15%", animationDelay: "1.8s" }}>🌺</span>

        <span className="landing-cake">🎂</span>
        <h1 className="landing-title">Happy Birthday!</h1>
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

          <div className="hero-age-display">
            <span className="age-number">25</span>
          </div>

          <h1 className="hero-name"><span>Chi</span></h1>
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
            <span className="pill hot">🎂 Turning 25</span>
            <span className="pill gold">📅 April 23, 2026</span>
            <span className="pill mint">🌟 Queen Energy</span>
            <span className="pill peach">🔥 That Girl Era</span>
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

        {/* STATS */}
        <div className="section reveal">
          <h2 className="section-title">25 Years of Pure Magic ✨</h2>
          <p className="section-sub">By the numbers</p>
          <div className="stats-bar">
            {[
              { icon: "🌍", target: 25,     label: "Years of Greatness" },
              { icon: "💛", target: 7300,   label: "Days Alive & Thriving" },
              { icon: "😄", target: 300000, label: "Smiles Shared" },
              { icon: "💝", target: 999,    label: "Hearts Touched" },
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

        {/* MESSAGE */}
        <div className="section reveal">
          <h2 className="section-title">A Message For You 💌</h2>
          <p className="section-sub">From someone who thinks the world of you</p>
          <div className="message-card">
            <p className="message-text">
              Chi, you came into this world 25 years ago and somehow made it infinitely better just by being in it.
              You carry grace with you everywhere you go — in the way you laugh, the way you care, and the way you
              light up every room without even trying. Twenty-five looks absolutely breathtaking on you, but honestly?
              You make every age look like a masterpiece. Here&apos;s to the birthday girl, the big dreams, the even
              bigger heart, and all the beautiful things still to come. This one&apos;s all for you. 🌸
            </p>
            <div className="message-sig">— Happy 25th, with all the love 💛</div>
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">✦ ✦ ✦</div>

        {/* THINGS WE LOVE */}
        <div className="section reveal">
          <h2 className="section-title">Things About Chi 💖</h2>
          <p className="section-sub">Just a few reasons why you&apos;re extraordinary</p>
          <div className="love-grid">
            {[
              { e: "😂", t: "Your Laugh",      d: "Infectious, genuine, the kind that fills a whole room" },
              { e: "💪", t: "Your Strength",   d: "You carry things with grace that would break others" },
              { e: "🌸", t: "Your Grace",      d: "Effortlessly elegant in everything you do" },
              { e: "🧠", t: "Your Mind",       d: "Sharp, brilliant, and always ten steps ahead" },
              { e: "💛", t: "Your Heart",      d: "Warm, generous, and impossibly kind" },
              { e: "🎉", t: "Your Energy",     d: "You make every moment feel like a celebration" },
              { e: "👑", t: "Your Confidence", d: "You walk like the queen you truly are" },
              { e: "🌟", t: "Your Glow",       d: "No filter needed — you just radiate" },
              { e: "🦋", t: "Your Growth",     d: "Watching you evolve has been breathtaking" },
              { e: "🎯", t: "Your Drive",      d: "When you want something, you get it. Period." },
              { e: "🌺", t: "Your Beauty",     d: "Inside out, through and through" },
              { e: "💌", t: "Your Loyalty",    d: "The kind of friend people dream of having" },
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
          <h2 className="section-title">A Letter To Chi 💌</h2>
          <p className="section-sub">The words that needed to be said</p>
          <div className="love-letter">
            <div className="letter-stamp">💌</div>
            <div className="love-letter-top">Dearest Chi,</div>
            <p>
              Twenty-five. What a number. What a milestone. What a woman you&apos;ve become. If the world had any idea
              just how rare you are — your laugh, your warmth, the way you care so deeply for the people lucky
              enough to be in your orbit — there would be a holiday named after you.
            </p>
            <p>
              I&apos;ve watched you navigate life with such poise, such fire. You&apos;ve turned challenges into
              chapters and setbacks into springboards. You don&apos;t just survive, Chi — you thrive. You bloom.
              You shine in ways that make the people around you feel like they&apos;re standing in sunshine.
            </p>
            <p>
              At 25, you stand at the most beautiful intersection — young enough to reach every dream still
              waiting for you. And trust me, they&apos;re all waiting. Because the universe owes you that and more.
            </p>
            <p>
              So here&apos;s what I need you to know on this incredible day: You are loved. You are seen. You are
              celebrated. Not just today — but every day. Happy 25th birthday, Adamazi. May this year be your
              most magnificent yet. 🌸✨
            </p>
            <div className="love-letter-close">
              With oceans of love,<br />
              Your biggest admirer 💛
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="ornament">💃 💃 💃</div>

        {/* GIF GRID */}
        <div className="section reveal">
          <h2 className="section-title">Birthday Moments 🎬</h2>
          <p className="section-sub">Because laughter is the best gift</p>
          <div className="gif-grid">
            {[
              { src: "https://media1.tenor.com/m/-VvqykxLmC8AAAAd/mr-bean-bean.gif",      alt: "Mr Bean Dancing",     label: "Mr Bean Approved", title: "🕺 The Birthday Dance",  caption: "When you remember it's your special day" },
              { src: "https://media1.tenor.com/m/IjWQ3Rr2yWcAAAAd/mr-bean-birthday.gif",  alt: "Birthday Oops",       label: "Classic Chaos",    title: "🎂 Oops, The Cake!",    caption: '"It wasn\'t me" — Mr. Bean, probably' },
              { src: "https://media1.tenor.com/m/qvRr3zF2b1QAAAAd/happy-happy-happy.gif", alt: "Happy Happy",         label: "Same Energy",      title: "😍 Pure Birthday Joy",  caption: "The only correct reaction to today" },
              { src: "https://media1.tenor.com/m/fOgYI8nVsXAAAAAd/mr-bean-dance.gif",     alt: "Teddy Dance",         label: "Dance Party",      title: "🧸 Teddy's Party Too",  caption: "Even Teddy is celebrating you!" },
              { src: "https://media1.tenor.com/m/2aqJLqCnJo4AAAAd/dance-celebration.gif", alt: "Celebration Dance",   label: "Birthday Vibes",   title: "💃 That Energy!",       caption: "How you'll be walking all day today" },
              { src: "https://media1.tenor.com/m/57CDWXQQm0AAAAAd/surprise-birthday.gif", alt: "Surprise",            label: "Just Like This",   title: "🎊 SURPRISE!!!",        caption: "That's you opening this right now 😄" },
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

        {/* VIBE CHECK */}
        <div className="section reveal">
          <h2 className="section-title">Chi&apos;s Vibes 🔥</h2>
          <p className="section-sub">This is your season, your moment, your year</p>
          <div className="vibe-grid">
            {[
              { icon: "👑", cls: "gold",  title: "Main Character Energy", desc: "Always have been, always will be" },
              { icon: "💅", cls: "pink",  title: "Unbothered Queen",       desc: "Too blessed to be stressed" },
              { icon: "🌺", cls: "mint",  title: "In Full Bloom",          desc: "20 and absolutely flourishing" },
              { icon: "🎯", cls: "lilac", title: "Goals & Grace",          desc: "She knows what she wants and goes for it" },
              { icon: "✨", cls: "gold",  title: "Pure Gold",              desc: "Rare, precious, irreplaceable" },
              { icon: "🦋", cls: "lilac", title: "Free Spirit",            desc: "She flies wherever she chooses" },
              { icon: "🔥", cls: "pink",  title: "On Fire",                desc: "2026 is her year and everyone knows it" },
              { icon: "💫", cls: "mint",  title: "Star Power",             desc: "She doesn't need a spotlight — she is one" },
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

        {/* WISHES TICKER — two rows, one forward one reverse */}
        <div className="section reveal" style={{ paddingBottom: "2rem" }}>
          <h2 className="section-title">Birthday Wishes 🌟</h2>
          <p className="section-sub">All the good things coming your way</p>
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

        {/* STICKY NOTE WALL — filled by JS */}
        <div className="section reveal">
          <h2 className="section-title">Sticky Note Wall 📝</h2>
          <p className="section-sub">Little notes for the birthday queen</p>
          <div className="wish-wall" id="wish-wall" />
        </div>

        <div className="divider" />
        <div className="ornament">⭐ ⭐ ⭐</div>

        {/* TIMELINE */}
        <div className="section reveal">
          <h2 className="section-title">Your Story So Far 📖</h2>
          <p className="section-sub">20 years of being absolutely amazing</p>
          <div className="timeline">
            {[
              { dot: "👶", year: "Day One",       text: "The world gains its most precious addition — you arrive and everything changes. 🌍" },
              { dot: "🌱", year: "Early Years",   text: "Curious, bright-eyed, full of wonder. You were always something special." },
              { dot: "📚", year: "School Days",   text: "Brilliant and hardworking — you outshine everyone while making it look effortless." },
              { dot: "🌸", year: "Teen Years",    text: "Glowing up, levelling up, absolutely thriving and turning heads everywhere." },
              { dot: "🔥", year: "Finding You",   text: "Discovering your power, your voice, your vision. Unstoppable force." },
              { dot: "🎂", year: "Today — 20!",   text: "Twenty years of pure greatness. The best chapter begins right now. 🥂" },
              { dot: "✨", year: "The Future",     text: "Everything beautiful, everything deserved. The whole world is yours, Chi. 🌟" },
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
          <p className="section-sub">Snapshots of a life beautifully lived</p>
          <div className="polaroid-grid">
            {[
              { src: "/images/chi.jpeg",   caption: "The Birthday Queen 👑",    fallbackColor: "FF3D79" },
              { src: "/images/chi 5.jpeg", caption: "Glowing & Thriving ✨",    fallbackColor: "C084FC" },
              { src: "/images/chi .jpeg",   caption: "25 & Fabulous 🌸",        fallbackColor: "FFD166" },
              { src: "/images/chi 6.jpeg", caption: "Blessed & Beautiful 💛",  fallbackColor: "06D6A0" },
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
          <span className="footer-emojis">🎉🎂🎁🎊🎈</span>
          <div className="footer-big">Happy 25th Birthday, Chi!</div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", marginBottom: "1.2rem", fontFamily: "'Dancing Script', cursive" }}>
            May every single day feel as special as you are 💛
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", marginBottom: "2rem", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            Adamazi — Asampete nwanyi oma 🌺
          </p>
          <p className="footer-small">Made with infinite love · April 23, 2026 ✨</p>
        </footer>

      </div>{/* end #celebration */}
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   ALL CLIENT-SIDE LOGIC — runs after mount, never on server
══════════════════════════════════════════════════════════ */
function initBirthday() {
  /* ── Star field ─────────────────────────────────────── */
  const bgCanvas = document.getElementById("bg-canvas") as HTMLCanvasElement;
  const bctx = bgCanvas.getContext("2d")!;

  type Star = { x:number; y:number; r:number; a:number; speed:number; drift:number; color:string; };
  const STAR_COLORS = ["255,255,255","255,209,102","255,61,121","192,132,252","6,214,160"];
  let stars: Star[] = [];

  function resizeBg() {
    bgCanvas.width  = window.innerWidth;
    bgCanvas.height = window.innerHeight;
  }
  resizeBg();
  window.addEventListener("resize", resizeBg);

  for (let i = 0; i < 180; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.2,
      a: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.009 + 0.002,
      drift: (Math.random() - 0.5) * 0.25,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    });
  }

  (function drawBg() {
    bctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    stars.forEach((s) => {
      s.a += s.speed;
      s.x += s.drift * 0.12;
      if (s.x < 0)              s.x = bgCanvas.width;
      if (s.x > bgCanvas.width) s.x = 0;
      const alpha = (Math.sin(s.a) * 0.5 + 0.5) * 0.75 + 0.08;
      bctx.beginPath();
      bctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      bctx.fillStyle = `rgba(${s.color},${alpha})`;
      bctx.fill();
    });
    requestAnimationFrame(drawBg);
  })();

  /* ── Floating petals (client-only, no SSR) ──────────── */
  const petalsLayer = document.getElementById("petals-layer")!;
  const PETAL_EMOJIS = ["🌸","🌺","✨","💫","⭐","🦋","🌟","💖","🎀","🌷"];

  function createPetal() {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)];
    const dur   = 8  + Math.random() * 10;
    const delay = Math.random() * 8;
    const size  = 1  + Math.random() * 0.8;
    p.style.cssText = `left:${Math.random()*100}%;font-size:${size}rem;animation-duration:${dur}s;animation-delay:${delay}s;`;
    petalsLayer.appendChild(p);
  }
  for (let pi = 0; pi < 22; pi++) createPetal();
  setInterval(() => { if (petalsLayer.children.length < 38) createPetal(); }, 2000);

  /* ── Confetti engine ────────────────────────────────── */
  const confettiCanvas = document.getElementById("confetti-canvas") as HTMLCanvasElement;
  // @ts-ignore — confetti loaded via CDN script tag
  const myConfetti = (window as any).confetti.create(confettiCanvas, { resize: true, useWorker: true });
  const COLORS = ["#FF3D79","#FFD166","#C084FC","#06D6A0","#ffffff","#ff9a3c"];

  function burst(ox?: number, oy?: number) {
    myConfetti({ particleCount: 90, spread: 100, origin: { x: ox ?? 0.5, y: oy ?? 0.5 }, colors: COLORS, scalar: 1.1 });
  }

  function megaBurst() {
    [0, 180, 360, 540, 720].forEach((delay) => {
      setTimeout(() => {
        myConfetti({ particleCount: 160, spread: 150, origin: { x: 0.5, y: 0.45 }, startVelocity: 35, colors: COLORS, scalar: 1.2 });
      }, delay);
    });
    setTimeout(() => {
      myConfetti({ particleCount: 130, spread: 70, angle: 60,  origin: { x: 0, y: 0.5 }, startVelocity: 30, colors: COLORS });
      myConfetti({ particleCount: 130, spread: 70, angle: 120, origin: { x: 1, y: 0.5 }, startVelocity: 30, colors: COLORS });
    }, 400);
    setTimeout(() => {
      myConfetti({ particleCount: 80, spread: 50, angle: 315, origin: { x: 0, y: 0.1 }, startVelocity: 25, colors: COLORS });
      myConfetti({ particleCount: 80, spread: 50, angle: 225, origin: { x: 1, y: 0.1 }, startVelocity: 25, colors: COLORS });
    }, 600);
    setTimeout(() => {
      myConfetti({ particleCount: 100, spread: 80, angle: 90, origin: { x: 0.25, y: 1 }, startVelocity: 40, colors: COLORS });
      myConfetti({ particleCount: 100, spread: 80, angle: 90, origin: { x: 0.75, y: 1 }, startVelocity: 40, colors: COLORS });
    }, 900);
  }

  function gentleShower() {
    myConfetti({ particleCount: 40, spread: 60, origin: { x: Math.random(), y: 0 }, startVelocity: 15, gravity: 0.5, colors: COLORS, scalar: 0.9 });
  }

  /* ── Reveal button ──────────────────────────────────── */
  const btn         = document.getElementById("reveal-btn")!;
  const landing     = document.getElementById("landing")!;
  const celebration = document.getElementById("celebration")!;

  btn.addEventListener("click", () => {
    megaBurst();
    landing.classList.add("hide");
    setTimeout(() => {
      landing.style.display = "none";
      celebration.classList.add("show");
      requestAnimationFrame(() => requestAnimationFrame(() => celebration.classList.add("visible")));
      setTimeout(megaBurst, 900);
      let showerCount = 0;
      const shower = setInterval(() => {
        showerCount++;
        gentleShower();
        if (showerCount > 20) clearInterval(shower);
      }, 2500);
    }, 750);
  });

  /* ── Mouse / touch sparkle trail ───────────────────── */
  const SPARK_COLORS = ["#FF3D79","#FFD166","#C084FC","#06D6A0","#ffffff"];
  let lastSparkle = 0;

  function spawnSparkle(x: number, y: number) {
    const now = Date.now();
    if (now - lastSparkle < 80) return;
    lastSparkle = now;
    const dot = document.createElement("div");
    dot.className = "sparkle-dot";
    const size = 6 + Math.random() * 10;
    dot.style.cssText = `width:${size}px;height:${size}px;left:${x - size/2}px;top:${y - size/2}px;background:${SPARK_COLORS[Math.floor(Math.random()*SPARK_COLORS.length)]};animation-duration:0.8s;`;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 900);
  }

  document.addEventListener("mousemove", (e) => spawnSparkle(e.clientX, e.clientY));
  document.addEventListener("touchmove", (e) => {
    spawnSparkle(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  /* ── Global confetti hover on interactive elements ── */
  const HOVER_SEL = ".gif-card,.message-card,.tl-body,.tl-dot,.hero-photo,.pill,.wish-chip,.love-card,.vibe-card,.polaroid,.wish-note";
  let hoverCD = false;

  document.addEventListener("mouseover", (e) => {
    if (hoverCD) return;
    const el = (e.target as Element).closest(HOVER_SEL);
    if (!el) return;
    hoverCD = true;
    setTimeout(() => { hoverCD = false; }, 900);
    const r = el.getBoundingClientRect();
    myConfetti({
      particleCount: 22, spread: 62,
      origin: { x: (r.left + r.width/2) / window.innerWidth, y: (r.top + r.height/2) / window.innerHeight },
      colors: COLORS, scalar: 0.65, startVelocity: 17, gravity: 0.9,
    });
  });

  document.addEventListener("touchstart", (e) => {
    const el = (e.target as Element).closest(HOVER_SEL);
    if (!el) return;
    const r = el.getBoundingClientRect();
    myConfetti({
      particleCount: 30, spread: 68,
      origin: { x: (r.left + r.width/2) / window.innerWidth, y: (r.top + r.height/2) / window.innerHeight },
      colors: COLORS, scalar: 0.72,
    });
  }, { passive: true });

  /* ── Tickers ────────────────────────────────────────── */
  const wishes1 = [
    "🌸 May you always bloom","💛 Endless happiness","🎂 20 & thriving",
    "✨ You deserve the world","🥂 To new adventures","💫 Big year ahead",
    "🌟 So proud of you","🎊 Queen behaviour only","💝 Loved beyond words",
    "🔥 Your best year yet","🌺 Grace & greatness","🎈 Keep shining bright",
    "💌 You are so loved","🦋 Beautiful transformation","🌈 All your dreams",
    "👑 Born to reign","💃 Dance through life","🍀 Luck finds you always",
  ];
  const wishes2 = [
    "🎀 Wrapped in love","🌙 May your nights be peaceful","☀️ May your days be golden",
    "💎 Rare & precious","🎵 Life in full melody","🌊 Flow gracefully",
    "🦚 Stand in your power","🍓 Sweet moments ahead","🌻 Always facing the sun",
    "💪 Stronger every year","🎯 Hit every target","🌟 Star of the show",
    "🧡 Wrapped in warmth","🎪 Life is your stage","🌿 Grow endlessly",
    "💜 Deeply cherished","🎶 Your song plays on","🍋 Squeeze every drop out of life",
  ];

  function fillTicker(id: string, arr: string[]) {
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

  /* ── Sticky note wall ───────────────────────────────── */
  const notes = [
    { text: "You are a whole vibe, Chi! 💖",                   bg: "rgba(255,61,121,0.25)",  pin: "#FF3D79" },
    { text: "The most gorgeous 20 year old I know ✨",          bg: "rgba(255,209,102,0.2)",  pin: "#FFD166" },
    { text: "God really took His time with you 🌸",             bg: "rgba(192,132,252,0.25)", pin: "#C084FC" },
    { text: "Wishing you a year as beautiful as your smile 😊", bg: "rgba(6,214,160,0.2)",    pin: "#06D6A0" },
    { text: "Chi = Light. It's right there in the name ☀️",     bg: "rgba(255,154,60,0.2)",   pin: "#FF9A3C" },
    { text: "20 and absolutely unstoppable 🔥",                 bg: "rgba(255,61,121,0.2)",   pin: "#FF3D79" },
    { text: "The world is lucky to have you 💛",                bg: "rgba(192,132,252,0.2)",  pin: "#C084FC" },
    { text: "Turning 20 like a queen 👑",                       bg: "rgba(255,209,102,0.25)", pin: "#FFD166" },
    { text: "You make everything better just by showing up 🌺", bg: "rgba(6,214,160,0.25)",   pin: "#06D6A0" },
    { text: "Big things are coming your way, Chi! 🚀",          bg: "rgba(255,61,121,0.22)",  pin: "#FF3D79" },
    { text: "Your glow? Unmatched. Your energy? Unreal ⚡",    bg: "rgba(192,132,252,0.22)", pin: "#C084FC" },
    { text: "Happy birthday to the realest one 💜",             bg: "rgba(255,154,60,0.22)",  pin: "#FF9A3C" },
  ];

  const wall = document.getElementById("wish-wall");
  if (wall) {
    notes.forEach((note, i) => {
      const div = document.createElement("div");
      div.className = "wish-note";
      div.style.background = note.bg;
      div.style.border = `1px solid ${note.pin}44`;
      div.style.transform = `rotate(${(i % 2 === 0 ? 1 : -1) * (Math.random() * 3)}deg)`;
      div.innerHTML = `<div class="wish-note-pin" style="background:${note.pin};"></div>${note.text}`;
      div.addEventListener("click", () => burst());
      wall.appendChild(div);
    });
  }

  /* ── Animated counters ──────────────────────────────── */
  function animateCounter(el: Element, target: number) {
    const duration = 2000;
    let startTime: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
    (function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      (el as HTMLElement).textContent = Math.floor(easeOut(progress) * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else (el as HTMLElement).textContent = target.toLocaleString();
    })(performance.now());
  }

  /* ── Scroll reveal + counter trigger ───────────────── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("visible");

      en.target.querySelectorAll("[data-target]").forEach((counter) => {
        if (!(counter as HTMLElement).dataset.animated) {
          (counter as HTMLElement).dataset.animated = "1";
          animateCounter(counter, parseInt((counter as HTMLElement).dataset.target!));
        }
      });

      if (
        en.target.querySelector(".message-card") ||
        en.target.querySelector(".footer-big") ||
        en.target.querySelector(".love-letter") ||
        en.target.querySelector(".stats-bar")
      ) {
        setTimeout(() => burst(Math.random(), 0.5), 300);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  /* ── GIF tap-to-restart ─────────────────────────────── */
  document.querySelectorAll(".gif-frame img").forEach((img) => {
    const src = (img as HTMLImageElement).src;
    img.addEventListener("click", () => {
      (img as HTMLImageElement).src = "";
      (img as HTMLImageElement).src = src;
    });
  });

  /* ── Periodic gentle confetti rain ─────────────────── */
  setInterval(() => {
    if (celebration.classList.contains("visible")) gentleShower();
  }, 6000);

  /* ── Mega burst when footer enters viewport ─────────── */
  let footerBursted = false;
  window.addEventListener("scroll", () => {
    if (footerBursted) return;
    const footer = document.querySelector(".footer");
    if (!footer) return;
    if (footer.getBoundingClientRect().top < window.innerHeight * 0.8) {
      footerBursted = true;
      megaBurst();
    }
  });
}