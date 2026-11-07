import Link from "next/link";
import { ArrowRight, Play, Sparkles, Users } from "lucide-react";

export function WelcomeHero() {
  return (
    <section className="welcome-hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="hero-content">
        <div className="eyebrow"><Sparkles size={14} /> YOUR NEXT MOVE STARTS HERE</div>
        <h1>Every roll tells<br />a <span>new story.</span></h1>
        <p>Bring your people together, make your move, and enjoy the classic game with a fresh new feel.</p>
        <div className="hero-actions">
          <Link href="/play" className="btn-primary-custom"><Play size={16} fill="currentColor" /> Start playing <ArrowRight size={16} /></Link>
          <Link href="/friends" className="btn-ghost-custom"><Users size={17} /> Play with friends</Link>
        </div>
        <div className="hero-note"><span className="live-pulse" /> No entry fee. Just friendly competition.</div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-glow" />
        <div className="floating-chip chip-top">✦ <span>GOOD VIBES</span></div>
        <div className="dice-scene">
          <div className="dice dice-back"><i /><i /><i /><i /></div>
          <div className="dice dice-front"><i /><i /><i /><i /><i /></div>
          <div className="token token-red" /><div className="token token-yellow" /><div className="token token-green" />
        </div>
        <div className="floating-chip chip-bottom"><span className="chip-dot" /> LET'S PLAY</div>
      </div>
      <div className="hero-index"><span>01</span><i /> 03</div>
    </section>
  );
}
