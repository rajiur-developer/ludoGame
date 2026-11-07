import Link from "next/link";
import { ArrowUpRight, Clock3, Gamepad2, Users } from "lucide-react";
import { QuickStats } from "./QuickStats";
import { WelcomeHero } from "./WelcomeHero";
import { GameBoardPreview } from "../game/GameBoardPreview";

const modes = [
  { title: "Play offline", desc: "Practice on this device", icon: Gamepad2, href: "/play/offline", tone: "mode-orange", tag: "QUICK START" },
  { title: "Play online", desc: "Meet players in the arena", icon: Users, href: "/play/online", tone: "mode-purple", tag: "COMING SOON" },
];

export function DashboardHome() {
  return <div className="dashboard-page">
    <WelcomeHero />
    <QuickStats />
    <section className="section-block">
      <div className="section-heading"><div><span className="section-kicker">CHOOSE YOUR EXPERIENCE</span><h2>Ready for a match?</h2></div><Link href="/play" className="text-link">All game modes <ArrowUpRight size={16} /></Link></div>
      <div className="mode-grid">
        {modes.map(({ title, desc, icon: Icon, href, tone, tag }) => <Link href={href} className="mode-card" key={title}>
          <div className={`mode-icon ${tone}`}><Icon size={22} /></div><span className="mode-tag">{tag}</span><h3>{title}</h3><p>{desc}</p><span className="mode-arrow"><ArrowUpRight size={18} /></span>
        </Link>)}
      </div>
    </section>
    <section className="section-block lower-grid">
      <div className="board-panel">
        <div className="panel-heading"><div><span className="section-kicker">THE CLASSIC, REIMAGINED</span><h2>Your arena awaits</h2></div><span className="mini-badge"><span /> BOARD PREVIEW</span></div>
        <div className="board-showcase"><GameBoardPreview /><div className="board-copy"><h3>Four colours.<br />One <span>epic</span> game.</h3><p>Bring friends or family together for a timeless Ludo match.</p><Link href="/play/offline" className="small-action">Explore the board <ArrowUpRight size={15} /></Link></div></div>
      </div>
      <aside className="activity-panel">
        <div className="panel-heading"><div><span className="section-kicker">YOUR JOURNEY</span><h2>Recent activity</h2></div><Clock3 size={18} className="muted-icon" /></div>
        <div className="empty-activity"><div className="empty-icon"><Gamepad2 size={23} /></div><strong>Your story starts here</strong><p>Play your first match and your activity will show up here.</p><Link href="/play/offline">Start a game <ArrowUpRight size={15} /></Link></div>
      </aside>
    </section>
    <footer className="dashboard-footer"><span>© 2026 Ludo Arena</span><span>Made for good times <b>♥</b></span></footer>
  </div>;
}
